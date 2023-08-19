const axios = require('axios');
const querystring = require('querystring')

const publicCall = async (path, data, method = 'GET') => {
    try{
        const qs = data ? `?${querystring.stringify(data)}`:'';
        const response = await axios({
            method,
            url: `${process.env.API_URL}${path}${qs}`
        })
        return response.data;
    }
    catch(err){
        console.log(`Error in API call ${method}:`, err);
    }
}

async function time() {
    return publicCall('/v3/time');
}

async function depth(symbol = 'BTCBRL', limit = 5){
    return publicCall('/v3/depth', {symbol, limit})
}

module.exports = { time, depth }
