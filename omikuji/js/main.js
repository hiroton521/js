(function(){
    'use strict'

    var btn = document.getElementById('btn');

    btn.addEventListener('click', function(){
        var results = ["大吉","中吉","小吉","凶"] 
        var n = Math.floor(Math.random() * 4);
        this.textContent = results[n];
       
        });
    btn.addEventListener('mousedown',function(){
        this.className = 'pushed';
    });
    btn.addEventListener('mouseup',function(){
        this.className = '';
    });
})();