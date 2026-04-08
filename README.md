<div align="center">
<img width="1200" height="475" alt="Agent Communication Guide Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Agent Communication Guide

> **How to Talk to Your Coding Agent** — Why prompt engineering is dying and execution design is replacing it.

An interactive web guide covering the practical patterns behind effective AI-assisted development. Live at: **https://voku.github.io/AgentCommunicationGuide/**

## What's Inside

- **Chapter 1 — The Shift**: Why "prompt engineering" is the wrong mental model for 2026
- **Chapter 2 — Why It Works**: The three mechanisms that make constraints beat prose
- **Chapter 3 — Core Patterns**: Eight constraint patterns with typical failure modes for each
- **Chapter 4 — In Practice**: One task, three instruction styles — the measurable delta
- **Chapter 5 — Real Examples**: AmysEcho, SQL debugging, documentation synthesis, and PHPStan-driven quality
- **Chapter 6 — Advanced Patterns**: Context rot, AGENTS.md vs skills, model specialization, voice ideation, deletion bias, and a conclusion

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

## Key Files Detector

Use this helper prompt when starting work in an unfamiliar codebase to quickly orient your coding agent:

```
List the 5–10 most important files in this repository that I should understand first.
For each file, explain:
  1. What it does
  2. Why it matters to the overall architecture
  3. What patterns or conventions it establishes

Focus on: entry points, configuration files, core abstractions, and files that define the main data flow.
Ignore: generated files, lock files, and test fixtures.
```

## Contributing

Found an error, have a new pattern to share, or want to add a chapter?
**Pull requests are welcome at [github.com/voku/AgentCommunicationGuide](https://github.com/voku/AgentCommunicationGuide)**

## License

MIT
