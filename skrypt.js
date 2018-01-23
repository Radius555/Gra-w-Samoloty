	var punkty = 0;
	
	
function losuj() 
{
	var items = [];

	for(var i = 0; i < 64; i++) 
	{
		items[i] = Math.round(Math.random());
	}
	return items;
};

		function odblokuj_pyt() 
		{
		document.getElementById( 'pytania').style.display='block';
		};
		
		function odblokuj_drz() 
		{
		document.getElementById( 'drzewa').style.display='block';
		};
		function odblokuj_pytanka() 
		{
		setTimeout(function(){document.getElementById('pytanka').setAttribute("style", "animation-play-state:running; display: block;");},550);
		setTimeout(function(){document.getElementById('pytanka').setAttribute("style", "position: absolute; display: block;");},1500);
		setTimeout(function(){document.getElementById('pytka').setAttribute("style", "animation-play-state:running; display: block;");},1500);
		setTimeout(function(){document.getElementById('pytka').setAttribute("style", "animation-play-state:running; display: block; margin-top: 90px; margin-left: 190px;");},3000);
		setTimeout(function(){document.getElementById('OdpA').setAttribute("style", "animation-play-state:running; display: block;");},3000);
		setTimeout(function(){document.getElementById('OdpA').setAttribute("style", "animation-play-state:running; display: block; margin-top: 30px; margin-left: 190px;");},3500);
		setTimeout(function(){document.getElementById('OdpB').setAttribute("style", "animation-play-state:running; display: block;");},3200);
		setTimeout(function(){document.getElementById('OdpB').setAttribute("style", "animation-play-state:running; display: block; margin-top: 15px; margin-left: 190px;");},3700);
		setTimeout(function(){document.getElementById('OdpC').setAttribute("style", "animation-play-state:running; display: block;");},3400);
		setTimeout(function(){document.getElementById('OdpC').setAttribute("style", "animation-play-state:running; display: block; margin-top: 15px; margin-left: 190px;");},3900);
		};
		
		function znik_pyt() 
		{
		setTimeout(function(){document.getElementById( 'pytania' ).style.animation='pytania_anim 0.5s';},);
		setTimeout(function(){document.getElementById( 'pytania' ).style.display='none';},450);
		};
		
		function znik_drz() 
		{
		document.getElementById( 'drzewa' ).style.display='none';
		};
		
		function blokuj_drz()
		{
		document.getElementById('drzewa').disabled='disabled';	
		};
		
		function blokuj_pyt()
		{
		document.getElementById('pytania').disabled='disabled';	
		};
		
		function znik_pytanka() 
		{
		setTimeout(function(){document.getElementById( 'pytanka' ).style.animation='pytanka_znik_anim 0.5s';},);
		setTimeout(function(){document.getElementById( 'pytanka' ).style.display='none';},450);
		setTimeout(function(){document.getElementById( 'pytka' ).style.animation='pytanka_znik_anim 0.5s';},);
		setTimeout(function(){document.getElementById( 'pytka' ).style.display='none';},450);
		setTimeout(function(){document.getElementById( 'OdpA' ).style.animation='pytanka_znik_anim 0.5s';},);
		setTimeout(function(){document.getElementById( 'OdpA' ).style.display='none';},450);
		setTimeout(function(){document.getElementById( 'OdpB' ).style.animation='pytanka_znik_anim 0.5s';},);
		setTimeout(function(){document.getElementById( 'OdpB' ).style.display='none';},450);
		setTimeout(function(){document.getElementById( 'OdpC' ).style.animation='pytanka_znik_anim 0.5s';},);
		setTimeout(function(){document.getElementById( 'OdpC' ).style.display='none';},450);
		};
		function znik_animacja()
		{
		document.getElementById('kwadracik').style.display="none";
		document.getElementById('samolot1').style.display="none";
		document.getElementById('samolot2').style.display="none";
		document.getElementById('pocisk').style.display="none";
		document.getElementById('boom').style.display="none";
		document.getElementById('bangbang').style.display="none";
		document.getElementById('kula').style.display="none";
		}
	
	function odp1 (pozycja)
	{
		if (pozycja) 
		{
			document.getElementById(pozycja).src = 'juz.jpg';
			document.getElementById(pozycja).disabled='disabled';
			znik_pyt();
			odblokuj_pytanka();
		}	
		else
		{
			alert ('Błąd!');
			setTimeout(znik_pyt(),0);
			setTimeout(odblokuj_drz(),0);
		}
	};
	function odp2 (pozycja)
	{
		if (pozycja) 
		{
			document.getElementById(pozycja).src = 'juz.jpg';
			document.getElementById(pozycja).disabled='disabled';
			znik_pyt();
			odblokuj_pytanka();
		}	 
		else
		{
			alert ('Błąd!');
			setTimeout(znik_pyt(),1000);
			setTimeout(odblokuj_drz(),1000);
		}
	};
	function odp3 (pozycja)
	{
		if (pozycja) 
		{
			document.getElementById(pozycja).src = 'juz.jpg';
			document.getElementById(pozycja).disabled='disabled';
			znik_pyt();
			odblokuj_pytanka();
		}
		else
		{
			alert ('Błąd!');
			setTimeout(znik_pyt(),0);
			setTimeout(odblokuj_drz(),0);
		}		
	};
	function odp4 (pozycja)
	{
		if (pozycja) 
		{
			document.getElementById(pozycja).src = 'juz.jpg';
			document.getElementById(pozycja).disabled='disabled';
			znik_pyt();
			odblokuj_pytanka();
			zlicz_pts();
		}
		else
		{
			alert ('Błąd!');
			setTimeout(znik_pyt(),0);
			setTimeout(odblokuj_drz(),0);
		}		
	};
