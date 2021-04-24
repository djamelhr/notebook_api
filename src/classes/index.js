const fetchEnjoei = require('../api/scrapers/fetchEnjoei');
const fetchOlx = require('../api/scrapers/fetchOlx');
const fetchShopee = require('../api/scrapers/fetchShopee');

module.exports = class Netbook {

    async getEnjoeiProducts() {
        const items = await fetchEnjoei();
        return items
    }

    async getOlxProducts() {
        const items = await fetchOlx();
        return items
    }

    async getShopeeProducts() {
        const items = await fetchShopee();
        return items
    }

}