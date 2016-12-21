const https = require('https');
function UrlFetchApp(url){
    return new Promise(
      function(resolve, reject){
        https.get(url, (res) => {
          var dataAll = '';
          res.on('data', (d) => {
            dataAll += d;
          });
          res.on('end', (d) => {
            resolve(JSON.parse(dataAll));
          });
        }).on('error', (e) => {
            return "error";
        });
      }
    );
}
module.exports = UrlFetchApp;
