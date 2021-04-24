const got = require('got');



module.exports = async () => {

    try {
        const res = await got(`https://shopee.com.br/api/v4/search/search_items?by=ctime&categoryids=22266&conditions=used&keyword=notebook&limit=50&locations=-1&newest=50&order=desc&page_type=search&price_max=500&skip_autocorrect=1&version=2`, {
            headers: {
                'authority': 'shopee.com.br',
                'method': 'GET',
                'path': '/api/v4/search/search_items?by=ctime&categoryids=22266&conditions=used&keyword=notebook&limit=50&locations=-1&newest=50&order=desc&page_type=search&price_max=500&skip_autocorrect=1&version=2',
                'scheme': 'https',
                'accept': '*/*',
                'accept-encoding': 'gzip, deflate, br',
                'accept-language': 'en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7',
                'cookie': 'SPC_IA=-1; SPC_EC=-; SPC_F=WZP9QrbksJmqKBESrwrOBYSRqP1qIX75; REC_T_ID=7bd8342c-9d52-11eb-9ebb-48df3757cb54; SPC_U=-; _gcl_au=1.1.571806306.1618426316; _fbp=fb.2.1618426316215.518373067; SPC_SI=mall.LOf8xvtM6wyQpU63XBlNvSqEoII7MqfL; _med=refer; csrftoken=Bg0GaXJSITgoPiHH9JATtJI3RvdCQbaa; AMP_TOKEN=%24NOT_FOUND; _gid=GA1.3.841528554.1618632342; _ga_0GS478VKB8=GS1.1.1618632341.2.1.1618632368.24; _ga=GA1.1.1942493455.1618426318; SPC_R_T_ID="MSwmJETXrRD2qJYekh3vrgi8Sjs1VA1StXH9JbspJJBjSM3x7s3HFVAxWeDOvRBGQlZvSegzl9mfqLj5PsA/W8GRyrddJjepxXptynuRrko="; SPC_T_IV="/KUgOVxpOx6D4S27O6lAcw=="; SPC_R_T_IV="/KUgOVxpOx6D4S27O6lAcw=="; SPC_T_ID="MSwmJETXrRD2qJYekh3vrgi8Sjs1VA1StXH9JbspJJBjSM3x7s3HFVAxWeDOvRBGQlZvSegzl9mfqLj5PsA/W8GRyrddJjepxXptynuRrko="',
                'if-none-match-': '55b03-82d263e686c88f5b444d6054a0685845',
                'referer': 'https://shopee.com.br/search?facet=22266&keyword=notebook&locations=-1&maxPrice=500&noCorrection=true&page=1&sortBy=ctime&usedItem=true',
                'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
                'sec-ch-ua-mobile': '?0',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'same-origin',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36',
                'x-api-source': 'pc',
                'x-requested-with': 'XMLHttpRequest',
                'x-shopee-language': 'pt-BR',
            },
            responseType: 'json',
            http2: true
        });
        const { items } = res.body
        return items
        debugger;
    } catch (error) {
        console.log(error);
        debugger;
    }


}
