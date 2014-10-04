window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);
var page1 =     
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Menu</h1></div>' +
        '<div class="scroller">' +
            '<div class="robot" >' +
'<link href="css/bootstrap.css" rel="stylesheet"><link href="css/bootstrap-responsive.css" rel="stylesheet"><link rel="apple-touch-icon-precomposed" sizes="144x144" href="img/apple-touch-icon-144-precomposed.png"><link rel="apple-touch-icon-precomposed" sizes="114x114" href="img/apple-touch-icon-114-precomposed.png"><link rel="apple-touch-icon-precomposed" sizes="72x72" href="img/apple-touch-icon-72-precomposed.png"><link rel="apple-touch-icon-precomposed" href="img/apple-touch-icon-57-precomposed.png"><link rel="shortcut icon" href="img/favicon.png"><link href="css/style.css" rel="stylesheet"><link href="css/app.css" rel="stylesheet"><script src="js/jsonn.js"></script><script src="js/action.js"></script><div class="container" id="main"><h1 style="color:green;"> Enter code</h1><form action="#" id="formm"><input value="00000007" name="edr" style="margin-bottom:30px" id="inp"><br><img src="img/button/code.png" id="code" onclick="clic(this)" style="margin-bottom:30px"><br></form><img src="img/button/foto.png" id="foto" onclick="clic(this)"></div>'

		+'</div>' +
        '</div>' +
    '</div>';
var tmp = "document.location.reload(true);"
var page2 =     
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Map</h1></div>' +
        '<div class="scroller">' +
            '<div class="robot">' +
                '<div id="panel"><input id="address" type="textbox" value="Kiev">'+
    		'<input type="button" value="Address" onclick="codeAddress()"><input type="button" value="Refresh" onclick="document.location.reload(true)"></div><div id="map-canvas"></div>'+
            '</div>' +
        '</div>' +
    '</div>';
var page3 =     
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>About us</h1></div>' +
        '<div class="scroller">' +
            '<div class="robot" style="text-align:  center;">' +
                '<p>Єдиний державний реєстр юридичних осіб та фізичних осіб - підприємців (далі - Єдиний державний реєстр) - автоматизована система збирання, накопичення, захисту, обліку та надання інформації про юридичних осіб та фізичних осіб – підприємців. (Закон України "Про державну реєстрацію юридичних осіб та фізичних осіб-підприємців").</p>'+
		'<h1>Прес-служба</h1>'+
		'<p>(044) 233-64-71, 233-66-81 (для засобів масової інформації)</p>'+
		'<p>press@drsu.gov.ua</p>'+
		'<h1>Діловод Департаменту</h1>'+
		'<p>(044) 233-64-87</p>'+
		'<h2>Телефон для довідок з питань державної реєстрації речових прав на нерухоме майно</h2>'+
		'<p>(044) 233-64-78</p>'+
		'<h1>Офіс ДП "ІРЦ":</h1>'+
		'<p>    Телефон/факс: (044) 481-49-20</p>'+
    		'<p>E-mail: office@irc.gov.ua</p>'+
		'<h1>Служба технічної підтримки ДП "ІРЦ":</h1>'+
		'<p>Телефон/факс: (044) 481-49-27</p>'+
		'<p>E-mail: support@irc.gov.ua</p>'+
            '</div>' +
        '</div>' +
    '</div>';
// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var homePage =
    '<div>' +
        '<div class="header"><h1>Person checker</h1></div>' +
        '<div class="scroller">' +
            '<ul class="list" style="text-align:  center;">' +
                '<li><a href="#page1"><strong>Menu</strong></a></li>' +
                '<li><a data-no-turbolink="true" href="#page2"><strong>Map</strong></a></li>' +
                '<li><a href="#page3"><strong>About us</strong></a></li>' +
                '<li><a href="contact.html"><strong>Contacts</strong></a></li>' +
            '</ul>' +
        '</div>' +
    '</div>';

var detailsPage =
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a></div>' +
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
    } else if (hash === "#page4") {
        page = page4;}
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