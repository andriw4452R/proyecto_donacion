import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import donacionRoutes from './routes/donacion.routes';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// 👇 Aquí está el problema. Asegúrate de NO poner paréntesis.
app.use('/api/donaciones', donacionRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
