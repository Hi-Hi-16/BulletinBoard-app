// 投稿を保存するための配列
let posts = [];

// 投稿ボタンがクリックされたときの処理
document.getElementById("posts").addEventListener('click', function() {
    // テキストエリアから投稿内容を取得
    let post = document.getElementById('postTextArea').value;

    // 投稿内容を配列に追加
    posts.push(posts);

    // 配列をJSONに変換
    let jsonPosts = JSON.stringify(posts);

    // JSONをLocalStorageに保存
    localStorage.setItem('posts', jsonPosts);
});

// ページ読み込み時にLocalStorageから投稿を読み込む
window.addEventListener('load', function() {
    // LocalStorageから投稿を取得
    let jsonPosts = localStorage.getItem("posts");

    // JSONを配列に変換
    posts = JSON.parse(jsonPosts);

    // 配列がnull（投稿なし）の場合は空の配列を設定
    if (!posts) {
        posts = [];
    }

    // 投稿を表示
    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i]);
    }
});
