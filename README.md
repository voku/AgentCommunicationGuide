# Agent Communication Guide

> **Stop Writing Better Prompts. Build Better Systems.**

An interactive article about coding agents that is deliberately opinionated, pragmatic, and grounded in day-to-day engineering work.

Live at: **https://voku.github.io/AgentCommunicationGuide/**

## What's Inside

- **The real problem**: why prompt engineering is the wrong place to look for reliability
- **Why constraints win**: tests, static analysis, CI, and repository examples beat prose
- **Put rules in files**: AGENTS.md, reusable workflows, Makefiles, specs, TODOs, and validation checklists
- **Same task, better system**: one PHP bugfix task with three instruction styles and very different outcomes
- **What fails in practice**: common failure stories from real codebases
- **Practical rules**: a short checklist for making coding agents less annoying and more predictable

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

The output is in the `dist/` directory.

## Contributing

Found an error, have a better example, or want to sharpen the argument?
**Pull requests are welcome at [github.com/voku/AgentCommunicationGuide](https://github.com/voku/AgentCommunicationGuide)**

## License

MIT
