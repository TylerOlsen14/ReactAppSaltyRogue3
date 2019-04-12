const axios = require('axios')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLBoolean
} = require('graphql');

// //Hardcoded data
// const clients = [
//     {
//         id: '1',
//         name: 'Tyler Olsen',
//         address: '2 south, North Pole, Russia',
//         phoneNumber: '5',
//         email: 'T@gmail.com',
//         postcard: false
//     },
//     {
//         id: '2',
//         name: 'John Hamm',
//         address: '5th East, 5th Avenue, NY, NY',
//         phoneNumber: '45678',
//         email: 'Johnny@BabyDriver.com',
//         postcard: true
//     },
//     {
//         id: '3',
//         name: 'Franz Kafka',
//         address: 'Somewhere, Poland',
//         phoneNumber: '465',
//         email: 'Gregor.Samsa@gmail.com',
//         postcard: false
//     }
// ]


//Client Type
const ClientType = new GraphQLObjectType({
    name:'client',
    fields:() => ({
        id: {type:GraphQLInt},
        name: {type:GraphQLString},
        address: {type:GraphQLString},
        phoneNumber: {type:GraphQLInt},
        email: {type:GraphQLString},
        postcard: {type:GraphQLBoolean},
    })
});

// Root Query
const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        client:{
            type:ClientType,
            args: {
                id:{type: GraphQLInt}            
            },
            resolve(parentValue, args){
                // for(let i=0;i < clients.length;i++){
                //     if(clients[i].id == args.id){
                //         return clients[i]
                //     }
                // }
                return axios.get('http://localhost:3000/clients/'+ args.id)
                    .then(res => res.data);
            }
        },
        clients:{
            type: new GraphQLList(ClientType),
            resolve(parentValue, args){
                return axios.get('http://localhost:3000/clients')
                .then(res => res.data);
            }
        }
    }
})

// Mutations
const mutation = new GraphQLObjectType({
    name: "mutation",
    fields:{
        addClient:{
            type:ClientType,
            args:{
                id: {type: new GraphQLNonNull(GraphQLInt)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                address: {type: new GraphQLNonNull(GraphQLString)},
                phoneNumber: {type: new GraphQLNonNull(GraphQLInt)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                postcard: {type: new GraphQLNonNull(GraphQLBoolean)},
            },
            resolve(parentValue, args){
                return axios.post('http://localhost:3000/clients',{
                    id:args.id,
                    name:args.name,
                    address:args.address,
                    phoneNumber:args.phoneNumber,
                    email:args.email,
                    postcard:args.postcard
                })
                .then(res => res.data);
            }
        },
        deleteClient:{
            type:ClientType,
            args:{
                id: {type: new GraphQLNonNull(GraphQLInt)},
            },
            resolve(parentValue, args){
                return axios.delete('http://localhost:3000/clients/'+args.id)
                .then(res => res.data);
            }
        },
        editClient:{
            type:ClientType,
            args:{
                id: {type: new GraphQLNonNull(GraphQLInt)},
                name: {type: GraphQLString},
                address: {type: GraphQLString},
                phoneNumber: {type: GraphQLInt},
                email: {type: GraphQLString},
                postcard: {type: GraphQLBoolean},
            },
            resolve(parentValue, args){
                return axios.patch('http://localhost:3000/clients/'+args.id, args)
                .then(res => res.data);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})