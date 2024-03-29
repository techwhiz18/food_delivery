const express = require('express')
const app = express();
const port = 3000;
const foodDeliveryRoutes = require('./src/food_deliveries/routes')

app.get('/', (req,res) => {
    res.send("Hello, World!")
})

app.use(express.json());

app.use('/api/food_deliveries', foodDeliveryRoutes)

app.use((req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
});

app.listen(port, () => {
    console.log('App is listening on port ' + port)
})