function sprawdz(pozycja)
{
	var poprawna = OdpA;
	
	if(pozycja == poprawna) 
	{
	setTimeout(function(){document.getElementById('komunikat1').setAttribute("style", "animation-play-state:running; display: block;");},500);
	setTimeout(function(){document.getElementById('komunikat1').setAttribute("style", "animation-play-state:running; display: block; margin-top: 15px; margin-left: 190px;");},500);
	setTimeout(function(){document.getElementById( 'komunikat1' ).style.display='none';},3000);
	setTimeout(znik_pytanka, 3000);
	setTimeout(odblokuj_drz, 3500);
	punkty = punkty + 1;
	document.getElementById("wynik1").innerHTML=punkty;
	}
    else 
	{
	setTimeout(function(){document.getElementById('komunikat2').setAttribute("style", "animation-play-state:running; display: block;");},500);
	setTimeout(function(){document.getElementById('komunikat2').setAttribute("style", "position: absolute; display: block;");},500);
	setTimeout(function(){document.getElementById( 'komunikat2' ).style.display='none';},3000);
	setTimeout(znik_pytanka, 3000);
	setTimeout(odblokuj_pyt, 3500);
	}
};

var positionArray = losuj();
var gnome = 0;

function zmien(pozycja)
{
	if (positionArray[pozycja]) 
	{
		gnome++;
		if(gnome<=20)
		{
		punkty = punkty + 1;
		document.getElementById("wynik1").innerHTML=punkty;
		znik_pyt();
		znik_drz();
		document.getElementById('kwadracik').style.display="block";
		document.getElementById('samolot1').setAttribute("style", "animation-play-state:running; display: block;");
		document.getElementById('samolot2').setAttribute("style", "animation-play-state:running; display: block;");
		document.getElementById('pocisk').setAttribute("style", "animation-play-state:running; display: block;");
		document.getElementById('boom').setAttribute("style", "animation-play-state:running; display: block;");
		document.getElementById('bangbang').setAttribute("style", "animation-play-state:running; display: block;");
		document.getElementById('kula').setAttribute("style", "animation-play-state:running; display: block;");
		document.getElementById(pozycja).disabled='disabled';
		setTimeout(znik_animacja, 4500); 
		setTimeout(odblokuj_pyt, 4500); 
		setTimeout(function(){document.getElementById('boom').style = "display: none"}, 2500);
		setTimeout(function(){document.getElementById(pozycja).src = 'ogień.gif'}, 4500);
		}
		else
		{
		setTimeout(function(){document.getElementById(pozycja).src = 'niebo.png'}, 500);
		document.getElementById(pozycja).disabled='disabled';
		setTimeout(znik_drz, 1500);
		setTimeout(odblokuj_pyt, 1500);
		}
	}
	else 
	{
	setTimeout(function(){document.getElementById(pozycja).src = 'niebo.png'}, 500);
	document.getElementById(pozycja).disabled='disabled';
	setTimeout(znik_drz, 2000);
	setTimeout(odblokuj_pyt, 2000);
	}
};