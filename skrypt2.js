var punkty1 = 0;
	
	
function losuj1() 
{
	var items1 = [];

	for(var i = 0; i < 64; i++) 
	{
		items1[i] = Math.round(Math.random());
	}
	return items1;
};
		function odblokuj_pyt1() 
		{
		document.getElementById( 'pytania1').style.display='block';
		};
		
		function odblokuj_drz1() 
		{
		document.getElementById( 'drzewa1').style.display='block';
		};
		function odblokuj_pytanka1() 
		{
		setTimeout(function(){document.getElementById('pytanka1').setAttribute("style", "animation-play-state:running; display: block;");},550);
		setTimeout(function(){document.getElementById('pytanka1').setAttribute("style", "position: absolute; display: block;");},1500);
		setTimeout(function(){document.getElementById('pytka1').setAttribute("style", "animation-play-state:running; display: block;");},1500);
		setTimeout(function(){document.getElementById('pytka1').setAttribute("style", "animation-play-state:running; display: block; margin-top: 90px; margin-left: 190px;");},3000);
		setTimeout(function(){document.getElementById('OdpA1').setAttribute("style", "animation-play-state:running; display: block;");},3000);
		setTimeout(function(){document.getElementById('OdpA1').setAttribute("style", "animation-play-state:running; display: block; margin-top: 30px; margin-left: 190px;");},3500);
		setTimeout(function(){document.getElementById('OdpB1').setAttribute("style", "animation-play-state:running; display: block;");},3200);
		setTimeout(function(){document.getElementById('OdpB1').setAttribute("style", "animation-play-state:running; display: block; margin-top: 15px; margin-left: 190px;");},3700);
		setTimeout(function(){document.getElementById('OdpC1').setAttribute("style", "animation-play-state:running; display: block;");},3400);
		setTimeout(function(){document.getElementById('OdpC1').setAttribute("style", "animation-play-state:running; display: block; margin-top: 15px; margin-left: 190px;");},3900);
		};
		
		function znik_pyt1() 
		{
		setTimeout(function(){document.getElementById( 'pytania1' ).style.animation='pytania_anim 0.5s';},);
		setTimeout(function(){document.getElementById( 'pytania1' ).style.display='none';},450);
		};
		
		function znik_drz1() 
		{
		document.getElementById( 'drzewa1' ).style.display='none';
		};
		
		function blokuj_drz1()
		{
		document.getElementById('drzewa1').disabled='disabled';	
		};
		
		function blokuj_pyt1()
		{
		document.getElementById('pytania1').disabled='disabled';	
		};
		
		function przeladuj1()
		{
		$("#pytanka").load("kodzik.php");
		};
		
		function znik_pytanka1() 
		{
		setTimeout(function(){document.getElementById( 'pytanka1' ).style.animation='pytanka_znik_anim 0.5s';},);
		setTimeout(function(){document.getElementById( 'pytanka1' ).style.display='none';},450);
		setTimeout(function(){document.getElementById( 'pytka1' ).style.animation='pytanka_znik_anim 0.5s';},);
		setTimeout(function(){document.getElementById( 'pytka1' ).style.display='none';},450);
		setTimeout(function(){document.getElementById( 'OdpA1' ).style.animation='pytanka_znik_anim 0.5s';},);
		setTimeout(function(){document.getElementById( 'OdpA1' ).style.display='none';},450);
		setTimeout(function(){document.getElementById( 'OdpB1' ).style.animation='pytanka_znik_anim 0.5s';},);
		setTimeout(function(){document.getElementById( 'OdpB1' ).style.display='none';},450);
		setTimeout(function(){document.getElementById( 'OdpC1' ).style.animation='pytanka_znik_anim 0.5s';},);
		setTimeout(function(){document.getElementById( 'OdpC1' ).style.display='none';},450);
		};
		
		function znik_animacja1()
		{
		document.getElementById('kwadracik').style.display="none";
		document.getElementById('samolot1').style.display="none";
		document.getElementById('samolot2').style.display="none";
		document.getElementById('pocisk').style.display="none";
		document.getElementById('boom').style.display="none";
		document.getElementById('bangbang').style.display="none";
		document.getElementById('kula').style.display="none";
		};
	
	function odp1a (pozycja1)
	{
		if (pozycja1) 
		{
			document.getElementById(pozycja1).src = 'juz.jpg';
			document.getElementById(pozycja1).disabled='disabled';
			przeladuj1();
			znik_pyt1();
			odblokuj_pytanka();
		}	
		else
		{
			alert ('Błąd!');
			setTimeout(znik_pyt1(),0);
			setTimeout(odblokuj_drz1(),0);
		}
	};
	function odp2a (pozycja1)
	{
		if (pozycja1) 
		{
			document.getElementById(pozycja1).src = 'juz.jpg';
			document.getElementById(pozycja1).disabled='disabled';
			przeladuj1();
			znik_pyt1();
			odblokuj_pytanka();
		}	 
		else
		{
			alert ('Błąd!');
			setTimeout(znik_pyt1(),1000);
			setTimeout(odblokuj_drz1(),1000);
		}
	};
	function odp3a (pozycja1)
	{
		if (pozycja1) 
		{
			document.getElementById(pozycja1).src = 'juz.jpg';
			document.getElementById(pozycja1).disabled='disabled';
			przeladuj1();
			znik_pyt1();
			odblokuj_pytanka1();
		}
		else
		{
			alert ('Błąd!');
			setTimeout(znik_pyt1(),0);
			setTimeout(odblokuj_drz1(),0);
		}		
	};
	function odp4a (pozycja1)
	{
		if (pozycja1) 
		{
			document.getElementById(pozycja1).src = 'juz.jpg';
			document.getElementById(pozycja1).disabled='disabled';
			przeladuj1();
			znik_pyt1();
			odblokuj_pytanka();
		}
		else
		{
			alert ('Błąd!');
			setTimeout(znik_pyt1(),0);
			setTimeout(odblokuj_drz1(),0);
		}		
	};
