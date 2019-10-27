const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
// The data below is mocked.
const Data = require("/Users/Eugene/Desktop/apiproject/Tests/index");
const config = require("../config.js");
const knex = require("knex")(config.db);

// The schema should model the full data object available.
const schema = buildSchema(`
  type fantano {
      ARTISTS: String
      ALBUM_TITLE: String
      SCORE: String
  }
  type Query {
    Fantanos: [fantano]
    Fantano(artist: String!): [fantano]
  }
  type Mutation {
    addReview(artist:String, album:String, score:String) : fantano
    editTitle(originalName: String, newName: String): fantano
    editArtist(originalName: String, newName: String): fantano
    editScore(album:String, newScore: String): fantano
    deleteReview(name: String): fantano
  }
`);

// The root provides the resolver functions for each type of query or mutation.
const root = {
  Fantanos: () => {
    //res.status(200);
    return knex("Reviews")
      .select()
      .catch(error => console.log(error));
  },

  /*   Fantano: request => {
    let arr = [];
    for (let artistName of Data.data) {
      if (artistName.ARTISTS === request.artist) arr.push(artistName);
    }
    return arr;
  }, */

  Fantano: request => {
    console.log(request.artist);
    return knex("Reviews")
      .select()
      .where({ ARTISTS: request.artist });
  },

  addReview: request => {
    return knex("Reviews").insert([
      {
        ARTISTS: request.artist,
        ALBUM_TITLE: request.album,
        SCORE: request.score
      }
    ]);
  },

  /*   addReview: request => {
    let obj = {
      ARTISTS: request.artist,
      ALBUM_TITLE: request.album,
      SCORE: request.score
    };
    Data.data.push(obj);

    return Data.data;
  }, */

  editTitle: request => {
    return knex("Reviews")
      .where({ ALBUM_TITLE: request.originalName })
      .update({ ALBUM_TITLE: request.newName });
  },

  editArtist: request => {
    return knex("Reviews")
      .where({ ARTISTS: request.originalName })
      .update({ ARTISTS: request.newName });
  },
  /*   editReview: request => {
    results = [];
    for (const review of Data.data) {
      if (review.ALBUM_TITLE === request.album) {
        review.ALBUM_TITLE = request.newName;
        results.push(review);
      } else if (review.ARTISTS === request.originalName) {
        review.ARTISTS = request.newName;
        results.push(review);
      }
    }
    return results;
  }, */

  editScore: request => {
    return knex("Reviews")
      .where({ ALBUM_TITLE: request.album })
      .update({ SCORE: request.newScore });
  },
  /*   editScore: request => {
    for (const review of Data.data) {
      if (review.ALBUM_TITLE === request.album) {
        review.SCORE = request.newScore;
        return review;
      }
    }
    return "Cannot be found";
  }, */

  deleteReview: request => {
    return knex("Reviews")
      .where({ ALBUM_TITLE: request.name })
      .del();
  }

  /*   deleteReview: request => {
    for (let i = 0; i < Data.data.length; i++) {
      if (Data.data[i].ARTISTS === request.name) Data.data.splice(i, 1);
      else if (Data.data[i].ALBUM_TITLE === request.name)
        Data.data.splice(i, 1);
    }
    return Data.data;
  } */
};

// Start your express server!
const app = express();

/*
  The only endpoint for your server is `/graphql`- if you are fetching a resource, 
  you will need to POST your query to that endpoint. Suggestion: check out Apollo-Fetch
  or Apollo-Client. Note below where the schema and resolvers are connected. Setting graphiql
  to 'true' gives you an in-browser explorer to test your queries.
*/
app.use(
  "/graphql",
  express.json(),
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

const path = require("path");
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
});
