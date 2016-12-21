var UrlFetchApp = require('./https_response.js');

function UrlFetchAllData(url){
  return new Promise(
    function(resolve, reject){
      UrlFetchApp(url).then(function(e){
        if( !e.paging && e.data.length == 0){
          resolve(e.data);
        }else if (e.paging && e.paging.next){
          var nextUrl = e.paging.next;
          UrlFetchAllData(nextUrl).then(function(n){
            resolve(e.data.concat(n.data));
          });
        }else{
          resolve([]);
        }
     })
    }
  )
}
UrlFetchAllData('https://graph.facebook.com/v2.8/317617924958203/posts?access_token=EAACEdEose0cBAJPbDZB8Nfw4i0UCCMTM2qNSv08mnq0MD9zzYGmQMSNDqsHFmxlNIZCeUyBUGrdZCAPIxXMcks0AqvuoqYMc1theid57M3YpgB3zlsHIFKFtu6ZAUa1ZB4bG7yvgoDaBfJOyLrj4gc4C7cnduvMwxu4bcOJEI302CJxqeTdBY').then(function(e){console.log(e);})


 function fetch(pageId, token, version){
    var apiRoot= "https://graph.facebook.com";
    var commonApiURL = apiRoot + "/v"+ version + "/" + pageId;
    var tokenURL = "access_token=" + token;
    var /*info =  UrlFetchApp(commonApiURL+ "?" +tokenURL),*/
        posts_first = UrlFetchAllData(commonApiURL + "/posts?" + tokenURL),
        albums_first = UrlFetchAllData(commonApiURL + "/albums?" + tokenURL);
      Promise.all([posts_first, albums_first]).then(function(values){
      var posts = values[0],
           albums = values[1];
      console.log(posts);
      });
  }


/*fetch("317617924958203", "EAACEdEose0cBAJPbDZB8Nfw4i0UCCMTM2qNSv08mnq0MD9zzYGmQMSNDqsHFmxlNIZCeUyBUGrdZCAPIxXMcks0AqvuoqYMc1theid57M3YpgB3zlsHIFKFtu6ZAUa1ZB4bG7yvgoDaBfJOyLrj4gc4C7cnduvMwxu4bcOJEI302CJxqeTdBY", "2.8");*/
