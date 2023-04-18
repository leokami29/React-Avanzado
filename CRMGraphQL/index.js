const {ApolloServer} = require('apollo-server')
const typeDefs = require('./DB/schema')
const resolvers = require('./DB/resolvers')

const conectarDB = require('./config/db')

//conectar a ala base dedatos
conectarDB()

//servidor 
const server = new ApolloServer({
    typeDefs,
    resolvers, 
})

//arrancar el servidor 
server.listen().then( ({url}) => {
    console.log(`Servidor listo en la URL ${url}`)
})