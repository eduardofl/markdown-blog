# Markdown Blog

Simple blog application built with Next.js and react-markdown. It allows you to write your blog posts in Markdown format and then easily publish them as static files.

## Getting Started

### Installation

Clone the repository
```
git clone https://github.com/eduardofl/markdown-blog.git
```
Install the dependencies:
```
npm install
```

## Usage

### Creating new posts
To create a new blog post, create a new folder in the posts directory. Inside this folder you should create a `content.md` file, with the content of the blog post, and a `metadata.json` file with some necessary information for the post listing. The metadata file should have the following structure:
```
{
  "title": "Blog post title",
  "date": "2023-03-30T23:28:28Z",
  "description": "A description of the post, which will be displayed in the posts list."
}
```
- The content of the blog post should be written in Markdown format.
- The date property should be informed in UTC format libe above, to avoid converting problems.

### Running in development mode

To run the project in development mode, just run the command:

```
npm run dev
```

This will start a development server at http://localhost:3000. You can access the blog by opening this URL in your browser.

### Building

To create the build use the command:

```
npm run build
```

Or create the build and run:
```
npm run build && npm start
```

---

## Code check and tests

### Running Lint

To run lint, type the command:

```
npm run lint
```

### Git hooks

To enable pre commit hook that runs lint and tests, use the command:

```
chmod +x .git-hooks/pre-commit
```
