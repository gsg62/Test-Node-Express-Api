const express = require("express");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000; // uses 8080 for local dev

app.use(express.json());

app.get("/test", (req, res) => {
  // do stuff to get data
  return res.status(200).send("hello world");
});

app.post("/test/:queryParam", (req, res) => {
  const { queryParam } = req.params;
  const { data } = req.body;
  // do stuff to create data
  return res.status(200).send({
    queryParam: queryParam,
    body: data,
  });
});

app.put("/test/:queryParam", (req, res) => {
  const { queryParam } = req.params;
  const { data } = req.body;
  // do stuff to update data
  return res.status(200).send({
    queryParam: queryParam,
    body: data,
  });
});

app.listen(PORT, () => console.log(`its alive on localhost:${PORT}`));
