window.onload = function(){
	var odiv = document.getElementById('share');
	odiv.onmouseover = function(){
		move(0);
	};
	odiv.onmouseout = function(){
		move(-100);
	};
};
var timer = null;
function move(iTarget){
	var odiv = document.getElementById('share');
	var speed = 0
	clearInterval(timer);
	if(odiv.offsetLeft > iTarget)
	{
		speed = -10;
	}
	else
	{
		speed = 10;
	}
	timer = setInterval(function(){
		if (odiv.offsetLeft == iTarget) 
		{
			clearInterval(timer);
		}
		else
		{
			odiv.style.left = odiv.offsetLeft + speed + 'px';
		}
	},30);

}