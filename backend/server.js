import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const port = process.env.PORT || 8080;
app.listen(5000, () => {
  console.log(`Backend is runing on ${port}`);
});
// define routes

app.get("/test", (req, res) => {
  return res.json("Is Ok");
});
