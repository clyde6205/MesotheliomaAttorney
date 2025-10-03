import express from 'express';
import cors from 'cors';
import leadRouter from './routes/leadRouter';
import healthRouter from './routes/health';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', leadRouter);
app.use('/api', healthRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
