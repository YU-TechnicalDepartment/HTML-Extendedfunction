// 拡張機能のアイコンをクリックしたときのリスナー
chrome.action.onClicked.addListener((tab) => {
  // 現在アクティブなタブ内で選択されているテキストを取得するため、chrome.scripting.executeScriptでコンテンツスクリプトを実行
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: getSelectedText
  }, (injectionResults) => {
    let selectedText = "";
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    }
    // 結果が返された場合、取得した選択テキストを利用
    if (injectionResults && injectionResults.length > 0) {
      selectedText = injectionResults[0].result;
    }
    // HTMLコードテスターのURL（選択テキストをクエリパラメータとしてエンコード）
    const testerUrl = "https://yu-technicaldepartment.github.io/html.github.io/";
    const finalUrl = testerUrl + "?input=" + encodeURIComponent(selectedText);
    // 新規タブでURLを開く
    chrome.tabs.create({ url: finalUrl });
  });
});

// コンテンツスクリプト内で実行される関数：選択テキストを返す
function getSelectedText() {
  return window.getSelection().toString();
}
