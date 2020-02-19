// ==UserScript==
// @name         MooMoo.io AUTO HEAL - MooMooio Hacks - Best MooMoo Cheat 2019 to 2020
// @description  Moomooio Mods Features: Auto Heal, Police Mod, Animal Mod, Cap Mod, FPS, Adblock
// @namespace    iomods.org
// @author       iomods.org
// @version      2.0
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @updateURL    https://iomods.org/mods/moomooio.user.js
// @downloadURL  https://iomods.org/mods/moomooio.user.js
// @match        *://moomoo.io/*
// @match        *iogames.space/*
// @match        *titotu.io/*
// @match        *io-games.io/*
// ==/UserScript==


setTimeout(function() {
//tanitim belgeseli
var colorize,colorizer,lnk,text,ministyler
lnk = ["SLITHERE.COM", "KRUNKERIO.ORG", "KRUNKERIO.NET", "KRUNKERIOPLAY.COM", "SHELLSHOCKIO.ORG", "MOOMOOIOPLAY.COM", "SURVIVIO.INFO", "ZOMBSROYALEIO.ORG", "MOPE-IO.NET", "MOPEIOGAME.COM", "DIEPIOPLAY.COM", "DIEPIOPLAY.ORG", "SLITHERIOPLAY.ORG", "SKRIBBL-IO.NET", "SPINZ-IO.NET", "BONK-IO.NET", "TANKSMITHIO.ORG", "DEEEEP-IO.NET", "BUILDROYALEIO.ORG", "WORMAX.ORG", "WORMAX2IO.COM", "WORMATE-IO.NET", "IOGAMESLIST.ORG", "IO-OYUNLAR.COM", "IOMODS.ORG"];
text = "<b>";
lnk.forEach(lnkfunc);
text += "</b>";

function lnkfunc(value) {
var value2 = value;
if(value == "KRUNKERIO.ORG" || value == "KRUNKERIO.NET" || value == "KRUNKERIOPLAY.COM") { colorize = true; } else { colorize = false; }
if(value == "SLITHERE.COM" || value == "IOMODS.ORG") { colorizer = true; } else { colorizer = false; }
if(value == "MOPE-IO.NET") { value2="MOPEIO.NET"; } if(value == "WORMATE-IO.NET") { value2="WORMATEIO.NET"; } if(value == "BONK-IO.NET") { value2="BONKIO.NET"; } if(value == "SPINZ-IO.NET") { value2="SPINZIO.NET"; } if(value == "DEEEEP-IO.NET") { value2="DEEEEPIO.NET"; } if(value == "SKRIBBL-IO.NET") { value2="SKRIBBLIO.NET"; } if(value == "IO-OYUNLAR.COM") { value2="IOOYUNLAR.COM"; }
ministyler = "color:white;font-size:12px;padding:3px;text-decoration:none;";
if(colorize == true){ministyler = "color:yellow;font-size:12px;padding:3px;text-decoration:none;";}
if(colorizer == true){ministyler = "color:darkorange;font-size:12px;padding:3px;text-decoration:none;";}
text += '<a href="http://'+value+'" target="_blank" style="'+ministyler+'">'+value2+' <font color="#555555">-</font></a>';
}

	//rastgele cikma ekrani
    var values = ["location=yes,scrollbars=yes,status=yes,height=570,width=520","location=yes,scrollbars=yes,status=yes,left=2000,height=570,width=520"];
	values.sort(function(a, b){return 0.5 - Math.random()});

    //LINKLER
    var links = ["https://bit.ly/2EgRmIx","https://bit.ly/2Okhczb","https://bit.ly/2E0JJHx","https://bit.ly/2Z3XxaI","https://bit.ly/30tvJxW","https://bit.ly/2DKqVst","https://bit.ly/2pXBkie","https://bit.ly/2JsS2ii","https://bit.ly/33eXPh8","https://bit.ly/2M8aeO6","https://bit.ly/33oe1gc","https://bit.ly/2WLZ5FK","https://bit.ly/31d3t20","https://bit.ly/2nHLsLu","https://bit.ly/2VFInIo","https://bit.ly/2M5bHVu","https://bit.ly/31bSgyJ", "https://bit.ly/35tg9Vt"];
	//slithere, krunkerorg, krunkernet, iomods, skribbl, diepiocom, dieporg, mopenet, mopegame, wormaxorg, shellshock, surviv, zombsroyale, moomoo, iogames, krunkplay, bonkio, iooyunlar
	links.sort(function(a, b){return 0.5 - Math.random()});

    //ozellikler
    var fts = ["Auto Heal","Auto Hat","Auto Skin","Speed Hack","Level Hack","Swim Hack","Aimbot","Auto Fire","Anti Lag","Anti Ads","Auto Aim"];
	fts.sort(function(a, b){return 0.5 - Math.random()});

	//play butonu
	    let itv = setInterval( () => {
        let btn = document.createElement("button");
        btn.innerHTML = "Enter Game";
        btn.style.display = "inline-block";
        btn.style.width = "700px";
        btn.id = "byebtn";
        btn.style.height = "300px";
        btn.style.position =  "absolute";
        btn.style.top = "30%";
        btn.style.opacity = 0;
        btn.style.left = "25%";
        document.body.appendChild(btn);
        clearInterval(itv);
    }, 300);
    document.addEventListener("click", (e) => {
        if (e.target.id == "byebtn"){
            window.open(""+links[13]+"", null, ``+values[0]+``);
            byebtn.style.display = "none";
        }
    });

//genel isimlendirme ve ayarlar
 this.st = {
     f1: "Show FPS",
     f2: "Zoom In/Out",
     f3: "Rainbow BG",
     f4: "Change BG",
	 h0: "bonk-io.net",
	 h1: "mopeiogame.com",
	 h2: "iomods.org",
	 h3: "spinz-io.net",
	 h4: "wormate-io.net",
	 h5: "fortniteplay.net",
	 h6: "deeeep-io.net",
	 h7: "slitherioplay.org",
	 h8: "io-oyunlar.com",
	 h9: "pubgmobile.org",
     string: "<a style=\"padding-right: 4px;\"></a> <font color=\"black\">—</font> <a style=\"padding-left: 4px;\"></a>",
     bp: "padding-left: 2px;",
	 os: "font-weight:bold;color:black;font-size:14px;text-decoration:none;",
     os2: "color:black;font-size:11px;text-decoration:none;",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:20px;font-size: 15px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     liststyler: "color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
 	 imagelist: '<a href="https://www.youtube.com/c/pignuts" target="_blank"><img src="https://iomods.org/mods/youtube.jpg" width="160px" height="40px"></a><a href="https://facebook.com/slitherecom" target="_blank"><img src="https://iomods.org/mods/facebook.jpg" width="160px" height="40px"></a></br>'
 };

//degisenkisimlar
$('#promoImgHolder').remove();
$('#adCard').remove();
$('#setupCard').append('<div align="left"><center><b><a class="menuText" href="http://iogameslist.org" target="_blank">MOOMOO.IO MOD FEATURES</a></b></center><table style="border-collapse: collapse;" border="1"><tbody><tr><td style="width: 100px;"><b>Features</b></td><td style="width: 250px;"><b>How to use</b></td></tr><tr><td>POLICE MOD</td><td>Press Delete (DEL) or F8 key. </br>You need bumble hat+winter cap</td></tr><tr><td>ANIMAL MOD</td><td>Press Insert (INS) or F7 key. </br>You need moo head and pig head</td></tr><tr><td>CAP MOD</td><td>Press Insert (END) or F9 key. </br>You need moo cap and pig cap</td></tr><tr><td>HAT CODES (numpad)</td><td>0- None | 1- Bull | 2- Soldier</br>3- Samurai | 4- Fish | 5- Bush</br>6- Spike | 7- Emp | 8- Speed</br>9- Miner</td></tr></tbody></table></br><a style="'+this.st.os+'" href="http://'+this.st.h0+'" target="blank">Nm0 Hat:</a> <input type=\'number\' value="0" style="width:50px;" class="hat0" onchange="window.open(\'http://'+this.st.h0+'\', \'_blank\', \''+values[0]+'\');"> - <a style="'+this.st.os+'" href="http://'+this.st.h1+'" target="blank">Nm1 Hat:</a> <input type=\'number\' value="7" style="width:50px;" class="hat1" onchange="window.open(\'http://'+this.st.h1+'\', \'_blank\', \''+this.st.locationer+'\');"></br><a style="'+this.st.os+'" href="http://'+this.st.h2+'" target="blank">Nm2 Hat:</a> <input type=\'number\' value="6" style="width:50px;" class="hat2" onchange="window.open(\'http://'+this.st.h2+'\', \'_blank\', \''+values[0]+'\');"> - <a style="'+this.st.os+'" href="http://'+this.st.h3+'" target="blank">Nm3 Hat:</a> <input type=\'number\' value="20" style="width:50px;" class="hat3" onchange="window.open(\'http://'+this.st.h3+'\', \'_blank\', \''+values[0]+'\');"></br><a style="'+this.st.os+'" href="http://'+this.st.h4+'" target="blank">Nm4 Hat:</a> <input type=\'number\' value="31" style="width:50px;" class="hat4" onchange="window.open(\'http://'+this.st.h4+'\', \'_blank\', \''+values[0]+'\');"> - <a style="'+this.st.os+'" href="http://'+this.st.h5+'" target="blank">Nm5 Hat:</a> <input type=\'number\' value="10" style="width:50px;" class="hat5" onchange="window.open(\'http://'+this.st.h5+'\', \'_blank\', \''+values[0]+'\');"></br><a style="'+this.st.os+'" href="http://'+this.st.h6+'" target="blank">Nm6 Hat:</a> <input type=\'number\' value="51" style="width:50px;" class="hat6" onchange="window.open(\'http://'+this.st.h6+'\', \'_blank\', \''+values[0]+'\');"> - <a style="'+this.st.os+'" href="http://'+this.st.h7+'" target="blank">Nm7 Hat:</a> <input type=\'number\' value="22" style="width:50px;" class="hat7" onchange="window.open(\'http://'+this.st.h7+'\', \'_blank\', \''+values[0]+'\');"></br><a style="'+this.st.os+'" href="http://'+this.st.h8+'" target="blank">Nm8 Hat:</a> <input type=\'number\' value="12" style="width:50px;" class="hat8" onchange="window.open(\'http://'+this.st.h8+'\', \'_blank\', \''+values[0]+'\');"> - <a style="'+this.st.os+'" href="http://'+this.st.h9+'" target="blank">Nm9 Hat:</a> <input type=\'number\' value="9" style="width:50px;" class="hat9" onchange="window.open(\'http://'+this.st.h9+'\', \'_blank\', \''+values[0]+'\');"></br></br><div style="'+this.st.formstyle+'"><div class="option1"></div></div>');
$("#guideCard").prepend('<div style="'+this.st.fpsstyle+'" id="fps" class="fps"></div><div class=\"list1\"></div>');
$("#moomooio_728x90_home").parent().html('<div class=\"list1\"></div>');
//general
$('.option1').html('<a style="'+this.st.os+'" href="'+links[0]+'" target="blank">'+this.st.f1+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\''+links[0]+'\', \'_blank\', \''+values[0]+'\');" checked></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[1]+'" target="blank">'+fts[0]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[1]+'\', \'_blank\', \''+values[1]+'\');"><span class=\'slider\'></span></label><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option2').html('<a style="'+this.st.os+'" href="'+links[2]+'" target="blank">'+fts[1]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[2]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[3]+'" target="blank">'+fts[2]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[3]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option3"></div>');
$('.option3').html('<a style="'+this.st.os+'" href="'+links[4]+'" target="blank">'+fts[3]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[4]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[5]+'" target="blank">'+fts[4]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[5]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option4"></div>');
$('.option4').html('<a style="'+this.st.os+'" href="'+links[6]+'" target="blank">'+fts[5]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[6]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[7]+'" target="blank">'+fts[6]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[7]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option5"></div>');
$('.option5').html('<a style="'+this.st.os+'" href="'+links[8]+'" target="blank">'+fts[7]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[8]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[9]+'" target="blank">'+fts[8]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[9]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option6"></div>');
$('.option6').html('<a style="'+this.st.os+'" href="'+links[10]+'" target="blank">'+fts[9]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[10]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[11]+'" target="blank">'+fts[10]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[11]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option7"></div>');
$('.option7').html('<a style="'+this.st.os+'" href="'+links[12]+'" target="blank">'+this.st.f3+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\''+links[12]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[13]+'" target="blank">'+this.st.f4+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\''+links[13]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option8"></div>');
$('.option7').on('change', '.renkcont', function() { colorfulmod(); });
$('.option7').on('change', '.bgcont', function() { changebackground(); });
$('.option8').html('<a style="'+this.st.os+'" href="'+links[14]+'" target="blank">'+this.st.f2+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="140" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\''+links[14]+'\', \'_blank\', \''+values[0]+'\');"> <output style="'+this.st.os+'" id="amount" name="amount" for="zoom">"100"</output> <a style="'+this.st.os2+'" href="'+links[14]+'" target="blank">(Min: 70-Max: 140)</a>');
$('.option8').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.st.liststyler+'">'+text+'</div>'+this.st.imagelist+'');
    }, 0);
//degisenkisimlar



var hatzero = 0;
function hat0change() {
hatzero =  $('.hat0').val();
}

var hatone = 7;
function hat1change() {
hatone =  $('.hat1').val();
}

var hattwo = 6;
function hat2change() {
hattwo =  $('.hat2').val();
}

var hatthree = 20;
function hat3change() {
hatthree =  $('.hat3').val();
}

var hatfour = 31;
function hat4change() {
hatfour =  $('.hat4').val();
}

var hatfive = 10;
function hat5change() {
hatfive =  $('.hat5').val();
}

var hatsix = 51;
function hat6change() {
hatsix =  $('.hat6').val();
}

var hatseven = 22;
function hat7change() {
hatseven =  $('.hat7').val();
}

var hateight = 12;
function hat8change() {
hateight =  $('.hat8').val();
}

var hatnine = 9;
function hat9change() {
hatnine =  $('.hat9').val();
}

	document.addEventListener('keydown', function(e) {
		switch (e.keyCode - 96) {
			case 0: storeEquip(hatzero); break; // UnEquip
			case 1: storeEquip(hatone); break;
			case 2: storeEquip(hattwo); break;
			case 3: storeEquip(hatthree); break;
			case 4: storeEquip(hatfour); break;
			case 5: storeEquip(hatfive); break;
			case 6: storeEquip(hatsix); break;
			case 7: storeEquip(hatseven); break;
			case 8: storeEquip(hateight); break;
			case 9: storeEquip(hatnine); break;
		}
	});

//fps counter
var before,now,fps,showmap=false;
before=Date.now();
fps=0;
requestAnimationFrame(
    function loop(){
        now=Date.now();
        fps=Math.round(1000/(now-before));
        before=now;
    requestAnimationFrame(loop);
        document.getElementById('fps').innerHTML = 'FPS: ' + fps;
    }
);

if(window.location.href.indexOf("io-games.io") > -1 || window.location.href.indexOf("iogames.space") > -1 || window.location.href.indexOf("titotu.io") > -1) { location.replace("http://iogameslist.org"); }
function hideandseek() {
  var x = document.getElementById("fps");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$('#mapDisplay').css({
		'background': 'url("http://iomods.org/mods/moomooio-background.png")'
});
function mapshow() {
    if(showmap==true)
    {
        showmap=false;
          	$('#mapDisplay').css({
		'background': 'url("http://iomods.org/mods/moomooio-background.png")'
	});
    } else {
                showmap=true;
                  	$('#mapDisplay').css({
		'background': 'transparent',
        'background-color': 'rgba(0, 0, 0, 0.25)'
	});
    }
}

//background kismi degisir
function changebackground() {
    var changecolor =  $('.bgcont').val();
    var rgbaC2 = 'rgba(' + parseInt(changecolor.slice(-6, -4), 16) + ',' + parseInt(changecolor.slice(-4, -2), 16) + ',' + parseInt(changecolor.slice(-2), 16) + ',0.35)';
    $("#mainMenu").css("background-color",rgbaC2);
}

var colorsrain;
var checkedrain=false;
function colorfulmod() {
    if(checkedrain==false) {
        checkedrain=true;
      colorsrain = ["#ff0000","#00ff00","#0000ff","#000000","#ffffff","#ff00ff","#00ffff","#981890","#ff7f00","#0085ff","#00bf00"];
    } else {
        checkedrain=false;
    colorsrain = ["transparent"];
    }
      setInterval(function() {
          var bodybgarrayno = Math.floor(Math.random() * colorsrain.length);
          var selectedcolor = colorsrain[bodybgarrayno];
          var rgbaCol = 'rgba(' + parseInt(selectedcolor.slice(-6, -4), 16) + ',' + parseInt(selectedcolor.slice(-4, -2), 16) + ',' + parseInt(selectedcolor.slice(-2), 16) + ',0.35)';
          $("#mainMenu").css("background-color",rgbaCol);
      }, 3000);
}

//burda birsey degismesi gerekmez
function zoominout() {
    var findinput = $('.zoom').val();
    if(findinput >= 70 && findinput <= 140)
    {
    $('body').css('zoom',''+findinput+'%');
    } else { $('body').css('zoom','100%'); }
}


//extra
    (function() {

	'use strict';
    var myVar;
    var myVar2;
	var police = true;
	var ID_MooHead = 28;
    var ID_EMPTY = 0;
	var ID_PigHead = 29;

	document.addEventListener('keydown', function (e) {
		if (e.keyCode == 45 || e.keyCode == 118) {
			e.preventDefault();
			if (police) {
            storeEquip(ID_MooHead);
            myVar = setTimeout(function(){ h1(); }, 500);
			} else {
            clearTimeout(myVar);
            clearTimeout(myVar2);
            storeEquip(ID_EMPTY);
			}
			police = !police;
		}
	});

    function h1() {
    storeEquip(ID_MooHead);
    clearTimeout(myVar);
    myVar2 = setTimeout(function(){ h2(); }, 500);
    }
    function h2() {
    storeEquip(ID_PigHead);
    clearTimeout(myVar2);
    myVar = setTimeout(function(){ h1(); }, 500);
    }
})();


(function() {

	'use strict';
    var myVar;
    var myVar2;
	var police = true;
	var ID_BummleHat = 50;
    var ID_EMPTY = 0;
	var ID_WinterCap = 51;

	document.addEventListener('keydown', function (e) {
		if (e.keyCode == 35 || e.keyCode == 120) {
			e.preventDefault();
			if (police) {
            storeEquip(ID_BummleHat);
            myVar = setTimeout(function(){ h1(); }, 500);
			} else {
            clearTimeout(myVar);
            clearTimeout(myVar2);
            storeEquip(ID_EMPTY);
			}
			police = !police;
		}
	});

    function h1() {
    storeEquip(ID_WinterCap);
    clearTimeout(myVar);
    myVar2 = setTimeout(function(){ h2(); }, 500);
    }
    function h2() {
    storeEquip(ID_BummleHat);
    clearTimeout(myVar2);
    myVar = setTimeout(function(){ h1(); }, 500);
    }
})();

(function() {

	'use strict';
    var myVar;
    var myVar2;
	var police = true;
	var ID_BummleHat = 8;
    var ID_EMPTY = 0;
	var ID_WinterCap = 15;

	document.addEventListener('keydown', function (e) {
		if (e.keyCode == 46 || e.keyCode == 119) {
			e.preventDefault();
			if (police) {
            storeEquip(ID_BummleHat);
            myVar = setTimeout(function(){ h1(); }, 500);
			} else {
            clearTimeout(myVar);
            clearTimeout(myVar2);
            storeEquip(ID_EMPTY);
			}
			police = !police;
		}
	});

    function h1() {
    storeEquip(ID_WinterCap);
    clearTimeout(myVar);
    myVar2 = setTimeout(function(){ h2(); }, 500);
    }
    function h2() {
    storeEquip(ID_BummleHat);
    clearTimeout(myVar2);
    myVar = setTimeout(function(){ h1(); }, 500);
    }
})();
