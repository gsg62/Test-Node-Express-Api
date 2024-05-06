const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/test", (req, res) => {
  return res.status(200).send("hello world");
});

app.post("/test/:queryParam", (req, res) => {
  const { queryParam } = req.params;
  const { data } = req.body;
  return res.status(200).send({
    queryParam: queryParam,
    body: data,
  });
});

app.listen(PORT, () => console.log(`its alive on localhost:${PORT}`));
