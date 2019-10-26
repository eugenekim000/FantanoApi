const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
// The data below is mocked.
const Data = require("/Users/Eugene/Desktop/apiproject/Tests/index");

// The schema should model the full data object available.
const schema = buildSchema(`
  type fantano {
      ARTISTS: String
      ALBUM_TITLE: String
      SCORE: String
  }
  type Query {
    Fantanos: [fantano]
    Fantano(artist: String!): String
  }
  type Mutation {
    addReview(name: String): [fantano]
    editReview(originalName: String, newName: String): [fantano]
    editScore(album:String, newScore: String): fantano
    deleteReview(name: String): [fantano]
  }
`);

// The root provides the resolver functions for each type of query or mutation.
const root = {
  Fantanos: () => {
    return Data.data;
  },

  Fantano: artist => {
    for (let artistName of Data.data) {
      if (artistName.ARTISTS.toLowercase() === artist.toLowerCase())
        return artist;
    }
  },
  addReview: request => {
    Data.data.push(request);
    return Data.data;
  },

  editReview: request => {
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
  },

  editScore: request => {
    for (const review of Data.data) {
      if (review.ALBUM_TITLE === request.album) {
        review.SCORE = request.newScore;
        return review;
      }
    }
    return "Cannot be found";
  },

  deleteReview: request => {
    for (let i = 0; i < Data.data.length; i++) {
      if (Data.data[i].ARTISTS === request.name) Data.data.splice(i, 1);
      else if (Data.data[i].ALBUM_TITLE === request.name)
        Data.data.splice(i, 1);
    }
    return Data.data;
  },
  Pokemon: request => {
    return Data.data.find(pokemon => pokemon.name === request.name);
  }
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
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`);
});
