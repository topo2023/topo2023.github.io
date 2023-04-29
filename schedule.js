
function TopoScheduleClick(lec,day) {

        /* we first see if the associated <td> is already open */
        var td = document.getElementById('topo-schedule-td-lec'+lec);
        var tdIsOpen = ( !td.classList.contains('topo-td-hidden') );
        
        /* second, we check if the appropiate <div> is already open */
        var divDay = document.getElementById('topo-schedule-div-lec'+lec+'-day'+day);
        var divDayIsOpen = ( !divDay.classList.contains('topo-div-day-hidden') );
        
        if (!tdIsOpen) {
                /* Close all topo-schedule-td */
	        var tdsNotDay = document.getElementsByClassName('topo-schedule-td');
            	for (i = 0; i < tdsNotDay.length; i++) {
            	        if (!tdsNotDay[i].classList.contains('topo-td-hidden')) {
            	                tdsNotDay[i].classList.add('topo-td-hidden');
            	        }
            	}
            	/* Close all divs */
	        var divsNotDay = document.getElementsByClassName('topo-description');
            	for (i = 0; i < divsNotDay.length; i++) {
            	        if (!divsNotDay[i].classList.contains('topo-div-day-hidden')) {
            	                divsNotDay[i].classList.add('topo-div-day-hidden');
            	        }
            	}
                /* we simply open the lecture */
                divDay.classList.remove('topo-div-day-hidden');
                td.classList.remove('topo-td-hidden');
        } else if (divDayIsOpen) {
                /* now the row is open, but also the same day, so we want to close the row */
                divDay.classList.add('topo-div-day-hidden');
                td.classList.add('topo-td-hidden');
        } else {
                /**/
	        var divsNotDay = document.getElementsByClassName('topo-description');
            	for (i = 0; i < divsNotDay.length; i++) {
            	        if (!divsNotDay[i].classList.contains('topo-div-day-hidden')) {
            	                divsNotDay[i].classList.add('topo-div-day-hidden');
            	        }
            	}
                /* the row is open but other div day, then hide the description and show the new day */
                divDay.classList.remove('topo-div-day-hidden');
        }
}
