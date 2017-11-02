function losujczarni() 
{
	var items1 = [];

	for(var i = 0; i < 64; i++) 
	{
		items1[i] = Math.round(Math.random());
	}

  return items1;
};
var positionArray1 = losujczarni();

function zmien1(pozycja1)
{
	if (positionArray[pozycja]) 
	{
		var x = document.getElementById(pozycja);
		setTimeout(function(){x.background = 'niemiec.png'}, 1000);
		setTimeout(function(){x.background = 'samolotz.png'}, 2000);
		setTimeout(function(){x.src = 'la.png'}, 3000);
		
	}	 
	else 
	{
		document.getElementById(pozycja).src = 'niebo.png';
	}
};

	
	function odpc1 (pozycja)
	{
		if (pozycja) 
		{
			document.getElementById(pozycja).src = 'juz.jpg';
		}
		else
		{
			alert ('Błąd!');
		}		
	};
	function odpc2 (pozycja)
	{
		if (pozycja) 
		{
			document.getElementById(pozycja).src = 'juz.jpg';
		}
		else
		{
			alert ('Błąd!');
		}		
	};
	function odpc3 (pozycja)
	{
		if (pozycja) 
		{
			document.getElementById(pozycja).src = 'juz.jpg';
		}
		else
		{
			alert ('Błąd!');
		}		
	};
	function odpc4 (pozycja)
	{
		if (pozycja) 
		{
			document.getElementById(pozycja).src = 'juz.jpg';
		}
		else
		{
			alert ('Błąd!');
		}		
	};
	