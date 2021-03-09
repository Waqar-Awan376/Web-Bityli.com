$(document).ready(function(){

  /**
   * Pricing Table
   */
	var monthly_price_table = $('#price-tables').find('.monthly');
	var yearly_price_table = $('#price-tables').find('.yearly');

	$('.switch-toggles').find('.monthly').addClass('active');
	$('#price-tables').find('.monthly').addClass('active');

	$('.switch-toggles').find('.monthly').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').removeClass('active');
		$(this).siblings().removeClass('active');
		monthly_price_table.addClass('active');
		yearly_price_table.removeClass('active');
	});

	$('.switch-toggles').find('.yearly').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').addClass('active');
		$(this).siblings().removeClass('active');
		yearly_price_table.addClass('active');
		monthly_price_table.removeClass('active');			
	});

});
