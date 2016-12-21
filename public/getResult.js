var PageManager_ = require('./facebook_api_PageManager.js');

var page_example = new PageManager_();
page_example.fetch("317617924958203", "EAACEdEose0cBAFeyojWp4vEtolM2btkLSskZAhpaZBV1iobPD8fNCf1hFjDEjvgg9iCwcQE8ZCXWD4fuyuoqSovAsWa7xU5dddYFrrZCE5SC5GrxrWFDGIE9vVsownC2DyKMa37CrQMtXnCVG66LBtM6AyAHIL1PHfs5mwMZBEkQVjny5JMfg", "2.8");

console.log(page_example.page);
