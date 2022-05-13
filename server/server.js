import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from "./routes/userRouter.js";
const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

import userRouter from "./routes/user.js";

const CONNECTION_URL = 'mongodb+srv://sylviamakowiec:<password>@cluster0.z6ydo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 8000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);