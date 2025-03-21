Primeiro Site - Lista de Tarefas

Este repositório contém um projeto simples de React que apresenta um site interativo onde o usuário pode alterar o nome exibido na tela, cadastrar tarefas e personalizar a cor de fundo da aplicação.

📌 Tecnologias Utilizadas

React.js

JavaScript (ES6+)

LocalStorage para persistência de dados

Hooks do React (useState, useEffect)

📂 Estrutura do Projeto

O projeto é composto pelos seguintes arquivos principais:

App.js: Componente principal do projeto, onde um nome é exibido na tela e pode ser alterado ao clicar em um botão.

Cadastro.js: Componente responsável pelo cadastro de tarefas e pela personalização da cor de fundo da aplicação.

Componentes/Nome.js: Componente que exibe o nome do usuário (não fornecido nos arquivos, mas referenciado no ********************************App.js).

⚙️ Funcionalidades

1️⃣ Alterar Nome (App.js)

O nome do usuário é armazenado no estado e pode ser alterado ao clicar no botão "Alterar Nome".

2️⃣ Cadastro de Tarefas (Cadastro.js)

O usuário pode adicionar tarefas a uma lista, que serão armazenadas no LocalStorage para persistência entre recarregamentos da página.

As tarefas cadastradas são exibidas em uma lista na interface.

3️⃣ Personalização da Cor de Fundo (Cadastro.js)

O usuário pode selecionar uma cor de fundo entre as opções disponíveis (Branco, Azul Claro, Verde Claro e Preto).

A preferência de cor é armazenada no LocalStorage e reaplicada automaticamente ao recarregar a página.

🚀 Como Executar o Projeto

Clone este repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git

Acesse o diretório do projeto:

cd primeiro-site

Instale as dependências:

npm install

Inicie o servidor de desenvolvimento:

npm start

Acesse no navegador:

http://localhost:3000

💡 Melhorias Futuras

Adicionar a funcionalidade de excluir tarefas.

Implementar um sistema de autenticação para diferentes usuários.

Melhorar o design da interface utilizando CSS ou frameworks como Tailwind CSS.





Melhorar o design da interface utilizando CSS ou frameworks como Tailwind CSS.

📜 Licença

Este projeto está licenciado sob a MIT License.
