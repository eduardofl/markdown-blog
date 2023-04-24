# Utilizando o Markdown para formatar os posts
_24 de abril de 2023, por [Eduardo](https://github.com/eduardofl)_

## O que é o Markdown?

Markdown é uma linguagem de marcação que usa uma sintaxe simples para formatar text. O principal objetivo com a criação da linguagem é entregar uma forma simples de escrever conteúdo para a internet. Utilizando Markdown é possível criar headers, listas, links e mais de forma simples, é um jeito fácil de organizar o texto e exibir de forma mais estruturada.

## Formatação com Markdown

O Markdown oferece várias opções de formatação diferentes, seguem abaixo os elementos de formatação e o resultado obtido ao utilizá-los nesse blog:

### Header

Para criar um header utilize o caractere `#` antes de uma frase.

Para diminuir a relevância do header, utilize o caractere mais de uma vez. Por exemplo, `#` vai gerar um header equivalente a um `<h1>` e `##` vai gerar um header equivalente a um `<h2>`.

Resultado:

# Header 1
## Header 2
### Header 3

---

### Negrito
Para formatar o texto em negrito utilize asteriscos duplos ao redor dele, da seguinte forma `**Texto em negrito**`

Resultado:

**Exemplo de texto em negrito**

---

### Itálico

Para formatar o texto em itálico utilize asteriscos simples ao redor dele, da seguinte forma `*Texto em itálico*`

Resultado:

*Exemplo de texto em itálico*

---

### Citação

Para criar uma citação, utilize `>` antes de uma sentenção, da seguinte forma `> Minha citação`

Resultado:

> Exemplo de citação

---

### Lista ordenada

Para criar uma lista ordenada, utilize um número seguido de ponto e espaço para cada item da lista, da seguinte forma:
```
1. Item um
2. Item dois
3. Item três
```

Resultado:
1. Item um
2. Item dois
3. Item três

---

### Lista não-ordenada

Para criar uma lista não-ordenada, utilize um hífen seguido de espaço para cada item da lista, da seguinte forma:

```
- Item um
- Item dois
- Item três
```

Resultado:
- Item um
- Item dois
- Item três

---

### Código

Para formatar código, utilize a crase ao redor das sentenças, sendo crase simples para gerar um trecho de código na linha, e crases triplas para gerar um bloco de código. Da seguinte forma:

\`código em linha\`

\`\`\`
\
código em bloco
\
\`\`\`

Resultado:

`Código em linha`

```
Código
em
bloco
```

---

### Linha horizontal

Para criar uma linha divisora horizontal, utilize três hífens seguidos. Assim: `---`

Resultado:

---

Assine aqui

---

### Links

Para utilizar links, a sintaxe utilizada é a seguinte: `[title](https://www.example.com)`. Sendo o valor entre `[]` o texto a ser exibido, e o valor entre `()` o link a ser inserido.

Resultado:

[Exemplo de link - HTTP Status Dogs](https://httpstatusdogs.com/)

---

### Imagens

Para inserir imagens, a sintaxe utilizada é a seguinte: `![alt text](image.jpg)`. Sendo o valor entre `[]` o texto alternativo da imagem, e o valor entre `()` o caminho da imagem utilizada.

Resultado:

![alt text](/post-images/markdown.png)

## Conclusão

Esses são alguns dos elementos chaves para realizar a formatação de texto utilizando Markdown, espero que possa te ajudar de alguma forma.