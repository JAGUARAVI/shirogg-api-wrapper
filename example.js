const shiro = require('./index.js');

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
