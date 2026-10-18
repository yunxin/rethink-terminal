# Curated code review: explanations grounded in code

When an agent finishes a code change, I want to understand how the pieces fit together and which choices need my judgment. A full diff shows what changed. Reconstructing the reasoning from it can take considerable work.

## English explains; code grounds the explanation

I ask the agent to prepare a curated walkthrough. It groups related changes across files and orders them so I can follow their dependencies. A helper can appear before its callers, with a short explanation of how they relate. Routine changes can be left out so the important parts stand out.

English carries assumptions, alternatives and relationships that no single diff hunk explains. The code makes those claims inspectable. An existing function may matter to understanding a new caller even though the function did not change. The walkthrough can include that code too, with the explanation beside it.

Diff tools can [hint at code moves](https://git-scm.com/docs/git-diff), but not always reliably. An agent can inspect the code to identify what moved and what changed, then explain why in English. Diagrams or other visuals could help in the future.

## Agent choices are visible

The agent can give an unsettled decision its own heading, stating what it chose, what it costs and the alternative. That gives me something concrete to question. I can confirm the choice as written or discuss another approach; the agreed choice remains recorded in the walkthrough.

![A review combining English, unchanged helper code and a diff: one decision is confirmed in green, while another stays yellow with a user objection on the changed code.](assets/curated-review-example.png)

*An illustrative review, with one choice confirmed and another questioned on the code.*

In [the note on documents in the terminal](files-in-terminal.md), I described discussing and refining a document in the agent's terminal window. Code review uses the same feedback loop.

I can comment on a passage in the explanation or on a code line. The agent answers and revises the explanation or implementation, and the review updates in place. Confirming a design choice and completing a requested fix are separate things: agreeing on the approach still leaves the agent responsible for making the result match it.

## Git supplies the code

The agent writes a Markdown review package containing its explanation and references to file ranges. AgentTerm renders those references using code and diffs from Git. The agent supplies the selection and reasoning; the renderer supplies the referenced code.

[![Agent-authored Markdown supplies explanations and code references; Git supplies committed code and diffs. AgentTerm combines them into a rendered walkthrough.](assets/review-package-flow.svg)](assets/review-package-flow.svg)

A review refers to a committed version of the code. The agent updates it as the implementation changes, and AgentTerm warns if the review is out of date or its code references are invalid.

The discussion uses the [same thread contract](https://github.com/albertwujj/agent-threads/blob/main/contract.md) as documents. A comment can identify a passage in the explanation or a line on a particular side of the diff. [The note on documents](files-in-terminal.md#separate-records-one-writer-each) covers the shared model in more detail.

## Shape the walkthrough

By default, the agent follows the [authoring guide](https://github.com/albertwujj/agent-threads/blob/main/code/authoring.md) in agent-threads. It covers what to include, how to group and order the changes, and how to present each decision.

An early version warned the agent when changed lines were missing from the walkthrough. I removed that check because covering the full diff is often not my goal; understanding the key changes is. I want the agent to choose what needs explaining and how to explain it, while I can ask to go deeper or see the full change.

I make those requests case by case, when I ask for the review or later in its comments. A tricky change might need more of its surrounding code or dependencies examined. Tuning or additions that apply to every review should be saved to the guide instead.

[See AgentTerm’s review workflow in action](https://github.com/albertwujj/agent-term/blob/main/docs/review.md).
