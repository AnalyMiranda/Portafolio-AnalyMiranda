////////////////////////  MODAL  ///////////////////////////////

// Modal Fundación Gema - Puesto de Periodicos
$('#btnAbrirModal1').click(function(){
	$('#myModal1').modal('show')
});

// Modal Primes - Mach 5 
$('#btnAbrirModal2').click(function(){
	$('#myModal2').modal('show')
});

// Modal Dashboard - Reloj Despertador
$('#btnAbrirModal3').click(function(){
	$('#myModal3').modal('show')
});
// Triangle - Mobiliario
$('#btnAbrirModal4').click(function(){
	$('#myModal4').modal('show')
});

// Love Blog - ShowRoom
$('#btnAbrirModal5').click(function(){
	$('#myModal5').modal('show')
});

// Kane Theme - Shell
$('#btnAbrirModal6').click(function(){
	$('#myModal6').modal('show')
});


///////////////    MENU TOGGLE /////////////////////


$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