function sprawdz(pozycja1)
{
	var poprawna1 = OdpA;
	
	if(pozycja1 == poprawna1) 
	{
	setTimeout(function(){document.getElementById('komunikat1a').setAttribute("style", "animation-play-state:running; display: block;");},500);
	setTimeout(function(){document.getElementById('komunikat1a').setAttribute("style", "animation-play-state:running; display: block; margin-top: 15px; margin-left: 190px;");},500);
	setTimeout(function(){document.getElementById( 'komunikat1a' ).style.display='none';},3000);
	setTimeout(znik_pytanka1, 3000);
	setTimeout(odblokuj_drz1, 3500);
	punkty1 = punkty1 + 1;
	document.getElementById("wynik2").innerHTML=punkty1;
	}
    else 
	{
	setTimeout(function(){document.getElementById('komunikat2a').setAttribute("style", "animation-play-state:running; display: block;");},500);
	setTimeout(function(){document.getElementById('komunikat2a').setAttribute("style", "position: absolute; display: block;");},500);
	setTimeout(function(){document.getElementById( 'komunikat2a' ).style.display='none';},3000);
	setTimeout(znik_pytanka1, 3000);
	setTimeout(odblokuj_pyt1, 3500);
	}
};

var positionArray1 = losuj1();
var gnome1 = 0;

function zmien1(pozycja1)
{
	if (positionArray[pozycja1]) 
	{
		gnome1++;
		if(gnome1<=20)
		{
		punkty1 = punkty1 + 1;
		document.getElementById("wynik2").innerHTML=punkty1;
		znik_pyt1();
		znik_drz1();
		document.getElementById('kwadracik').style.display="block";
		document.getElementById('samolot1').setAttribute("style", "animation-play-state:running; display: block;");
		document.getElementById('samolot2').setAttribute("style", "animation-play-state:running; display: block;");
		document.getElementById('pocisk').setAttribute("style", "animation-play-state:running; display: block;");
		document.getElementById('boom').setAttribute("style", "animation-play-state:running; display: block;");
		document.getElementById('bangbang').setAttribute("style", "animation-play-state:running; display: block;");
		document.getElementById('kula').setAttribute("style", "animation-play-state:running; display: block;");
		document.getElementById(pozycja1).disabled='disabled';
		setTimeout(znik_animacja1, 4500); 
		setTimeout(odblokuj_pyt1, 4500); 
		setTimeout(znik_niemiec, 4200); 
		setTimeout(pokaz_madzy, 4200);
		setTimeout(function(){document.getElementById('boom').style = "display: none"}, 2500);
		setTimeout(function(){document.getElementById(pozycja1).src = 'ogień.gif'}, 4500);
		}
		else
		{
		setTimeout(function(){document.getElementById(pozycja1).src = 'niebo.png'}, 500);
		document.getElementById(pozycja1).disabled='disabled';
		setTimeout(znik_drz1, 1500);
		setTimeout(odblokuj_pyt1, 1500);
		setTimeout(znik_niemiec, 1300); 
		setTimeout(pokaz_madzy, 1300);
		}
	}
	else 
	{
	setTimeout(function(){document.getElementById(pozycja1).src = 'niebo.png'}, 500);
	document.getElementById(pozycja1).disabled='disabled';
	setTimeout(znik_drz1, 2000);
	setTimeout(odblokuj_pyt1, 2000);
	setTimeout(znik_niemiec1, 1300); 
	setTimeout(pokaz_madzy1, 1300);
	}
};