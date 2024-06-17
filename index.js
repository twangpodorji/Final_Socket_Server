//How to run a file using the bun
import figlet from "figlet";

const server = Bun.serve({
  // a functions that create a server and return the server object
  port: 1234,
  fetch(req) {
    // it is a function that will be called when a request is made to the server
    const body = figlet.textSync("wangs"); // it will return the ascii art of the text "wangpo" in body
    return new Response(body); // it will return the body in the response
    return new Response("Bun!"); // it will return the text "Bun!" in the response
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
