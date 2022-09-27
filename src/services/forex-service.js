
class ForexService {

    _apiBase = 'https://financialmodelingprep.com/api/v3/fx/';
    _apiKey = 'apikey=23f4d6e65efabceedd0c1488321d538e';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not getch ${url}, status: ${res.status}`);

        }

        return await res.json();
    }

    getCurrency = async (currency) => {
        const res = await this.getResource(`${this._apiBase}${currency}?${this._apiKey}`);
   
        return res[0];
    }

    getAllCurrency = async () => {
        const allRes = await this.getResource(`${this._apiBase}?${this._apiKey}`);
        return allRes.map((item) => ({
            ticker: item.ticker
        }));
    }
   
}

export default ForexService;