const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=b28ebf4ce8ae15422f0adc590d55c500&units=metric`);
    return resp.data.main.temp;

}

module.exports = {
    getClima
}