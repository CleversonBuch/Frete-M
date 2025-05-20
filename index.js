import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const ORIGEM_CEP = '83601030'; // Campo Largo
const PRECO_POR_KM = 2.50; // R$ por KM

app.post('/frete', (req, res) => {
  const { destino, distancia_km } = req.body;

  if (!destino || !distancia_km) {
    return res.status(400).json({ erro: 'Informe destino e distancia_km' });
  }

  const valor = distancia_km * PRECO_POR_KM;

  return res.json({
    nome: 'Motoboy Local',
    prazo_entrega: 1,
    valor: valor.toFixed(2)
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
