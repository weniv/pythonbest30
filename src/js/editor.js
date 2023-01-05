// 옵션 값은 https://codemirror.net/5/doc/manual.html 참고

let editor = CodeMirror.fromTextArea(
  document.getElementById("codeeditor"),
  {
    mode: "python",
    // indentWithTabs: true, // tab으로 인식하게 할 것인지 => false
    smartIndent: true,
    lineNumbers: true,
    matchBrackets: true,
    autofocus: true,
    // extraKeys: { Tab: "autocomplete" }, // hint cdn을 추가하면 자동완성 됨
    indentUnit: 4,
  }
);