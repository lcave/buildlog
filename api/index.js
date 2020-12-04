const { PrismaClient } = require("@prisma/client");
const { GraphQLServer } = require("graphql-yoga");

const prisma = new PrismaClient();

console.log(process.env.DATABASE_URL);

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
};

const server = new GraphQLServer({
  typeDefs: "./schema/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma,
    };
  },
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
