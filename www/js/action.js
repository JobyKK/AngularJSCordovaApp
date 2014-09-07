$("document").ready(function() {
	$("#menu").hover(function() {
			document.getElementById("menu").setAttribute("src","img/button/menu_click.png");
		}, function() {
			document.getElementById("menu").setAttribute("src","img/button/menu.png");
		});
	$("#about").hover(function() {
			document.getElementById("about").setAttribute("src","img/button/about_click.png");
		}, function() {
			document.getElementById("about").setAttribute("src","img/button/about.png");
		});
	$("#navi").hover(function() {
			document.getElementById("navi").setAttribute("src","img/button/navi_click.png");
		}, function() {
			document.getElementById("navi").setAttribute("src","img/button/navi.png");
		});
	$("#code").hover(function() {
			document.getElementById("code").setAttribute("src","img/button/code_click.png");
		}, function() {
			document.getElementById("code").setAttribute("src","img/button/code.png");
		});
	$("#foto").hover(function() {
			document.getElementById("foto").setAttribute("src","img/button/foto_click.png");
		}, function() {
			document.getElementById("foto").setAttribute("src","img/button/foto.png");
		});
});


function clic(id,name) {	
	getXML
}


function myFunction(json) {
	alert(json[0].id);	
}

function getXML() {
	var IDR = document.getElementById("inp").value;
	alert("push push get XML");
}

