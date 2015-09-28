function sortTable(f,n){
			var rows = $('.table tbody  tr').get();
			rows.sort(function(a, b) {  
			var A = $(a).children('td').eq(n).text().toUpperCase();
			var B = $(b).children('td').eq(n).text().toUpperCase();
			if(A < B) {
			 return -1*f;
			}
			if(A > B) {
			 return 1*f;
			}
			return 0;
			});

		$.each(rows, function(index, row) {
				$('#mytable').children('tbody').append(row);
		});
	}


$(document).ready(function(){		
		var f_sl = 1; // flag to toggle the sorting order
		var f_nm = 1; // flag to toggle the sorting order
		$('.table thead tr th').click(function(){
			f_sl *= -1; // toggle the sorting order
			var n = $(this).prevAll().length;
			sortTable(f_sl,n);
		});
    
    //Filtering based on TextBox
    	$('.table thead tr td input').keyup(function(){	
			var indexColumn = $( '.table thead tr td input').index( this );
      		var data= this.value.trim();
			data = data.replace(/\s\s+/g, ' ');
   			data= data.split(" ");
   
   			var jo = $("#fbody").find("tr").hide();
            jo.filter(function (i, v) {
        		var $t = $(this).children(":eq("+indexColumn+")");
        				for (var d = 0; d < data.length; ++d) {
            				if ($t.text().toLowerCase().indexOf(data[d].toLowerCase()) > -1) {	
    							return true;
							}
        			}
        	return false;
    		}).show();
			});
	});
