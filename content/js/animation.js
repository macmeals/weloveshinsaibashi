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

	/* フワッと用アニメーション用の関数を呼ぶ*/
		fadeAnime();

	/* タブ用のアニメーション用の関数を呼ぶ*/
		$('.p-main__orangetab').addClass("active"); //最初のliにactiveクラスを追加
		$('.p-main__contents:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	  var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	  GethashID (hashName);//設定したタブの読み込み
	});


	// 画面をスクロールをしたら動かしたい場合の記述
	$(window).scroll(function (){
		fadeAnime();
		/* アニメーション用の関数を呼ぶ*/
	});

////グルメ、ショッピング、ホテルのタブ変更/////////////////////////////////////////////////////////	

//タブ(aタブ)をクリックしたら
$('.p-main__orangetab a,.p-main__redtab a,.p-main__yellowtab a').on('click', function() {
	var idName = $(this).attr('href');   //タブ内のリンク名を取得	
	GethashID (idName);      //設定したタブの読み込みと
	return false;            //aタグを無効にする
	
});

//タブ(aタブ)をクリックして、タブと、コンテンツにActiveのクラスを付与する
function GethashID (hashIDName){
	if(hashIDName){
		//タブ設定
		$('.p-main__tab li').find('a').each(function() { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#gourmetの値を取得	
			if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				//タブ内のaタグの親要素（li）を取得
				var parentElm = $(this).parent(); 
				$('.p-main__tab li ').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".p-main__contents").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

// $(function(){
//   $("#modal div").click(function() {
//     $("#graydisplay").html($(this).prop('outerHTML'));
//     $("#graydisplay").fadeIn(200);
//   });
//   $("#graydisplay, #graydisplay div").click(function() {
//     $("#graydisplay").fadeOut(200);
//   });
// });

$(function(){
  $(".c-specialfoodgrid,.c-normalfoodgrid").click(function() {
		$('.c-graydisplay').html($(this).prop('outerHTML'));
		$('.c-graydisplay').fadeIn(200);
	
  });
  $('.c-graydisplay,.c-graydisplay img').click(function() {
		$('.c-graydisplay').fadeOut(200);
  });
});



	
} );