<?php
	$c = mysqli_connect('localhost', 'root', '', 'pytanka1');
	
	$c->query("SET NAMES 'utf8' LATE 'utf8_polish_ci'");
	$c->query("SET CHARSET utf8");
	$z = mysqli_query($c,'SELECT id, Pytanie,OdpA,OdpB,OdpC,Poprawna,PTS FROM dywizja303 ORDER BY RAND() LIMIT 1');

    while($row = mysqli_fetch_array($z))
	{
    $Pyt =  $row['Pytanie'];
	
	$OdpA = $row['OdpA'];

	$OdpB = $row['OdpB'];
	
	$OdpC = $row['OdpC'];
	}	
?>