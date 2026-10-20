# Rethink the terminal: A portal to AI

Working with AI has fundamentally changed what I use a terminal for.

I now use it for almost all my work: coding, planning, review and drafting, from start to finish, and when revisiting it later. My focus is on understanding and steering AI’s work rather than running commands. That calls for fresh designs around this new kind of interaction, both inside the window and across the desktop.

So I have been building AgentTerm since January, and it has changed how I work ([demo](https://github.com/albertwujj/agent-term#demo)). These notes share the thinking behind its design.

## Rethinking the terminal

### [Why I give each lead agent its own OS window and a unique Dock tile or taskbar button](https://yunxin.github.io/rethink-terminal/own-os-window/)

Agents show up when needed.

### [Why I run AgentTerm from source](https://yunxin.github.io/rethink-terminal/run-from-source/)

Works like an installed app. Personalize it without the friction.

### [Why documents, code and images open right in the agent’s terminal window](https://yunxin.github.io/rethink-terminal/files-in-terminal/)

I can edit the rendered content to propose changes; my agent refines it and replies in place.

### [Building on the terminal’s text interface](https://yunxin.github.io/rethink-terminal/plain-text-interface/)

AgentTerm understands agents; agents understand AgentTerm.

## Building on the terminal

I have been adding capabilities on top of this new terminal.

### [Curated code review: explanations grounded in code](https://yunxin.github.io/rethink-terminal/curated-review/)

I removed a check so we focus on what needs my judgment.

### [A hub for agents across machines, with phone and voice access](https://yunxin.github.io/rethink-terminal/hub-across-machines/)

My agent knows the input was spoken and uses the context of our work to correct misheard words.

---

AgentTerm has other features and design choices not covered above, such as [commenting on agent output](https://github.com/albertwujj/agent-term/blob/main/docs/comment.md), [copying it without reformatting](https://github.com/albertwujj/agent-term/blob/main/docs/copy.md), [connecting to an IDE](https://github.com/albertwujj/agent-term/blob/main/docs/ide.md), [running long jobs](https://github.com/albertwujj/agent-term/blob/main/docs/jobs.md), [coordinating a shared workspace](https://github.com/albertwujj/agent-term/blob/main/docs/lock.md), and [setting up and invoking guides across AI CLIs using a namespace convention based on folder paths](https://github.com/albertwujj/agent-term/blob/main/docs/conventions.md#guides-across-cli-vendors).

Check out the [AgentTerm repo](https://github.com/albertwujj/agent-term#agentterm), try it and see how it improves your work, and build on it.
