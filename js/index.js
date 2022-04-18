

function openpub(){
	var pub = document.getElementById('popupcontainer');
	pub.style.visibility = 'visible';
}

var close= document.getElementById('popupcontainer');
function closepub(){
	close.style.visibility='hidden';
}

setTimeout(openpub,3000);
close.addEventListener('click',closepub);

var bars = document.querySelector('.menu-bars');



bars.addEventListener('click',function(){
	var menu = document.querySelector('.nav2');
	menu.classList.toggle('openmenu');
});

