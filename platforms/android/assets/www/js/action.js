$("document").change(function(){   
    $("#add").hover(function() {
            document.getElementById("add").setAttribute("src","img/button/add_click.png");
        }, function() {
            document.getElementById("add").setAttribute("src","img/button/add.png");
        });
    $("#menu").hover(function() {
            document.getElementById("menu").setAttribute("src","img/button/menu_click.png");
        }, function() {
            document.getElementById("menu").setAttribute("src","img/button/menu.png");
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
$("document").ready(function(){
    $("#add").hover(function() {
            document.getElementById("add").setAttribute("src","img/button/add_click.png");
        }, function() {
            document.getElementById("add").setAttribute("src","img/button/add.png");
        });
    $("#menu").hover(function() {
            document.getElementById("menu").setAttribute("src","img/button/menu_click.png");
        }, function() {
            document.getElementById("menu").setAttribute("src","img/button/menu.png");
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
function clic(id) {
     
    var main = document.getElementById("main");
    var x = getXML(document.getElementById("inp").value);
    main.innerHTML = x;
}
 
 
function myFunction(json) {
    alert(json[0].id); 
}
 
function getXML(value) {
    var IDR = document.getElementById("inp").value;
    var jso = JSON.parse(xmlf);
    var data = [];
    for(i = 0; i < jso.length; i++) {
        if (jso[i].code == value) {
            data.push(jso[i].combined);
            data.push(jso[i].confirmation_state);
            data.push(jso[i].sbj_state);
            data.push(jso[i].qvd);
            data.push(jso[i].tel);
            data.push(jso[i].name);
            if (jso[i].sbj_state.indexOf("в стані припинення") != -1) {
                data.push("yellow.png");
            } else if (jso[i].sbj_state.indexOf("не перебуває в процесі припинення") != -1){
                data.push("green.png");
            } else {
                data.push("red.png");
            }
        }
    }
     
 
    if (data[0] != undefined) {
        var text = '<img src="img/button/'+data[6]+'" style="margin-top:5px;"><br><h4>'+data[0]+'</h4><h5>'+data[1]+'</h5><h5>Стан підприємства: '+data[2]+'</h5><h5>Типи діяльності: '+data[3]+'</h5><h5>Тел:'+data[4]+'</h5><img src="img/button/add.png" id="add" onclick="add(this)"><br><img src="img/button/menu.png" id="menu" onclick="menus()">';
    } else {
        var text = '<h4>Нічого не знайдено</h4><img src="img/button/menu.png" id="menu" onclick="menus()">';
    }
    return '<div class="container" id="main">'+text+'</div>';
};
 
function menus() {
    var main = document.getElementById("main");
    main.innerHTML = '<h1 style="color:#008000;"> Введіть код</h1><form action="#" id="form"><input value="00000023" name="edr" style="margin-bottom:30px" id="inp"><br><img src="img/button/code.png" id="code" onclick="clic(this)" style="margin-bottom:30px"><br></form><img src="img/button/foto.png" id="foto" onclick="clic(this)">';
 
} 