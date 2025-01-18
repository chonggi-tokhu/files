function htmlfunc(str) {
    var string = new String(str);
    return string.replaceAll(`&quot;`, `"`).replaceAll(`&apos;`, `'`)./*replaceAll(`&lt;`, `<`).replaceAll(`&gt;`, `>`).replaceAll(`&gt;`, `>`)*/.replaceAll(`[br]`, `\n`);
}
function getCaretCharacterOffsetWithin(element) {
    var caretOffset = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;
    if (typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            var range = win.getSelection().getRangeAt(0);
            var preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        }
    } else if ((sel = doc.selection) && sel.type != "Control") {
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
}
document.getElementById("content").addEventListener("input", function (ev) {
    document.getElementById("hiddeninput").value = htmlfunc(document.getElementById("content").innerText);
    if (document.getElementById("content").innerText == "") {
        document.getElementById("content").classList.add("withplaceholder");
    } else {
        document.getElementById("content").classList.remove("withplaceholder");
    }
    /*if (ev.keyCode == '13') {
        for (var i = 0; i < document.getElementById("content").innerText.length; i++) {
            if (i == getCaretCharacterOffsetWithin(document.getElementById("content"))) {
                document.getElementById("content").innerText = document.getElementById("content").innerText.insertOn(`\n`, i);
                document.getElementById("hiddeninput").value = document.getElementById("content").innerText;
            }
        }
    }*/
});

window.addEventListener("load", function (ev) {
    document.getElementById("hiddeninput").value = htmlfunc(document.getElementById("content").innerText);
    if (document.getElementById("content").innerText == "") {
        document.getElementById("content").classList.add("withplaceholder");
    } else {
        document.getElementById("content").classList.remove("withplaceholder");
    } document.getElementById('content').innerHTML = document.getElementById('content').innerHTML.replaceAll(`\\n`, `</div><div>`);
});

document.getElementById("adding_style_trigger").addEventListener("click", function (ev) {
    document.getElementById("content").innerText = (`<style></style>`) + document.getElementById("content").innerText;
});

document.getElementById("inserting_js_trigger").addEventListener("click", function (ev) {
    document.getElementById("content").innerText += (`wikimake(type=틀 - name=script_on_doc(params=(message=틀 자동삽입됨))); <!--위 틀 삭제는 해도 되지만, 스크립트가 포함된 틀은 트롤링 혹은 자동 낚시사이트 연결 등 보안 문제와 장난에 의한 훼손을 방지하기 위해,자동으로 재삽입됩니다.--> <script></script>`)
});
