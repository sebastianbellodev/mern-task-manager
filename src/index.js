import app from "./app.js";

const port = 3000;
const url = `http://localhost:${port}`;

app.listen(port);
console.log("Server listening on port", port);
