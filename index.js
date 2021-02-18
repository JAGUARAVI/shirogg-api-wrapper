const fetch = require('node-fetch');

module.exports = {
    /**
     *
     * @param {String} type - The kind of sfw image you want 
     */
    sfw: async function (type) {
        return new Promise(async (resolve, reject) => {
			if (!type || (typeof type != 'string')) return reject("Input must be a string.");
            let result = await (await fetch(`https://shiro.gg/api/images/${type.toLowerCase()}`)).json();
            if (result.code !== 200) return reject(`${result.code}: ${result.message}`);
            return resolve(result.url);
        });
    },

    /**
     * 
     * @param {String} type - The kind of nsfw image you want 
     */
    nsfw: async function (type) {
        return new Promise(async (resolve, reject) =>{
			if (!type || (typeof type != 'string')) return reject("Input must be a string.");
            let result = await (await fetch(`https://shiro.gg/api/images/nsfw/${type.toLowerCase()}`)).json();
            if (result.code !== 200) return reject(`${result.code}: ${result.message}`);
            return resolve(result.url);
        });
    }
}
