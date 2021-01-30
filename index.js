const fetch = require('node-fetch');

const endpoint = "https://shiro.gg/api/images/";

const allowedSfw = [
    "avatars",
    "blush",
    "cry",
    "hug",
    "kiss",
    "neko",
    "nom",
    "pat",
    "poke",
    "pout",
    "slap",
    "smug",
    "tickle",
    "wallpapers"
];

const allowedNsfw = [
    "bondage",
    "hentai",
    "thighs"
];

module.exports = {

    /**
     * 
     * @param {String} type - The kind of sfw image you want 
     */

    sfw: async function(type){
        return new Promise(async (resolve,reject) =>{
            if(!allowedSfw.includes(type.toString())) return reject("Error: parameter not in allowed types list!");
            let result = await fetch(endpoint+type.toString()).then(res => res.json());
            if(result.code !== 200) return reject("Error: ratelimit!");
            if(!result.url) return reject("Error: API endpoint error!");
            else return resolve(result.url);
        });
    },

    /**
     * 
     * @param {String} type - The kind of nsfw image you want 
     */

    nsfw: async function(type){
        return new Promise(async (resolve,reject) =>{
            if(!allowedNsfw.includes(type.toString())) return reject("Error: parameter not in allowed types list!");
            let result = await fetch(endpoint+"nsfw/"+type.toString()).then(res => res.json());
            if(result.code !== 200) return reject("Error: ratelimit!");
            if(!result.url) return reject("Error: API endpoint error!");
            else return resolve(result.url);
        });
    }
}