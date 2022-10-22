jQuery( function( $ ) {
    $('.c-hambergerbutton').on( "click", function() {
			$( ".c-hambergerbutton__upperbar" ).toggleClass( "is-open" );
			$( ".c-hambergerbutton__middlebar" ).toggleClass( "is-open" );
			$( ".c-hambergerbutton__underbar" ).toggleClass( "is-open" );
			$( ".p-header__mobile" ).toggleClass( "is-open" );
			$( ".l-side" ).toggleClass( "is-open" );
	})



	function fadeAnime(){
		$('.c-fadeTriger').each(function(){ //c-fadeTrigerというクラス名が
			var elemPostion = $(this).offset().top-50; //要素より、50px上の
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll >= elemPostion - windowHeight){
			$(this).addClass('c-fade__in');
			// 画面内に入ったらfadeInというクラス名を追記
			}
			});
	}

	// 画面が読み込まれたらすぐに動かしたい場合の記述
	$(window).ready(function (){
		fadeAnime();
		/* アニメーション用の関数を呼ぶ*/
	});


	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		fadeAnime();
		/* アニメーション用の関数を呼ぶ*/
	});

	
} );