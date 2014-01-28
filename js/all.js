/*
//En  pixeles
$(document).on('ready',function(){


	//Guardo en el array el width de cada box
	var arreglo = [];
	$('.father div').each(function(){
    	arreglo.push($(this).width());

	});

    console.log(arreglo);

	$('.box').css('width','0');

	$(window).scroll(function(){
		if($('.box').scrollTop>$('.box')){

			//Variables
			var i=0;
			var l = arreglo.length;

			//Recorro el array
			for(i=0;i<l;i++){
				$('.box').eq(i).css('width',(arreglo[i]+'px'));
			}
				console.log(arreglo[i]+'px');

		}
	});
});
*/

var cargado=false;
$(document).on('ready',function(){
//console.log('width:20%;width:40%'.replace(/width\:(.*)\%/g,'$1'));

	//Guardo en el array el width de cada box
	var arreglo = [];
	$('.box').each(function(){
    	arreglo.push($(this).attr('style').replace('width:',''));
	});

	// Reseteo width
	$('.box').removeAttr('style');

	setTimeout(function(){
		$('.box').css({'transition':'width 3s ease-in-out'});
		$(window).trigger('scroll');
	},500);


	$(window).scroll(function(){

		var position=$(window).scrollTop();
		//console.log(position);

		var algo =$('.box').offset().top-$(window).height()/2;
		//console.log(algo);

		if((position>=algo || $(window).height()>algo) && !cargado){
			cargado=true;
			console.log('ejecutado');
			var i=0;
			var l = arreglo.length;

			//Recorro el array
			for(i=0;i<l;i++){
				$('.box').eq(i).css('width',arreglo[i]);
			}

		}//Fin if

	});//Fin scroll

});//Fin ready

