// require("dotenv").config();
// const express = require("express");
// const connectToDB = require("./database/db");
// const authRoutes = require("./routes/auth-routes");
// const homeRoutes = require("./routes/home-routes");
// const adminRoutes = require("./routes/admin-routes");
// const uploadImageRoutes = require("./routes/image-routes");

// const productRoutes = require("./routes/product-routes");
// const bookRoutes = require("./routes/book-routes");

// connectToDB();
// const app = express();
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/home", homeRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/image", uploadImageRoutes);

// app.use("/products", productRoutes);
// app.use("/reference", bookRoutes);

// app.listen(process.env.PORT, () => {
//   console.log("Server is running.");
// });

// ==========GraphQL============ //
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolver");

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server ready at: ${url}`);
}

startServer();
