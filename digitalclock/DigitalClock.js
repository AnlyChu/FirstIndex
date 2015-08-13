window.onload = function(){
	
	
	setInterval(clock,1000);
	clock();
};

function onDB(n){
	if(n < 10)
	{
		return '0'+ n;
	}
	else
	{
		return '' + n;
	}
}

function clock(){
		var img = document.getElementsByClassName("digital");
		var data = new Date();
		var str = onDB(data.getHours()) + onDB(data.getMinutes()) + onDB(data.getSeconds());

		for(var i=0;i<img.length;i++)
		{
			img[i].src = "images/" + str[i] + ".png";
		}
	}
	

	