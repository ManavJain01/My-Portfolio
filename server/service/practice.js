// npm install zenrows
const { ZenRows } = require("zenrows");

// npm install axios
const axios = require('axios');

const zenrows = async () => {
    const client = new ZenRows("ada07b5d364a65641f4ae9aed6eb517bf9f1f052");
    const url = "https://www.1mg.com";

    try {
        const request = await client.get(url, {
			"js_render": "true",
			"json_response": "true"
        });
        const data = await request.json();
        return data;
    } catch (error) {
        console.error(error.message);
        if (error.response) {
            console.error(error.response.data);
        }
    }
};

const testing = async () => {
    try {
        const url = 'https://www.1mg.com';
        const apikey = 'ada07b5d364a65641f4ae9aed6eb517bf9f1f052';
        const data = await axios({
        url: 'https://api.zenrows.com/v1/',
        method: 'GET',
        params: {
            'url': url,
            'apikey': apikey,
            'js_render': 'true',
            'json_response': 'true',
        },
        })
        .then(response => response.data)
        .catch(error => console.log(error));

        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}


module.exports = { zenrows, testing }