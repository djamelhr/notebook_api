

const rq = require('request-promise');
const puppeteer = require('puppeteer');

module.exports = async () => {
    try {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto('https://www.olx.com.br/computadores-e-acessorios/notebook-e-netbook?pe=400&ps=120&q=notebook&sf=1&op=2');


        let data = await page.evaluate(() => {
            const items = Array.from(document.querySelectorAll("div.fnmrjs-1"));
            // loop through xml 
            return items.map(item => {
                if (item) {
                    return {

                        image: item.querySelector('.sc-101cdir-2 img').getAttribute('src'),
                        title: item.querySelector('h2.sc-1mbetcw-0').innerText,
                        price: item.querySelector('span.sc-ifAKCX').innerText

                    }
                }

            })

        });


        await browser.close();
        return data
    } catch (error) {
        console.log(error);
    }

}

