

var bars = document.querySelector('.menu-bars');

bars.addEventListener('click',function(){
	var menu = document.querySelector('.nav2');
	menu.classList.toggle('openmenu');
});

var like = document.querySelector('.like-icon');
like.addEventListener('click',function(){
	var redicon = document.querySelector('.like-icon-red');
	like.classList.toggle('like-icon-red');
});
