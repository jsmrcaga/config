---
name: slack-team-update
description: Formats a structured team update following the standard Slack team update template. Use this skill when asked to write, draft, or format a team update, sprint update, or status report.
compatibility: Nothing special needed
metadata:
  author: jsmrcaga
  version: v0.0.1
---

## Input

The user will provide the following information — either all at once or conversationally:

- One or more **project / roadmap topics**, each with:
  - Topic name
  - Status: one of `Delivered`, `On Track`, `At risk`, or `Off track`
  - Expected release date (YYYY-MM-DD), or `N/A` if already delivered
  - a few details
  - the users working on the project
- optionally the user might provide extra information for the `tl;dr`

If any information is missing, ask the user for it before producing the final output.


## Output format

Produce the update in the exact Markdown template below — no extra commentary, no preamble, just the formatted update.

Any text between `<>` is meant to be read by the LLM and replaced.
The `topic 1` and  `topic 2` in the template are examples of a list, and do not imply only 2 items.

---

:team-expenses: *Expenses Update*

`tl;dr`
- [bullet 1]
- [bullet 2]
- [bullet 3]
- [bullet 4 — optional]

***[Project or Roadmap topic 1]***
*Expected Release*: YYYY-MM-DD
_Linked OKRs_: <linked objectives, if shared by the user>
_One liner_: <description of the project, very short>
- Detail 1
- Detail 2

***[Project or Roadmap topic 2]***
*Expected Release*: YYYY-MM-DD
_Linked OKRs_: <linked objectives, if shared by the user>
_One liner_: <description of the project, very short>
- Detail 1
- Detail 2

etc...
---

# Instructions
- Make sure to force the user to think about the update, so ask interesting questions, this update is meant for different stakeholders (other teams, product & tech leadership...), so it's important it's concise and clear
- It's important to tag the people working on projects to give some recognition, so ask about it
- Keep the tl;dr to 4–5 bullets maximum. Each bullet should summarise the most important point from its corresponding topic.
- Use `***bold italic***` for topic names so they render as bold+italic in Slack.
- Use backtick-wrapped `tl;dr` exactly as shown.
- Omit the *Expected Release* line if the status is ✅ Delivered and no date is needed.
- Do not add any explanatory text before or after the formatted output.
- If the user gives more than 4 topics, include all of them — do not truncate.
- The output is expected to be copy/pasted into Slack, so keep the markdown formatting so user can copy paste
