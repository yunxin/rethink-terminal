---
layout: default
---

# Rethink what a terminal should be for AI CLIs

*Andy Yunxin Wu · A series on the design decisions behind AgentTerm*

Some people love terminals; others hate them. Many are surprised that people use AI through a terminal in 2026.

I have been using AI CLIs in a terminal for coding, planning, review and writing. My focus is on understanding and steering the agents' work, not running commands. While I appreciate what the terminal offers, I want it to work differently, both inside the window and outside it on the desktop.

I built [AgentTerm](https://github.com/albertwujj/agent-term#agentterm) as an experiment and have been using it since January. These essays explore the motivations and design choices behind reshaping the terminal as a portal to AI.

## Rethinking the terminal

### 1. [Why I give each lead agent its own OS window and a unique Dock tile or taskbar button](https://github.com/albertwujj/agent-term/blob/main/essays/own-os-window.md)

### 2. [Why I run AgentTerm from source](https://github.com/albertwujj/agent-term/blob/main/essays/run-from-source.md)

### 3. [Why documents, code and images open right in the agent’s terminal window](https://github.com/albertwujj/agent-term/blob/main/essays/files-in-terminal.md)

### Plain text as an interface to build on

*Coming soon.* File references and text conventions connect the CLI conversation to richer views and actions in the terminal.

## Building on the terminal

Beyond the terminal itself, I have been exploring how its new capabilities can improve the way I work with agents. These essays describe those experiments, starting with curated review.

### 4. [Curated code review: explanations grounded in code](https://github.com/albertwujj/agent-term/blob/main/essays/curated-review.md)

I removed the warning about changed lines missing from the walkthrough.

### Why I make my agents share one checkout over separate worktrees

*Coming soon.* How I manage several agents working on the same project, including the conflicts and limits of sharing a checkout.

### Why AgentTerm uses a folder hierarchy of Markdown guides instead of skills

*Coming soon.* How related guides lead agents to the instructions they need, with agent-threads as a concrete example.

---

AgentTerm also supports [commenting directly on an agent's output](https://github.com/albertwujj/agent-term/blob/main/docs/comment.md). I may return to broader workflow topics, including writing with coding agents and why I ask my transcription service to skip auto-correction.

[AgentTerm: source, demonstration and setup](https://github.com/albertwujj/agent-term#agentterm)
