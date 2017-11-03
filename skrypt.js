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
		document.getElementById( 'pytanka').style.display='block';
		};
		
		function znik_pyt() 
		{
		document.getElementById( 'tabelka' ).style.display='none';
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
		document.getElementById('tabelka').disabled='disabled';	
		};
		
		function znik_pytanka() 
		{
		document.getElementById( 'pytanka').style.display='none';
		};
	
	function pytanka()
	{
	document.getElementById('pytanka').style.transform="translateX(592px)";
	};

	function odp1 (pozycja)
	{
		if (pozycja) 
		{
			document.getElementById(pozycja).src = 'juz.jpg';
			document.getElementById(pozycja).disabled='disabled';
			setTimeout(blokuj_pyt(),1000);
			odblokuj_pytanka();
			pytanka();
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
			setTimeout(blokuj_pyt(),1000);
			odblokuj_pytanka();
			pytanka();
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
			setTimeout(blokuj_pyt(),1000);
			odblokuj_pytanka();
			pytanka();
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
			setTimeout(blokuj_pyt(),1000);
			odblokuj_pytanka();
			pytanka();
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
    alert('Dobra odpowiedź otrzymujesz punkt!');
	znik_pytanka();
	odblokuj_drz();
	punkty = punkty + 1;
	document.getElementById("wynik").innerHTML=punkty;
	}

    else
	{
    alert('Kliknąłeś źle');

	znik_pytanka();
	odblokuj_drz();
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
		setTimeout(function(){document.getElementById(pozycja).src = 'anglik.png'}, 1000);
		setTimeout(function(){document.getElementById(pozycja).src = 'samolotz.png'}, 2000);
		setTimeout(function(){document.getElementById(pozycja).src = 'la.png'}, 3000);
		document.getElementById(pozycja).disabled='disabled';
		punkty = punkty + 1;
		document.getElementById("wynik").innerHTML=punkty;
		setTimeout(znik_drz, 5000);
		}
		else
		{
		setTimeout(function(){document.getElementById(pozycja).src = 'niebo.png'}, 1000);
		document.getElementById(pozycja).disabled='disabled';
		setTimeout(znik_drz, 5000);
		}
	}
	else 
	{
	setTimeout(function(){document.getElementById(pozycja).src = 'niebo.png'}, 1000);
	document.getElementById(pozycja).disabled='disabled';
	setTimeout(znik_drz, 5000);
	}
};