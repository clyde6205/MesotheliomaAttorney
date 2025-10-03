import express from 'express';
import cors from 'cors';
import leadRouter from './routes/leadRouter';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', leadRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
