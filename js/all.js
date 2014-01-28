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

$(document).on('ready',function(){

	
	//Guardo en el array el width de cada box 
	var arreglo = [];
	$('.father div').each(function(){
    	arreglo.push($(this).attr('style').replace('width:',''));
	});

	// Reseteo width
	$('.box').css('width','0');
	
	$(window).scroll(function(){

		var position=$(window).scrollTop();
		//console.log(position);

		var algo =$('.box').scrollTop();
		//console.log(algo);

		if(position>position){	

			var i=0;
			var l = arreglo.length;

			//Recorro el array
			for(i=0;i<l;i++){
				$('.box').eq(i).css('width',arreglo[i]);
			}			

		}//Fin if

	});//Fin scroll

});//Fin ready

