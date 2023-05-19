// event pada saat diklik
$('.page-scroll').on('click', function(){

	// ambil isi href
	var tujuan = $ (this).attr('href')
	//console.log(href)

	//Tangkap Elemen ybs
	var elementujuan = $(tujuan);
	console.log(elementujuan)

	//pindahkan scrol
	#$('body').animate({
		scrollTop:elementujuan.offset().top -50;
	}, 1250, 'swing')
//jquery easing

	
});