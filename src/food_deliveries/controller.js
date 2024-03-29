const pool = require('../../db')
const { getPricing } = require('./queries')

const getPrice = async (req, res) => {
    try {
        console.log('Request to get price with payload', req.body)
        let zone = req.body.zone;
        let organization_id = parseInt(req.body.organization_id);
        let total_distance = parseInt(req.body.total_distance);
        let total_price = 0

        if (!(organization_id)) {
            throw new Error('Organization Id is not a number')
        } else if (!(total_distance)) { 
            throw new Error('Total distance is not a number')
        }

        const getOrgPricing = await pool.query(getPricing, [organization_id, zone]);
        if (getOrgPricing.rows.length > 0) {
            let pricingData = getOrgPricing.rows[0]
            if (total_distance < pricingData.base_distance_in_km) {
                total_price = total_price + pricingData.fix_price
            } else {
                total_price = (pricingData.fix_price + (total_distance - pricingData.base_distance_in_km) * (pricingData.km_price)).toFixed(1)
            }
            res.status(200).json({
                total_price
            })
        } else {
            res.status(404).json({ message: 'Organization Id and Zone mapping not found' });
        }
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}

module.exports = {
    getPrice
}

