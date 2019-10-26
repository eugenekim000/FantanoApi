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
  }
`);

// The root provides the resolver functions for each type of query or mutation.
const root = {
  Fantanos: () => {
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
