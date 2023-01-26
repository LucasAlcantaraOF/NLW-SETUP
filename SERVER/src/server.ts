import fastify from "fastify";

const app = fastify()

/*
    Método: HTTP: Get, Post, Put, Patch, Delete
*/

app.get('/', () =>{
    return 'Hello world'
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
})