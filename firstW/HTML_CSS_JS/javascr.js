// function getStuff(){
// 	document.querySelector('#ji').onclick = talk;
// }

// function talk(){
// 	alert('Yo!');
// }

// window.onload = getStuff;
// Video 25

function getStuff(){
	var list = document.querySelectorAll('#ji');
	//list[0].onclick = talk;
	for(var i=0; i < list.length; i++)
		list[i].onclick = talk;
}

function talk(){
	alert('Yo!');
}
window.onload = getStuff;