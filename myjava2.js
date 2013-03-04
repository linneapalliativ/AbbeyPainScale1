function clearform() {

		
		$(".questions").each(function()
		{
			$(this).attr('checked', false).checkboxradio("refresh");
			document.getElementById("problemlistq").innerHTML = "";
				document.getElementById("headmessage").innerHTML="";
				document.getElementById("contentmessage").innerHTML="";
		});
		window.location = "#page";
}

$(function () {

$('#validate').click(function () {
	
	if ($('input[type=radio]:checked').length == 9)
	{
		sum = 0;
			$("input[type=radio]:checked").each(function() 
			{
 				sum += parseInt($(this).val()); 
			});
			array2 = ['<strong>Röst:</strong>', '<strong>Läppar:</strong>', '<strong>Mun- <br/>slemhinnor:</strong>', '<strong>Tunga:</strong>', '<strong>Tandkött:</strong>', '<strong>Tänder:</strong>', '<strong>Protes:</strong>', '<strong>Saliv:</strong>', '<strong>Sväljning:</strong>']; 
var arr1 = $("input:radio:checked + label").map(function(a, i) {
							return '<tr><td>' + array2[a] + '</td><td>' + $(this).text() + '</td><td>' + $(this).siblings('input:radio:checked').val() + '</td></tr>';
                                        }).get().join('');	

			if (sum == 9)
			{
				$( "#btnSave" ).parent( ".ui-btn" ).show();
				$('#txtName').show();
				document.getElementById("headmessage").innerHTML="Validering";
				document.getElementById("contentmessage").innerHTML="<h2>Ingen ohälsa i munnen.</h2>Sammanfattning";
				document.getElementById("problemlistq").innerHTML =arr1 + "<br/ ><h3>Summa: "+ sum+ " av 27</h3>";
				window.location = "#page";
			}
			if (sum > 9)
			{
				$( "#btnSave" ).parent( ".ui-btn" ).show();
				$('#txtName').show();
				document.getElementById("problemlistq").innerHTML = arr1 + "<br/ ><h3>Summa: "+ sum+ " av 27</h3>";
				document.getElementById("headmessage").innerHTML="Validering";
				document.getElementById("contentmessage").innerHTML="<h2>Risk för ohälsa i munnen.</h2>Sammanfattning";
				window.location = "#page11";	
			}
	}
	else
	{
				$( "#btnSave" ).parent( ".ui-btn" ).hide();
				$('#txtName').hide();
				document.getElementById("headmessage").innerHTML="Validering";
				document.getElementById("contentmessage").innerHTML="Du måste besvara alla frågor för att kunna validera.";
				
	}

});

});
