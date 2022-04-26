if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

var searchItem = '.search-item';   // 出し分け項目を選択するエリア
var listItem = '.list-item';       // 出し分け対象のアイテム
var hideClass = 'is-hide';         // 出し分け対象外の場合に付与されるclass名
var activeClass = 'is-active';     // 選択中のグループに付与されるclass名

$(function() {
// 出し分けを変更したとき
 $(searchItem).on('click', function() {
    $(searchItem).removeClass(activeClass);
    var group = $(this).addClass(activeClass).data('group');
    search_filter(group);
    search_space(group);
 });
});

/**
* リストから出し分け
* @param {String} group data属性の値
*/
function search_filter(group) { 
    // 非表示状態を解除
    $(listItem).removeClass(hideClass);
    // 値が空の場合はすべて表示
    if(group === '') {
        return;
    }
    // リスト内の各アイテムをチェック
    for (var i = 0; i < $(listItem).length; i++) {
        // アイテムに設定している項目を取得
        var itemData = $(listItem).eq(i).data('group');
        // 対象かどうかを調べる
        // if(itemData !== group) {    // 複数選択に対応するために、この行を以下に変更しました
          if( !(itemData.includes(group))) {
            $(listItem).eq(i).addClass(hideClass);
        }
    }
}

/**
* スペースの調節
* @param {String} group data属性の値
*
* ほんとの各グループのアイテムの数により必要なスペース数が変わるのでそこは確定したら書き換えて
* n = 15 - (N % 15)
* class名はCSSに合わせて直書きです
*/
function search_space(group) {
   if(group == 'serum') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  else if(group == 'cream') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  else if(group == 'foam') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  
  else if(group == 'pore_care') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  else if(group == 'lotion') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  else if(group == 'balm') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  else if(group == 'facemask') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  else if(group == 'facecare') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  else if(group == 'faceoil') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  else if(group == 'other') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  else if(group == 'peeling') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  else if(group == 'cleansing') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  else if(group == 'allinone') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  else if(group == 'uvcut') {
    $('.space-01').css({'display':'block','border':'1px solid white'});
    $('.space-02').css({'display':'block','border':'1px solid white'});
    $('.space-03').css({'display':'block','border':'1px solid white'});
    $('.space-04').css({'display':'block','border':'1px solid white'});
    $('.space-05').css({'display':'block','border':'1px solid white'});
    $('.space-06').css({'display':'block','border':'1px solid white'});
    $('.space-07').css({'display':'block','border':'1px solid white'});
    $('.space-08').css({'display':'block','border':'1px solid white'});
    $('.space-09').css({'display':'block','border':'1px solid white'});
    $('.space-10').css({'display':'block','border':'1px solid white'});
    $('.space-11').css({'display':'block','border':'1px solid white'});
    $('.space-12').css({'display':'block','border':'1px solid white'});
    $('.space-13').css({'display':'block','border':'1px solid white'});
    $('.space-14').css({'display':'block','border':'1px solid white'});
  }
  else {
    $('.space-01').css('display','none');
    $('.space-02').css('display','none');
    $('.space-03').css('display','none');
    $('.space-04').css('display','none');
    $('.space-05').css('display','none');
    $('.space-06').css('display','none');
    $('.space-07').css('display','none');
    $('.space-08').css('display','none');
    $('.space-09').css('display','none');
    $('.space-10').css('display','none');
    $('.space-11').css('display','none');
    $('.space-12').css('display','none');
    $('.space-13').css('display','none');
    $('.space-14').css('display','none');
  }
}