// O dotenv já é carregado no app.js antes deste arquivo ser importado
const { Pool } = require('pg');

// Valida se as variáveis de ambiente estão configuradas
const requiredEnvVars = ['DB_USER', 'DB_HOST', 'DB_NAME', 'DB_PASSWORD', 'DB_PORT'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Erro: Variáveis de ambiente não configuradas:', missingVars.join(', '));
  console.error('Certifique-se de que o arquivo .env existe na raiz do projeto.');
}

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Testa a conexão ao criar o pool
pool.on('error', (err) => {
  console.error('❌ Erro inesperado no pool do PostgreSQL:', err);
});

module.exports = pool;
