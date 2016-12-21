var obj4 = {
  "data": []
};
var obj3 = {
  "data":[{a:5},{b:6},{c:7}],
  "paging":{
    "next": obj4
  }
};
var obj2 = {
  "data":[{a:2},{b:3},{c:4}],
  "paging":{
    "next": obj3
  }
};
var obj1 = {
  "data":[{a:1},{b:2},{c:3}],
  "paging":{
    "next": obj2
  }
};

console.log(all_(obj1));

function all_(obj){
  console.log(obj);
  if(!obj.paging){
    return  obj.data;
  }else{
    return obj.data.concat(all_(obj.paging.next));
  }
  // var data = JSON.stringify(obj["data"]),
  //     dataString,
  //     paging = obj["paging"];
  //
  // if (paging && data.length > 0){
  //     dataString = data.slice(1, data.length-1);
  //     var nextObj = paging["next"];
  //     return dataString + "," + all_(nextObj);
  // }else{
  //   return "";
  // }
}
