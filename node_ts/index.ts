import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req: any, res: any) => {
  res.send({ message: "Hello World" });
});

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
