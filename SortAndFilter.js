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
	
function tableSearchMain(inputs,trs){
	trs.each(function(){
		var tr = $(this);
		var show = inputs.toArray().every(function(input, index)
		{
			var value = $(input).val().toLowerCase();

			if (value === '')
			{
				return true;
			}

			var number = index + 1;
			var td = tr.children('td:nth-child(' + number + ')');
			var text = td.text().toLowerCase();

			return text.indexOf(value) != -1;
		});
		tr[show ? 'show' : 'hide']();
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
    var inputPen = $('tr#searchText td input[type=text]');
		inputPen.keyup(function(){
			var trs = $('table tbody#fbody tr');			
			tableSearchMain(inputPen,trs);
		});
});
