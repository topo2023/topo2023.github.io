
	const options = { timeZone: 'Europe/Madrid' };
	let date = new Date().toLocaleDateString('es-ES', options);
	//
	if (date === '12/4/2023') {
	  var elementosHoy = document.getElementsByClassName('topo-day1');
	  console.log(elementosHoy.length)
	  for(var i = 0; i < elementosHoy.length; i++)
	   elementosHoy.item(i).className += " topo-today";
	}
	else if (date === '13/4/2023') {
	  var elementosHoy = document.getElementsByClassName('topo-day2');
	  console.log(elementosHoy.length)
	  for(var i = 0; i < elementosHoy.length; i++)
	   elementosHoy.item(i).className += " topo-today";
	}
	else if (date === '14/4/2023') {
	  var elementosHoy = document.getElementsByClassName('topo-day3');
	  console.log(elementosHoy.length)
	  for(var i = 0; i < elementosHoy.length; i++)
	   elementosHoy.item(i).className += " topo-today";
	}
	else if (date === '15/4/2023') {
	  var elementosHoy = document.getElementsByClassName('topo-day4');
	  console.log(elementosHoy.length)
	  for(var i = 0; i < elementosHoy.length; i++)
	   elementosHoy.item(i).className += " topo-today";
	}
	else if (date === '16/4/2023') {
	  var elementosHoy = document.getElementsByClassName('topo-day5');
	  console.log(elementosHoy.length)
	  for(var i = 0; i < elementosHoy.length; i++)
	   elementosHoy.item(i).className += " topo-today";
	}
