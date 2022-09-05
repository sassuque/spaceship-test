# Teste Estagiário / Júnior Spaceship

Bem vindo ao teste da Spaceship Foundation! O exame a seguir foi criado pra avaliar sua habilidade de aprender a utilizar nossa stack, incluindo buscar conhecimento, conforto em fazer perguntas e identificar as partes importantes do código.

## Stack

A stack que utilizamos é chamada [T3 Stack](https://create.t3.gg/), uma stack focada e integrada através de TypeScript garantindo iterações rápidas e facilidade de onboarding. Os principais pontos são:

- [TypeScript](https://www.typescriptlang.org/)
   
  Fundamento de qualquer desenvolvimento moderno Web/NodeJS. Aprimora o JavaScript tradicional ao trazer tipagem a linguagem.

- [Next JS](https://nextjs.org/)

  Framework que traz React para o Server. Habilita renderização no servidor melhorando SEO, geração estática de páginas e facilita roteamento entre páginas

- [Prisma](https://www.prisma.io/)

  ORM focada em TypeScript. Gera tipagem após alterações no Schema, gerencia mutações e fornece uma API simplificada para Read e Write no banco de dados

- [Tailwind CSS](https://tailwindcss.com/)

  Pacote de estilização através de classes de utilidade. Fornece um padrão de design atrativo além de customização para layouts responsivos

- [tRPC](https://trpc.io/)

  Pacote de criação de APIs que garante a integridade de tipos do back ao front-end, além de facilidade de desenvolvimento

## Execução do projeto

Para executar o projeto primeiramente execute `npm install` ou `yarn install`, caso tenha yarn instalado. Após a instalação das dependências o banco de dados local será migrado automaticamente e os dados iniciais (seed) serão criados.

Para executar o servidor utilize o comando `npm run dev` ou `yarn dev`. O projeto estará disponível em `http://localhost:3000`

## Estrutura

- Páginas web
  
  Todas as paginas web estão sob `src/pages` dado o padrão do NextJs

- Servidor tRPC

  Todas as rotas (chamadas de API) do tRPC estão localizadas em `src/server/router`. Para este teste você precisara fazer algumas alterações no arquivo `src/server/router/todos.ts`

- Schema do banco de dados
  
  Todos os arquivos relevantes ao Prisma estao na pasta `prisma`. Isso inclui o Schema (mapeamento de tabelas e relações) e o arquivo sqlite (banco local)
## Tarefas

Abaixo estão as tarefas que você deve executar, em ordem de prioridade

1. Deixar a lista de TODOs responsiva.

    Utilizando Flex Box, faça com que a lista de TODOs suporte mais de um item horizontalmente quando em telas largas dinamicamente.

    Arquivo relevante: `src/pages/index.tsx`

2. Detalhe de todo

    Ao clicar em um item da lista você é redirecionado a uma página específica daquele item. 

    Esta pagina ainda não puxa os dados do item de forma correta do banco de dados. Você precisará implementar a chamada no backend para encontrar um item por seu ID que é utilizada no frontend, e fazer com que a página exiba os dados retornados.

    Arquivos relevantes:
    - `src/server/router/todos.ts`
    - `src/pages/todo/[id].tsx`

3. Formulário de criar novo item

    O formulário da página principal deve conter todos os campos necessários para criação de um TODO, além de fazer a chamada correta de banco de dados. 
    
    Para isso, adicione um campo `description` (textarea) utilizando o campo `title` de referência. Depois crie a chamada no backend que executa a criação de um novo item.

    Arquivos relevantes:
    - `src/pages/index.tsx`
    - `src/server/router/todos.ts`
    - https://react-hook-form.com/

4. Estilização do formulário

    Adicione estilos aos campos e botão do formulário de forma que fique de acordo com o [design neste Figma](https://www.figma.com/file/Ie30m2tZq2pcDhEfyIcUfD/Xhibiter.1.0?node-id=1090%3A14836). 
    
    Estilos de interação como mudar a cor da borda ao selecionar e mudança do botão ao passar o mouse por cima não são obrigatórios mas interessante. Não precisa preocupar com a fonte

5. Excluir um TODO

    **Este item requer que você execute tudo que aprendeu das tarefas acima.**

    O botão de deletar um TODO existe mas não possui funcionalidade.

    Crie a chamada de backend para deletar o item e chame o hook correto no frontend pra que ela seja executada quando clicar um botão. A chamada deve deletar o todo correto, por seu ID.