// ApolloServer -- se utiliza para crear el servidor.
const { ApolloServer, gql } = require('apollo-server');

//  constantes de prueba para elnviar informacion
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    year: 2019
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
    year: 2018
  },
];

// gql es un interprete de los datos y accciones para la aplicaciom
const typeDefs = gql`
  type AllBookType {
    title: String
    author: String
    year: Int
  }

  type User {
    nombre: String!
  }

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    allBooksResolver: [AllBookType]
  }
`;

// RESOLVERS: funciones que nos ejecutan actividades para queries y mutations
const resolvers = {
  Query: {
    books: () => books,
    allBooksResolver: () => books,
  }
};

// instancia de un servidor con definiciones (typeDefs) e implementacion (resolvers)
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});