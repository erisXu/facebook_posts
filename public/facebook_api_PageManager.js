function PageManager_(){
    /**
    * @type {object}
    * @property {object[]} info - ページ情報
    * @property {object[]} posts - 投稿情報
    * @property {object[]} albums - アルバム情報
    */
    this.page = {};
  }


  PageManager_.prototype = {

    /*全データ取る
    use the url in first page object to get all pages data
    */
    fetchAllData: function(obj){
      /*条件1_終わる条件*/
      if ((!obj.paging) && (obj.data.length == 0)){
        return obj.data;
        /*条件2_次に行く条件*/
      }else if (obj.paging && obj.paging.next){
        var obj_next = JSON.parse(UrlFetchApp.fetch(obj.paging.next.toString()).getContentText());
        return obj.data.concat(this.fetchAllData(obj_next));
        /*そのほか_エラー対策、配列を戻る*/
      }else{
        return [];
      }
    },

    /*Access to Graph API*/
    fetch: function(pageId, token, version){
      /*
      *@format version = X.Y
      *@type pageId, token, version (String)
      */
      var apiRoot= "https://graph.facebook.com";
      var commonApiURL = apiRoot + "/v"+ version + "/" + pageId;
      var tokenURL = "access_token=" + token;
      /*
      postsとalbumsは一括取れないので、まず最初ページのデータを取る
      */
      var info =   JSON.parse(UrlFetchApp.fetch(commonApiURL+ "?" +tokenURL).getContentText()),
          posts_first =  JSON.parse(UrlFetchApp.fetch(commonApiURL + "/posts?" + tokenURL).getContentText()),
          albums_first = JSON.parse(UrlFetchApp.fetch(commonApiURL + "/albums?" + tokenURL).getContentText());

      this.page.info = info,
      this.page.posts = this.fetchAllData(posts_first);
      this.page.albums = this.fetchAllData(albums_first);
    }

    /*
    任意idに該当するpost情報を返却する
    */
}
