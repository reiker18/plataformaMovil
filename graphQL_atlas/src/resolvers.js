// se crean funciones dentro de un objeto
import { tasks } from "./sample";

export const resolvers = {
    Query: {
        hello: () => {
            return 'hola mundo';
        },
        greet: (root, {name}) => {
            
            return `hello! ${name}`;
        },
        tasks: () => {
            return tasks;
        }
    },

    Mutation: {
        createTask(_, { input }){
            input._id = tasks.length;
            tasks.push(input);
            return input;
        }
    }
}