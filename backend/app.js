const express = require('express');
const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors())

const router = require("./router/router.js");

app.use(router);

app.listen(8010, () => {
    console.log("Servidor rodando.... port 8010");
});
