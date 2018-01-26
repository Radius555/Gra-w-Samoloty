
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	

	
	
	


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
		setTimeout(znik_drz1, 4500); 
		setTimeout(odblokuj_pyt, 4500); 
		setTimeout(znik_niemiec, 4200); 
		setTimeout(pokaz_madzy, 4200);
		setTimeout(function(){document.getElementById('boom').style = "display: none"}, 2500);
		setTimeout(function(){document.getElementById(pozycja1).src = 'ogień.gif'}, 4500);
		}
		else
		{
		setTimeout(function(){document.getElementById(pozycja1).src = 'niebo.png'}, 500);
		document.getElementById(pozycja1).disabled='disabled';
		setTimeout(znik_animacja1, 1500);
		setTimeout(znik_drz1, 1500);
		setTimeout(odblokuj_pyt, 1500);
		setTimeout(znik_niemiec, 1300); 
		setTimeout(pokaz_madzy, 1300);
		}
	}
	else 
	{
	setTimeout(function(){document.getElementById(pozycja1).src = 'niebo.png'}, 500);
	document.getElementById(pozycja1).disabled='disabled';
	setTimeout(znik_animacja1, 1300);
	setTimeout(znik_drz1, 2000);
	setTimeout(odblokuj_pyt, 2000);
	setTimeout(znik_niemiec1, 1300); 
	setTimeout(pokaz_madzy1, 1300);
	}
};