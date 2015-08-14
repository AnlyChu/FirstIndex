window.onload = function(){
	var cons = document.getElementById('container');
	var aLi = document.getElementsByTagName('li');
	var aUl = document.getElementsByTagName('ul')[0];
	var timer = null;
	aUl.innerHTML += aUl.innerHTML;
	aUl.style.width = aLi[0].offsetWidth*aLi.length + 'px';
	// alert(aUl.style.width);
	timer = setInterval(move,30);
alert(aUl.offsetWidth);
	function move(){
		
		if(aUl.offsetLeft < -aUl.offsetWidth/2)
		{
			aUl.style.left = 0 + 'px';
		}
		aUl.style.left = aUl.offsetLeft - 2 + 'px';
	}


	aUl.onmousemove = function(){
		clearInterval(timer);
	};
	aUl.onmouseout = function(){
		timer = setInterval(move,30);
	};
};

