--------------API Documentation-------------

Endpoint: POST /api/food_deliveries/get_price
Description: Calculates the price based on the provided parameters.
Sample Request Body: {
    "zone": "central",
    "organization_id": "5",
    "total_distance": "1",
    "item_type": "perishable"
}
zone (string): The zone for pricing calculation.
organization_id (integer/stringified integer): The ID of the organization.
total_distance (integer/stringified integer): The total distance.
Response:
Status Code: 200 OK
Sample Body: {
    total_price: "1",
}
Internal Error
Status Code: 400 OK
Sample Body: {
    message: eror message,
}
total_price (float): The calculated total price upto 1 decimal.


------------SET UP GUIDE-----------------

npm install
connect to local psql database and create tables
node server.js


-------------ALL TEST CASES----------------

Invalid Inputs
Invalid URL Path


