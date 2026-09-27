---
name: vacation-activities
description: Looks for different vacation activities in certain locations and makes suggestions to the user
compatibility: Requires access to the internet
metadata:
  author: jsmrcaga
  version: v0.0.1
---

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
- currency (default should always be EUR)
- any type of preferred activities
- any type of disliked activities

- If these inputs are not provided beforehand, make sure to ask.
	- If none of likes and dislikes is be provided, choose the most common activities

# Providers
Check and use the following providers to check activities
- Atlas Obscura
- Google Maps
- Airbnb
- Any travel specific blogs

Feel free to recommend any other providers as well

# Formatting
- All dates should be formatted in ISO format (eg: YYYY-MM-DD)
- All prices should be formatted in floats to the minimum currency without the currency symbol eg (110.34)

# Instructions
- Create a temporary csv file with headers
	- `date`: The date of the activity, respecting formats
	- `duration`: Expected duration of the activity
	- `location`: The name of the location, city, neighborhood etc
	- `location_link`: The location of the activity, google maps link
	- `price_<currency>`: The estimated price for the activity
	- `type`: The type of activity. Feel free to add types here, some examples (`hike`, `sport`, `museum`, `city-visit`, `obscura`)

- For every "stay" location and dates provided
	- For each provider listed in [Providers](#Providers)
		- Figure out the activities that match the likes and dislikes of the user
		- List the activities that also match any budget the user has provided
		- Make sure to create a plan that makes sense for the duration of the trip
			and paying close attention to actual doability (no activities the same
			day in 2 different cities 15h apart for example)
		- Enter the activities in the CSV file you created

- Make a recommendation to the user following budget, locations and feasability
- Write the metadata file containing the JSON schema to resume searching, and provide both files to the user
