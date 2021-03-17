import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";
const typeDefs = `
    #consulta
    type Query {
        hello: String
        greet(name: String!): String #se le pasa argumento (name: String!) 
                                     # ! => dato obligatorio  
        tasks: [Task]
    }

    type Task {
        _id: ID
        title: String!
        descripcion: String!
        number: Int
    }

    # enviar datos al servidor 
    type Mutation {
        # se neceista un TaskInput para poder crear algo
        createTask(input: TaskInput): Task
    }

    # creado para hacer posible la mutacion
    input TaskInput {
        title: String!
        descripcion: String!
        number: Int
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})

