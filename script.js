$(function() {
  // header.html と footer.html の読み込みが完了した後に script.js を実行
  $("header").load("header.html", function() {
    $("footer").load("footer.html", function() {
      // もともとのscript.jsの内容を個々に記述する
      const nav = document.querySelector("#header");
      const btn = document.querySelector(".toggle-btn");
      const mask = document.querySelector("#mask");

      btn.onclick = () => {
        nav.classList.toggle("open");
      }
      mask.onclick = () => {
        nav.classList.toggle("open");
      }
    });
  });
});

// HTMLが読み込み完了したら処理
$(function() {
  // 現在のページのパス名を取得
  let currentPage = location.pathname;

  // ページネーションのリンクをチェック
  $("#pagination a").each(function() {
    // 指定した要素の属性値を取得
    let linkHref = $(this).attr("href");

    if (currentPage.includes(linkHref)) {
      $(this).addClass("active");
      $(this).css("pointer-events", "none");
      $(this).css("cursor", "text");
    }
  });
});

$(function() {
  // URLSearchParamsオブジェクト（インスタンス）を生成
  const urlParams = new URLSearchParams(window.location.search);
  // urlParamsのgetメソッドで、URLクエリ情報からidパラメータ（文字列）を取得し代入
  const itemId = urlParams.get("id");
  
  if (itemId) {
    $(".item-img img")
      .attr("src", `images/item${itemId}.jpg`)
      .show();
  }
});