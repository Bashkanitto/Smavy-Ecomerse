import express from 'express';
const app = express();
import cors from 'cors';

const port =  8800;

app.use(cors());
app.listen(port)

app.use(function (req, res) {
  return res.status(404).json({ message: 'Endpoint not found' });
});