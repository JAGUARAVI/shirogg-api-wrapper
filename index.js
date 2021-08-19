const fetch = require('node-fetch');

const endpoint = 'https://shiro.gg/api/';

module.exports = {

    /**
     *
     * @param {String} type - The kind of sfw image you want
     * @returns {Promise<string>}
     */

    sfw: (type) => {
        return new Promise(async (resolve, reject) => {
            const result = await fetch(endpoint + 'images/' + type.toString().toLowerCase()).then(res => res.json());

            if (result.code === 404) return reject('Error 404: Unknown Endpoint');
            else if (result.code === 429) return reject('Error 429: Ratelimited');
            else if (result.code !== 200) return reject('Error: API endpoint error!');

            if (!result.url) return reject('Error: API endpoint error!');

            else return resolve(result.url);
        });
    },

    /**
     *
     * @param {String} type - The kind of nsfw image you want
     * @returns {Promise<string>}
     */

    nsfw: (type) => {
        return new Promise(async (resolve, reject) => {
            const result = await fetch(endpoint + 'images/' + 'nsfw/' + type.toString().toLowerCase()).then(res => res.json());

            if (result.code === 404) return reject('Error 404: Unknown Endpoint');
            else if (result.code === 429) return reject('Error 429: Ratelimited');
            else if (result.code !== 200) return reject('Error: API endpoint error!');

            if (!result.url) return reject('Error: API endpoint error!');

            else return resolve(result.url);
        });
    },

    /**
    * @returns {Promise<any>}
    */

    fetchEndpoints: () => {
        return fetch(endpoint + 'endpoints');
    }
}