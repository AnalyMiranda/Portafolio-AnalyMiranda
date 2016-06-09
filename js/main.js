////////////////////////  MODAL  ///////////////////////////////

// Modal Fundación Gema
$('#btnAbrirModal1').click(function(){
	$('#myModal1').modal('show')
});

// Modal Primes
$('#btnAbrirModal2').click(function(){
	$('#myModal2').modal('show')
});

// Modal Dashboard
$('#btnAbrirModal3').click(function(){
	$('#myModal3').modal('show')
});
// Triangle
$('#btnAbrirModal4').click(function(){
	$('#myModal4').modal('show')
});

// Love Blog
$('#btnAbrirModal5').click(function(){
	$('#myModal5').modal('show')
});

// Kane Theme
$('#btnAbrirModal6').click(function(){
	$('#myModal6').modal('show')
});


///////////////    MENU TOGGLE /////////////////////


$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
