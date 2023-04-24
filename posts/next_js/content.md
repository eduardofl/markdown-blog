# Next.js
_30 de março de 2023, por [Eduardo](https://github.com/eduardofl)_

## O que é o Next.js?

Next.js é um framework baseado na biblioteca ReactJS, que se descreve como um framework React para produção. Enquanto a biblioteca React foca mais em facilitar o desenvolvimento de interfaces de usuário, o Next(vamos nos referir ao Next.js assim a partir desse momento) oferece recursos visando a construção de aplicações escaláveis e de grande porte, resolvendo alguns problemas presentes em aplicações React através da adição de algumas funcionalidades.

### Funcionalidades chave adicionadas

- Static Site Generation(SSG) - geração de páginas estáticas durante o build, que diminui o tempo de carregamento inicial, melhora performance e SEO da aplicação
- Server Side Rendering(SSR) - renderização da página no servidor e retorno do HTML montado para o usuário, o que melhora performance, SEO da aplicação e outros.
- File-based Routing - navegação entre telas baseado na estrutura de arquivos do projeto, utilizando apenas React geralmente precisamos utilizar a biblioteca `react-router` e implementar a navegação
- Capacidade full-stack - Possibilidade de adicionar código NodeJS à aplicação

## Conceitos básicos

### Navegação baseada em arquivos

- Como criar rotas baseadas no caminho do arquivo

- Criando rotas dinâmicas

  - Como criar rotas dinâmicas
  - Como acessar valores passados às rotas dinâmicas utilizando o hook `useRouter`

- Navegação entre páginas
  - Utilizando o component Link
  - Diferença entre uma tag de link `<a>` do html e do componente `Link` do Next (preserva o estado e oferece uma experiência melhor ao usuário)

### Page pre-rendering & Data fetching

### Combining "Standard React" & NextJS

### API Routes & Fullstack Capabilities

## Advanced Concepts

### Optimization Opportunities

### Looking behind the scenes & Theory

### Deployment & Configuration

### Authentication
