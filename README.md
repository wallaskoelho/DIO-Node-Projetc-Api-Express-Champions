# Projeto DIO.me - API REST com Node.js e Express

Este projeto é uma API REST desenvolvida utilizando Node.js e Express como parte do curso de formação em Node.js da DIO.me, ministrado pelo instrutor Felipão. A API permite a gestão de jogadores e clubes de futebol, incluindo operações de criação, leitura, atualização e exclusão (CRUD).

## Funcionalidades

A API oferece as seguintes funcionalidades:

### Jogadores
- **Obter todos os jogadores**: Retorna uma lista de todos os jogadores cadastrados.
- **Obter jogador por ID**: Retorna os detalhes de um jogador específico pelo seu ID.
- **Criar novo jogador**: Adiciona um novo jogador à base de dados.
- **Atualizar jogador**: Atualiza as informações de um jogador existente.
- **Deletar jogador**: Remove um jogador da base de dados.

### Clubes
- **Obter todos os clubes**: Retorna uma lista de todos os clubes cadastrados.

## Estrutura do Projeto

O projeto segue a estrutura MVC (Model-View-Controller) organizada da seguinte forma:

```
.
├── controllers
│   ├── players-controller.ts
│   └── clubs-controller.ts
├── models
│   ├── players-model.ts
│   └── statistics-model.ts
├── services
│   ├── players-services.ts
│   └── clubs-services.ts
├── utils
│   └── http-helper.ts
├── data
│   └── dataBase.json
├── app.ts
└── README.md
```

## Endpoints da API

### Jogadores

- **GET /players**
  - Retorna todos os jogadores.
- **GET /players/:id**
  - Retorna um jogador específico pelo ID.
- **POST /players**
  - Cria um novo jogador.
- **PUT /players/:id**
  - Atualiza as informações de um jogador pelo ID.
- **DELETE /players/:id**
  - Deleta um jogador pelo ID.

### Clubes

- **GET /clubs**
  - Retorna todos os clubes.

## Exemplos de Requisições

### Obter todos os jogadores

```bash
curl -X GET http://localhost:3333/players
```

### Obter jogador por ID

```bash
curl -X GET http://localhost:3333/players/1
```

### Criar novo jogador

```bash
curl -X POST http://localhost:3333/players -H "Content-Type: application/json" -d '{
  "name": "Novo Jogador",
  "club": "Novo Clube",
  "nationality": "Nacionalidade",
  "position": "Posição",
  "statistics": {
    "Overall": 80,
    "Pace": 70,
    "Shooting": 75,
    "Passing": 65,
    "Dribbling": 80,
    "Defending": 50,
    "Physical": 60
  }
}'
```

### Atualizar jogador

```bash
curl -X PUT http://localhost:3333/players/1 -H "Content-Type: application/json" -d '{
  "Overall": 85,
  "Pace": 75,
  "Shooting": 80,
  "Passing": 70,
  "Dribbling": 85,
  "Defending": 55,
  "Physical": 65
}'
```

### Deletar jogador

```bash
curl -X DELETE http://localhost:3333/players/1
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm run dev
```

## Contato

Para mais informações sobre o curso e o projeto, acesse [DIO.me](https://www.dio.me/) ou entre em contato com o instrutor Felipão.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).

---

**Nota**: Certifique-se de ajustar os detalhes como URL do repositório e informações de contato conforme necessário.