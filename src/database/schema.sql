CREATE TABLE livros (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(150),
  autor VARCHAR(100),
  categoria VARCHAR(50),
  preco DECIMAL(8,2),
  descricao TEXT
);
