const pool = require('../database/db');

// Listar por categoria
async function listarPorCategoria(req, res) {
  try {
    const categoria = req.params.categoria;
    const result = await pool.query(
      'SELECT * FROM livros WHERE categoria = $1',
      [categoria]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ erro: `Nenhum livro encontrado na categoria "${categoria}"` });
    }
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar livros por categoria:', err);
    res.status(500).json({ erro: 'Erro ao buscar livros no banco de dados' });
  }
}

// Detalhe de um livro específico
async function detalhesPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    const result = await pool.query(
      'SELECT * FROM livros WHERE id = $1',
      [id]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ erro: 'Livro não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao buscar livro por ID:', err);
    res.status(500).json({ erro: 'Erro ao buscar livro no banco de dados' });
  }
}

// Buscar livros por preço máximo
async function listarPorPrecoMax(req, res) {
  try {
    const precoMax = parseFloat(req.query.max);
    
    // Valida se o parâmetro max foi fornecido e é um número válido
    if (!req.query.max || isNaN(precoMax) || precoMax < 0) {
      return res.status(400).json({ erro: 'Parâmetro "max" inválido. Forneça um número válido.' });
    }
    
    const result = await pool.query(
      'SELECT * FROM livros WHERE preco <= $1',
      [precoMax]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ erro: `Nenhum livro encontrado com preço menor ou igual a R$ ${precoMax.toFixed(2)}` });
    }
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar livros por preço:', err);
    res.status(500).json({ erro: 'Erro ao buscar livros no banco de dados' });
  }
}

module.exports = {
  listarPorCategoria,
  detalhesPorId,
  listarPorPrecoMax
};
