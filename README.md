# API REST de Livros

API REST desenvolvida em Node.js com Express e PostgreSQL.

## Instalação

```bash
npm install
```

## Configuração do Banco de Dados

1. **Criar o banco de dados:**
```sql
CREATE DATABASE biblioteca;
```

2. **Criar a tabela:**
Execute o arquivo `src/database/schema.sql` no pgAdmin ou terminal do PostgreSQL.

3. **Popular o banco:**
Execute o arquivo `src/database/seed.sql` (insere 10 livros de exemplo).

## Dados de Exemplo

O banco será populado com **10 livros** com as seguintes características:

- **Total de livros:** 10
- **Categorias:**
  - Fantasia: 4 livros
  - Romance: 2 livros
  - Ficção: 2 livros
  - Infantil: 1 livro
  - Drama: 1 livro
- **Preços:** Variando de R$ 35,00 a R$ 120,00

## Configuração do .env

Crie um arquivo `.env` na raiz do projeto:

```env
DB_USER=postgres
DB_HOST=localhost
DB_NAME=biblioteca
DB_PASSWORD=sua_senha_postgres
DB_PORT=5432
```

## Executar

```bash
npm start
```

Servidor: `http://localhost:3000`

## Endpoints

1. **Livros por categoria:**
   - `GET /produtos/categoria/fantasia`
   - `GET /produtos/categoria/romance`

2. **Detalhes de um livro:**
   - `GET /produtos/1`

3. **Livros por preço máximo:**
   - `GET /produtos/preco?max=50`

## Como Testar

Após executar `npm start`, você pode testar as rotas de duas formas:

### 1. Navegador
Abra o navegador e acesse:
- `http://localhost:3000/produtos/categoria/fantasia`
- `http://localhost:3000/produtos/1`
- `http://localhost:3000/produtos/preco?max=50`

### 2. Postman ou curl
Use ferramentas como Postman ou execute no terminal:
```bash
curl http://localhost:3000/produtos/categoria/fantasia
```

## Estrutura

## Estrutura

```text
src/
├─ controllers/
│  └─ livrosController.js
├─ routes/
│  └─ livrosRoutes.js
├─ database/
│  ├─ db.js
│  ├─ schema.sql
│  └─ seed.sql
└─ app.js
```


