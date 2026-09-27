---
name: vacation-hotel-lookup
description: Looks for different hotels for a date range, checks pricing and promos, and gives the user a report
compatibility: Requires access to the internet
metadata:
  author: jsmrcaga
  version: v0.0.1
---

# Inputs & Outputs

## JSON Schema

This JSON schema defines the metadata file you will write at the end.
It also lets you understand some necessary inputs from the user
```json
{
	"$schema": "https://json-schema.org/draft/2020-12/schema",
	"type": "object",
	"required": ["stays", "trip_name"],
	"properties": {
		"trip_name": { "type": "string" },
		"currency": { "type": "string" },
		"amenities": {
			"type": "array",
			"items": { "type": "string" }
		},
		"stays": {
			"type": "array",
			"items": {
				"type": "object",
				"required": ["location", "start", "end"],
				"properties": {
					"location": { "type": "string" },
					"landmarks": {
						"type": "array",
						"items": { "type": "string" }
					},
					"start": { "type": "string", "format": "date" },
					"end": { "type": "string", "format": "date" },
				}
			}
		}
	}
}
```

The user should provide the following inputs
- date range or ranges
- budget (min/max prices)
- number of hotels required during the say (if the user wants to stay in multiple places for different dates (stay dates))
- currency (default should always be EUR)
- any required amenities, for example:
	- entire appartment
	- kitchen
	- ironing setup
	- pool
	- any businesses in the vicinity
- The user may provide an approximate location or landmarks to approximate

If these inputs are not provided beforehand, make sure to ask.

# Providers
Check and use the following providers to check hotel prices
- Google Maps
- Booking.com
- Airbnb

Feel free to recommend any other providers as well

# Formatting
- All dates should be formatted in ISO format (eg: YYYY-MM-DD)
- All prices should be formatted in floats to the minimum currency without the currency symbol eg (110.34)

# Instructions
- Logging: Make sure to tell the user anytime you are
	- Checking a new provider
	- Checking a new stay date
	- Example: "Checking hotels for 2026-10-12 - 2026-10-19 in Booking.com..."

- The user might provide a metadata.json file from another session
	- If that's the case, resume the search using that metadata file

- Create a temporary CSV file with headers:
	- `hotel_name, date_start, date_end, nb_nights, location_url, provider_name, total_price_<currency>, price_per_night_<currency>, offer_link, offer_date`
	- Explanation:
		- `hotel_name`: the name of the hotel
		- `date_start`: the date at which the stay starts
		- `date_end`: the date at which the stay ends
		- `nb_nights`: the number of nights between `date_start` and `date_end`
		- `location_url`: A Google Maps link to the hotel location
		- `provider_name`: The name of the provider where the offer was found
		- `total_price_<currency>`: (eg: `price_eur`) the price in the provided currency
		- `price_per_night_<currency>`: (eg: `price_eur`) the price in the provided currency for each night of the stay
		- `offer_link`: Link to the provider's offer to book
		- `offer_date`: The date at which the line was appended to the CSV

- Using the user input and the listed providers
	- For each provider and each stay date
		- Check hotels in the desired location and stay dates
		- Get prices for the hotels matching the filters the user provided
		- Store the prices in the previous CSV file
			- Match the hotels by name as closely as possible between providers

- Compute the best offers for the user
	- Make a ratio of the hotel's reviews in the provider and the price
	- Sort the hotels per this ratio
	- Show the user a small recap table with your suggestions for:
		- Each stay date
			- The suggested hotel
			- Total price for that stay

- Ask the user where to save the CSV file, and save it along with metadata using the name format
	- `hotel-lookup-<min date>-<max-date>.csv`
	 	- `min_date` is the earliest stay date from all stay dates provided
	 	- `max_date` is the latest stay date from all stay dates provided
 	- `hotel-lookup-<min date>-<max-date>.metadata.json`
 		- This file will contain a json of the format defined in the JSON Schema section of this document
