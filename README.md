# shirogg-package
Unofficial Shiro.gg Package

Usage: 
```js
  const shiro = require('shiro.gg-wrapper');
```

Example:
```js
  const shiro = require('shiro.gg-wrapper');
  
  shiro.sfw("avatars").then(console.log); //gets a random avatar image url
  shiro.sfw("pat").then(console.log); //gets a random pat image url
```

Allowed Sfw types:
  `avatars,
  blush,
  cry,
  hug,
  kiss,
  neko,
  nom,
  pat,
  poke,
  pout,
  slap,
  smug,
  tickle,
  wallpapers`

Allowed Nsfw types:
  `bondage,
   hentai,
   thighs`
