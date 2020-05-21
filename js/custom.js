$(document).ready(function(){
  $('.signlinks a').click(function(){
    $('.signlinks a').removeClass("active1");
    $(this).addClass("active1");
});
 $('a.optionlink').click(function(){
    $('a.optionlink').removeClass("active3");
    $(this).addClass("active3");
});

$(document).on("click",".optionmenu a.oneway", function(){
// $(".datepicker1").prop('disabled', true);
// $(".timepicker1").prop('disabled', true);
$(this).closest(".tab-pane").find(".onewaydate").hide();
});
$(document).on("click",".optionmenu a.round", function(){
// $(".datepicker1").prop('disabled', false);
// $(".timepicker1").prop('disabled', false);
$(this).closest(".tab-pane").find(".onewaydate").show();
	});
	});
$(document).ready(function(){	
 $('#Carouselone').carousel({
  interval: 3000
})
$('#Carouseltwo').carousel({
  interval: 3000
})
$('#Carouselthree').carousel({
  interval: 3000
})
$('#Carouselfour').carousel({
  interval: 3000
})
$('#Carouselfive').carousel({
  interval: 3000
})
$('#Carouselsix').carousel({
  interval: 3000
})
$('#Carouselseven').carousel({
  interval: 3000
})
$('.carousel .carousel-item').each(function(){
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});
});
$(document).ready(function(){
$(".coloblack li a").each(function() {
    if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
        $(this).addClass('activeMenuItem');
    }
});
});
$(document).ready(function () {
$('.children_minus1').click(function (e) {
        e.preventDefault();
        var value = $('.children_input1').val();
        if (value > 0) {
            value--;
        }
        $('.children_input1').val(value);
    });

    $('.children_plus1').click(function (e) {
        e.preventDefault();
        var value = $('.children_input1').val();
        value++;
        $('.children_input1').val(value);
    });

    $('.adult_minus1').click(function (e) {
        e.preventDefault();
        var value = $('.adult_input1').val();
        if (value > 1) {
            value--;
        }
        $('.adult_input1').val(value);
    });

    $('.adult_plus1').click(function (e) {
        e.preventDefault();
        var value = $('.adult_input1').val();
        value++;
        $('.adult_input1').val(value);
    });

    $('.infant_minus1').click(function (e) {
        e.preventDefault();
        var value = $('.infant_input1').val();
        if (value > 0) {
            value--;
        }
        $('.infant_input1').val(value);
    });

    $('.infant_plus1').click(function (e) {
        e.preventDefault();
        var value = $('.infant_input1').val();
        value++;
        $('.infant_input1').val(value);
    });
	$('.luggage_minus1').click(function (e) {
        e.preventDefault();
        var value = $('.luggage_input1').val();
        if (value > 0) {
            value--;
        }
        $('.luggage_input1').val(value);
    });

    $('.luggage_plus1').click(function (e) {
        e.preventDefault();
        var value = $('.luggage_input1').val();
        value++;
        $('.luggage_input1').val(value);
    });

});
$(document).ready(function(){
	$('.datepicker').pickadate({
	format:'d-mm-yyyy',
	});
	$('.timepicker').pickatime({
	 format:'h:i A',
	});
	$('.datepicker1').pickadate({
	format:'d-mm-yyyy',
	});
	$('.timepicker1').pickatime({
	 format:'h:i A',
	});
	$(document).on("click",".pick1",function (e) {
		 e.preventDefault();
		$(this).closest('.input-group').find('input').focus();
	});
	// $('.pick2').click(function (e) {
		 // e.preventDefault();
		// $(this).closest('.input-group').find('input').focus();
	// });
	$(document).on("click",".pick3",function (e) {
		 e.preventDefault();
		$(this).closest('.input-group').find('input').focus();
	});
	// $('.pick4').click(function (e) {
		 // e.preventDefault();
		// $(this).closest('.input-group').find('input').focus();
	// });
	
});