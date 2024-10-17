import express from 'express';

const app = express();

app.get("/browse/journals-and-books", (req, res) => {
  return res.send("BAP browse page");
});

app.listen(3001, () => {
  console.log("BAP app started on 3001");
});