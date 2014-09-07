window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);
var page1 =     
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Robot</h1></div>' +
        '<div class="scroller">' +
            '<div class="robot" id="main">' +
'<link href="css/bootstrap.css" rel="stylesheet"><link href="css/bootstrap-responsive.css" rel="stylesheet"><link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/apple-touch-icon-144-precomposed.png"><link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/apple-touch-icon-114-precomposed.png"><link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/apple-touch-icon-72-precomposed.png"><link rel="apple-touch-icon-precomposed" href="img/apple-touch-icon-57-precomposed.png"><link rel="shortcut icon" href="img/favicon.png"><link href="css/style.css" rel="stylesheet"><link href="css/app.css" rel="stylesheet"><script src="js/action.js"></script><div class = "navig"><img src="img/button/about.png" id="about" onclick="clic(this)">	<img src="img/button/menu.png" id="menu" onclick="clic(this)"><img src="img/button/navi.png" id="navi" onclick="clic(this)"></div><div class="container"><h1 style="color:#e4e56a;"> ¬вед≥ть код</h1><form action="#" id="formm"><input value="12345678" name="edr" style="margin-bottom:30px" id="inp"><br><img src="img/button/code.png" id="code" onclick="clic(this)" style="margin-bottom:30px"><br></form><img src="img/button/foto.png" id="foto" onclick="clic(this)"></div>'

		+'</div>' +
        '</div>' +
    '</div>';
var tmp = "document.location.reload(true);"
var page2 =     
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Robot</h1></div>' +
        '<div class="scroller">' +
            '<div class="robot">' +
                '<div id="panel"><input id="address" type="textbox" value="Kiev">'+
    		'<input type="button" value="јдреса" onclick="codeAddress()"><input type="button" value="ќбновить" onclick="document.location.reload(true)"></div><div id="map-canvas"></div>'+
            '</div>' +
        '</div>' +
    '</div>';
var page3 =     
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Robot</h1></div>' +
        '<div class="scroller">' +
            '<div class="robot">' +
                '/*Your data sample*/'+
            '</div>' +
        '</div>' +
    '</div>';
// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var homePage =
    '<div>' +
        '<div class="header"><h1>Page Slider</h1></div>' +
        '<div class="scroller">' +
            '<ul class="list">' +
                '<li><a href="#page1"><strong>Build Bot</strong></a></li>' +
                '<li><a data-no-turbolink="true" href="#page2"><strong>Medi Bot</strong></a></li>' +
                '<li><a href="#page3"><strong>Ripple Bot</strong></a></li>' +
            '</ul>' +
        '</div>' +
    '</div>';

var detailsPage =
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Robot</h1></div>' +
        '<div class="scroller">' +
            '<div class="robot">' +
                '/*Your data sample*/'
            '</div>' +
        '</div>' +
    '</div>';


var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;

    if (hash === "#page1") {
        page = page1;
    } else if (hash === "#page2") {
        page = page2;
    } else if (hash === "#page3") {
        page = page3;
    }
    else {
        page = homePage;
//        slider.slide($(homePage), "left");
    }

    slider.slidePage($(page));

}

// Primitive template processing. In a real-life app, use Handlerbar.js, Mustache.js or another template engine
function merge(tpl, data) {
    return tpl.replace("{{loc}}", data.loc);
}

route();