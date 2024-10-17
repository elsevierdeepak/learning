import express from 'express';

const app = express();

app.get("/browse/journals-and-books", (req, res) => {
  return res.send("PLP brose page");
});

app.listen(3000, () => {
  console.log("PLP app started on 3000");
});