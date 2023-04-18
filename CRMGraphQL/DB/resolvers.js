

//resolver
const resolvers = {
    Query: {
        obtenerCurso: () => "Algo"
    },
    Mutation: {
        nuevoUsuario: (_,{input}) => {
            console.log(input)
             return "Creando usuario"
        }
    }
}

module.exports = resolvers