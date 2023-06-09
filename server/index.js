import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);
dotenv.config();

app.get("/", async (req, res) => {
  res.send("Hello from the other side");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log(
        "Server has started on port https://image-generator-ai-jd4g.onrender.com"
      )
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
