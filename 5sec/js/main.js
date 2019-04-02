(function(){
    "use strict";

    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var result = document.getElementById("result");
    var startTime;

    start.addEventListener("click" , function(){
        startTime = Date.now();
        this.className = "pushed";
        stop.className = "";
    });

    stop.addEventListener("click" , function(){
        var elapsedTime;
        var diff;
        elapsedTime = (Date.now() - startTime)/1000;
        //現在のじかんがミリ秒になっているので1000で割っている
        //elapsedTime = 4;
        result.textContent = elapsedTime.toFixed(3);
        //小数点以下3桁まで表示してくれる

        this.className = "pushed";
        start.className = "";
        diff = elapsedTime-5.0;
        if(Math.abs(diff)<1.0){
            //差の時間が1秒だった場合perfectで色を変えている
            //absで絶対値の取得
            result.className= "perfect";
        }
        
    });

})();