var img = new Array();

function GetQueryString() {
  if (1 < document.location.search.length) {
     var query = document.location.search.substring(1);
     var parameters = query.split('&');
    var result = new Object();
    for (var i = 0; i < parameters.length; i++) {
      var element = parameters[i].split('=');
      var paramName = decodeURIComponent(element[0]);
      var paramValue = decodeURIComponent(element[1]);
 
       result[paramName] = decodeURIComponent(paramValue);
    }
    return result;
  }
  return null;
}

$(function(){
    param = GetQueryString();
    name = param['name'];
    sec = param['sec'];
    num = param['num'];

    domain = name+".tumblr.com";
    api_key ="UCYoOZ9Y4JtHaNfz5vFxXu5A9Y2FZ4adFQPio7s8CjZm3Sd11Z";
    $.getJSON(
        "http://api.tumblr.com/v2/blog/"+domain+"/posts/photo?api_key="+api_key+"&limit="+num+"&jsonp=?",
        function(data){
            if( data['meta']['status']!=200){
                return;//取得失敗なので終了
            }
            var i = 0;

            $.each(data['response']['posts'],function(){
            img[i]=this['photos']['0']['original_size']['url'].toString();
            i++;
            });
            
        }
    );
});
var rand;
function imgChange(){
    rnd=Math.floor(Math.random()*num);
    document.getElementById("img1").src=img[rnd];
}

$(function(){
    window.alert("開始します");
    setInterval("imgChange()",sec*1000);
});

function start(){
  if(document.set.inputName.value=="" | document.set.inputViews.value=="" | document.set.inputTime.value==""){
	alert("データに不正があります");
  }
  else{
    var name = document.set.inputName.value;
    var num = document.set.inputViews.value;
    var sec = document.set.inputTime.value;
    var url = "http://6xox.net/make/tuf/start/?name="+name+"&sec="+sec+"&num="+num;
    location.href = url;
  }
  }

