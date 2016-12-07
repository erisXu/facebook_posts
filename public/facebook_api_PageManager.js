function PageManager_(){
  this.page = "";
  this.langTable = LANGUAGE['EN'];
}

PageManager_.prototype = {
  /*最後ページまですべてのpost, album, photoを取る*/
  getDataNextPage: function(prePageObj){
    var  data = prePageObj.data,
         paging = prePageObj.paging;
    if (paging  && paging["next"] ){
      var next = paging["next"];
      var nextDataObj = JSON.parse(UrlFetchApp.fetch(next).getContentText());
    }
    return nextDataObj;
  }
  /*
  Access to Graph API
  */
  /*version = X.Y*/
  fetch: function(pageId, token,version){
    var apiRoot= "https://graph.facebook.com";
    var commonApiURL = apiRoot + "/v"+ version + "/" + pageId;
    var tokenURL = "access_token=" + token;
  /*
  info: idとname情報
  posts: 一回に25件しか取れないので
  */
    this.page = {
      info :  JSON.parse(UrlFetchApp.fetch(commonApiURL+tokenURL).getContentText()),
      posts: JSON.parse(UrlFetchApp.fetch(commonApiURL + "/posts?" + tokenURL).getContentText()),
      albums: JSON.parse(UrlFetchApp.fetch(commonApiURL + "/albums?" + tokenURL).getContentText())
    };
  },

  /*
  任意idに該当するpost情報を返却する
  */
  getPostById(id){

  }






}
