const getOrganizations = 'select * from organization'
const getPricing = 'select * from pricing where organization_id = $1 and zone = $2'

module.exports = {
    getOrganizations,
    getPricing
}