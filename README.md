# 概要
このリポジトリは、ブラウザ拡張機能として動作するツールです。選択したHTMLを、アイコンをクリックするとコードテストができます。

# コードについて
- **背景スクリプト (`background.js`)**: 拡張機能のバックグラウンド処理を担当
- **マニフェスト (`manifest.json`)**: 拡張機能の設定情報を管理
- **拡張機能アイコン (`icon32.png`)**: 拡張機能の表示アイコン

# 追加方法
1. このリポジトリをクローンします。

   ```sh
   git clone https://github.com/YU-TechnicalDepartment/HTML-Extendedfunction.git
   ```
2. **Google Chrome の拡張機能ページ** (`chrome://extensions/`) を開きます。
3. **「デベロッパーモード」** を有効にします。
4. **「パッケージ化されていない拡張機能を読み込む」** をクリックし、クローンしたフォルダを選択します。
5. 拡張機能が正しく読み込まれると、ブラウザの拡張機能リストに表示されます。(ピン留めすると便利です。)
6. 必要に応じて `manifest.json` や `background.js` を編集し、機能をカスタマイズできます。
7. 変更を適用する場合は、拡張機能ページで **「拡張機能を再読み込み」** をクリックしてください。
# 使用方法
HTMLを選択した状態で、拡張機能のアイコンをクリックするとHTMLのコードテストができます。
# ブックマーク版
1. このページをブックマークに追加します。
2. 以下コードをコピーします。
```
javascript:(function(){
  var selectedText = window.getSelection().toString();
  if (selectedText) {
    window.location.href = "https://yu-technicaldepartment.github.io/html.github.io/?input=" + encodeURIComponent(selectedText);
  } else {
    alert("HTMLコードを選択してください。");
  }
})();
```
3. さっき作ったブックマークを編集します。URLは、コピーしたものを入力し、保存します。
4. HTMLを選択した状態で、作ったブックマークをクリックして使用できます。
5. この方法は、モバイルでも使用できます。
