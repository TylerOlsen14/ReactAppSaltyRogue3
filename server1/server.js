var express = require('express');
var expressGraphQL = require('express-graphql');
const schema = require('./schema.js')

const  app = express();
app.use('/graphql', expressGraphQL({
    schema: schema,
    // rootValue: root,
    graphiql: true
}));
app.listen(4000, () => {
    console.log('Express GraphQL Server Now Running On localhost:4000/graphql')
});