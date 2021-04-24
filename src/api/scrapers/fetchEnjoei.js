const got = require('got');

module.exports = async () => {
    try {
        const res = await got(`https://enjusearch.enjoei.com.br/graphql-search-x?city=&department=info-eletro&experienced_seller=true&first=30&last_published_at=2021-04-16T06:24:08-03:00&operation_name=searchProducts&price_max=480&price_min=100&query_id=3da4d734788082c7ff1e4ee844033739&search_context=products_search_default&search_id=bfe77f33-820d-404e-b664-569011adec31-1617563446809&shipping_range=same_country&sort.fields=price&sort.orders=asc&state=&sub_categories=info-eletro-computadores-notebook&term=notebook&used=true`, {
            headers: {
                'authority': 'enjusearch.enjoei.com.br',
                'method': 'GET',
                'path': '/graphql-search-x?city=&department=info-eletro&experienced_seller=true&first=30&last_published_at=2021-04-16T06:24:08-03:00&operation_name=searchProducts&price_max=480&price_min=100&query_id=3da4d734788082c7ff1e4ee844033739&search_context=products_search_default&search_id=bfe77f33-820d-404e-b664-569011adec31-1617563446809&shipping_range=same_country&sort.fields=price&sort.orders=asc&state=&sub_categories=info-eletro-computadores-notebook&term=notebook&used=true',
                'scheme': 'https',
                'accept': 'application/json, text/plain, */*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7',
                'origin': 'https://www.enjoei.com.br',
                'referer': 'https://www.enjoei.com.br/',
                'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
                'sec-ch-ua-mobile': '?0',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-site',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36',
                'x-request-trace-id': '82cbf4de-daee-4b6c-a6a0-3beb47d7c551',
            },
            responseType: 'json',
            http2: true
        });
        const { products } = res.body.data.search


        return products
    } catch (error) {
        console.log(error);
    }



}
