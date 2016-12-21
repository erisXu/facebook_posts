
var $ = requrie("jQuery");
function delayHello()
{
  var d = new $.Deferred;
  setTimeout(function(){
    console.log('Hello!');
    d.resolve();
  }, 1000);
  return d.promise();
}
delayHello();
