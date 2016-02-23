function enter(url){
	$('#content').load(url);
}

$(window).on('hashchange', function(){
	var hash = location.hash.substr(1);
	var page = 'templates/' + hash + '.html';
	enter(page);
});

enter('templates/recipes.html');

function show(arg){
	console.log(arg);
	var element = document.getElementsByClassName(arg);
	element[0].style.bottom = "0px";
}

function hide(arg){
	console.log(arg);
	var element = document.getElementsByClassName(arg);
	element[0].style.bottom = "-60px";
}