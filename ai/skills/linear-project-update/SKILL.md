---
name: linear-project-update
description: Writes a simple Linear project update
compatibility: Requires access to the internet, better with Linear MCP
metadata:
  author: jsmrcaga
  version: v0.0.1
---

# Inputs & Outputs

## Input instructions

The user should provide the following inputs
- The project this update concerns. Better with a Linear ID or link
- Any necessary information to communicate to stakeholders like
	- Explanations for users
	- Reasons for delays


# Output template

Instructions
- Any text between `<>` is supposed to be parsed by the LLM and help with filling the template
- Feel free to add/remove sections depending on user input
	- At least 1 section is necessary besides `tl;dr`
- Language should be not too formal, it will be shared internally in the company, so a bit playful is accepted

## Formatting
- Every section must be formatted as a list with `-` (this is to make it more readable)
- Dates should be formatted as YYYY-MM-DD
- The template must be given to the user as Markdown to copy/paste in Linear

## Template

```md
*`tl;dr`*
< 3-4 lines of status report of the project, including the extra information the user provided >

* 📅 *Timelines & Milestones*
< Format: list >
<any coming up releases, or milestones being finished>

* ⛔ *Blockers*
< Format: list >
< Any blockers the user has shared, and ask for extra timelines and ETA >

* 🧪 *QA*
< Format: list >
<Any QA to prepare, the user must provide information of _upcoming_ QA to warn stakeholders>
< DO NOT include previous QA here, it's useless for this update >

* 🚀 *Release*
< Format: list >
< Any upcoming release - user facing. This is important for CS teams >
```

# Instructions
- Get necessary input from the user as described in [Input instructions](#input-instructions)
	- Note that the "project" might be a milestone or collection of milestones in another project
- Get also input from Linear
	- Current project status
	- Current Milestones finished
	- Previous status updates (for continuity) and any target dates already set on the project/milestones
- Ask the user for missing info and for extra information they would like to share
- If Linear data (previous updates, target dates) conflicts with what the user told you, do not silently pick one — flag the discrepancy and ask the user to confirm which is correct before drafting
- The output should be parseable by Linear. Linear will forward the message to Slack.
	- Make sure that the user can copy the output as markdown to be pasted in Linear
- Make sure to include or remove any sections depending on user input, but at least one section is mandatory
- Show the output to the user, and ask for validation
	- If needed, re-write and help the user
- Do not include any percentage advancements, Linear does it already

- DO NOT POST THE UPDATE IN LINEAR YOURSELF
	- Unless the user explicitly asks for it and validates 3 times
