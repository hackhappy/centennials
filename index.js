document.onscroll = function(){//es scroll-i eventna
	var body = document.getElementsByTagName('body')[0];//bodyn em vekalum
	var logo = document.getElementsByClassName('logo')[0];//logi divnem vekalum
	if(body.scrollTop > 100)//ete verevic scroll@c 100 -ic ... avelacnuam class
		logo.className += ' animated';
	else
		logo.classList.remove("animated")//jnjuma et class-@
};