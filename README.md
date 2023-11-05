# Caraontime backend

## Requirements
- Node.js (tested on v14)

## Getting started
Setup and run the backend first.

- Clone the repository
- Run `npm install`
- Run `npm run dev`
- The API should be running at http://localhost:3100

## Current endpoints

### GET `/stops/{id}`
Returns an object containing details about the requested tram stop and an array containing the upcoming trams.

Example:
```
{
    "data": {
        "id": 129036,
        "location": "New Islington",
        "message": null,
        "trams": [
            {
                "destination": "Eccles via MediaCityUK",
                "carriages": "Single",
                "status": "Due",
                "wait": 4
            },
            {
                "destination": "Eccles via MediaCityUK",
                "carriages": "Single",
                "status": "Due",
                "wait": 17
            }
        ]
    }
}
```
