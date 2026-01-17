require('dotenv').config();
const express = require('express');
const app = express();

const livrosRouter = require('./routes/livrosRoutes');

app.use(express.json());
app.use('/produtos', livrosRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
  console.log(`📚 Endpoints disponíveis:`);
  console.log(`   - GET /produtos/categoria/:categoria`);
  console.log(`   - GET /produtos/:id`);
  console.log(`   - GET /produtos/preco?max=VALOR`);
});
