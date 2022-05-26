import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from "./routes/userRouter.js";
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// app.use('/', userRouter)
const PORT = process.env.PORT|| 8000;

const CONNECTION_URL = 'mongodb+srv://sylviamakowiec:wbvLe3YMnPgwpuMT@cluster0.z6ydo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));