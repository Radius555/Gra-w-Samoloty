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
		document.getElementById( 'pytania' ).style.display='none';
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
	
	function pytanka()
	{
	document.getElementById('pytanka').style.transform="translateX(592px)";
	};

	function odp1 (pozycja)
	{
		if (pozycja) 
		{
			document.getElementById(pozycja).src = 'juz.jpg';
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
	
var positionArray = losuj();
var gnome = 0;

function zmien(pozycja)
{
	if (positionArray[pozycja]) 
	{
		gnome++;
		if(gnome<=20)
		{
		setTimeout(function(){document.getElementById(pozycja).src = 'anglik.png'}, 900);
		setTimeout(function(){document.getElementById(pozycja).src = 'samolotz.png'}, 1800);
		setTimeout(function(){document.getElementById(pozycja).src = 'la.png'}, 2700);
		document.getElementById(pozycja).disabled='disabled';
		setTimeout(znik_drz(),3300);
		setTimeout(odblokuj_pyt(),3300);
		}
		else
		{
		document.getElementById(pozycja).src = 'niebo.png';
		document.getElementById(pozycja).disabled='disabled';
		setTimeout(znik_drz(),1000);
		setTimeout(odblokuj_pyt(),1000);				
		}
	}
	else 
	{
	document.getElementById(pozycja).src = 'niebo.png';
	document.getElementById(pozycja).disabled='disabled';
	setTimeout(znik_drz(),1000);
	setTimeout(odblokuj_pyt(),1000);
	}
};