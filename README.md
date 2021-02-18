# shiro.gg-wrapper
An unofficial Shiro.gg Wrapper

Installation:
```
npm i @jaguar_avi/shiro.gg-wrapper
```
Usage: 
```js
  const shiro = require('@jaguar_avi/shiro.gg-wrapper');
```

Example:
```js
  const shiro = require('@jaguar_avi/shiro.gg-wrapper');
  
  //get a random avatar image url
  shiro.sfw("avatars").then((res, err) => {
    if (err) throw new Error(err);
    console.log(res);
  });
  
  //get a random pat image url
  shiro.sfw("pat").then((res, err) => {
    if (err) throw new Error(err);
    console.log(res);
  });
```
