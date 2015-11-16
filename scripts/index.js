window.onload = function(){
    var zimu = document.getElementsByClassName('xiao');
    var en = document.getElementById('en');
    var timel=document.getElementById('time');
    var hasjishuqi = false,timerId,time=0;
for(var i=0;i<zimu.length;i++){
    	var s = Math.floor(Math.random()*122);
    	while( s<65||(s>90&&s<97)){
    		s = Math.floor(Math.random()*122);
        }
    zimu[i].innerHTML=String.fromCharCode(s);
    }
    var top=en.firstElementChild;
    document.onkeydown = function(e){
    	if(e.shiftKey){
    		if(e.keyCode !== top.innerHTML.charCodeAt(0)) return;
    	}else{
    		if(e.keyCode +32 !== top.innerHTML.charCodeAt(0)) return;
    	}
    	if(!hasjishuqi){
    		timerId=setInterval(function(){
    			time++;
    			timel.innerHTML = time;
    		},1000);
    		hasjishuqi = true;
    	}
    	top.style.background = "red";
    	top=top.nextElementSibling;
    	if(top==null){
    		clearInterval(timerId);
    		alert(time);
    		location.reload()
    	}
    };
};