const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Product {
    id: ID!
    title: String!
    category: String!
    price: Float!
    inStock: Boolean!
    tags: [String]
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }
`;

module.exports = typeDefs;
