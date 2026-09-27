---
name: vacation
description: Looks for different vacation activities and hotels in certain locations and makes suggestions to the user
compatibility: Requires access to the internet
metadata:
  author: jsmrcaga
  version: v0.0.1
---

# General

This skill is a composition of 2 other skills
- vacation-activities
- vacation-hotel-lookup

# Inputs & Outputs

## JSON Schema

This JSON schema defines the metadata file you will write at the end.
It also lets you understand some necessary inputs from the user

Find the schema on the assets folder of this Skill
- [Schema](assets/input.json-schema.json)

## Input instructions

The user should provide the following inputs
- date range or ranges of the trip
- budget (min/max prices)
	- for hotels, total and per night
	- for activities
- currency (default should always be EUR)
- any type of preferred activities
- any type of disliked activities

- If these inputs are not provided beforehand, make sure to ask.

# Instructions
- Get necessary input from the user
- Use the /vacation-activities skill to prepare an activities plan with the user
	- Store the defined plan(s). Might be one or more
- Using the selected activities plans and stays, use the /vacation-hotel-lookup skill to find and suggest hotels
- From both results, create a plan in MD format for the user recapping the dates, hotels and activities for the user using the [template](/assets/vacation-template.md)
