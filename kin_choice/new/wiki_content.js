var hEls = document.querySelectorAll(`wiki-content div>h1,wiki-content div>h2,wiki-content div>h3,wiki-content div>h4`);
hEls.forEach(function (valEl, key, par) {
    var foldingElpr = document.createElement("div");
    foldingElpr.innerHTML = `&gt;`;
    foldingElpr.setAttribute("class", "fold_para");
    valEl.parentElement.innerHTML = foldingElpr.outerHTML + valEl.parentElement.innerHTML;
    var foldingEl = valEl.parentElement.getElementsByClassName("fold_para")[0];
    foldingEl.addEventListener("click", function (ev) {
        if (foldingEl.parentElement.querySelectorAll(`div.para_content`)[0] != null) {
            if (foldingEl.parentElement.querySelectorAll(`div.para_content`)[0].classList.contains("hidden_paragraph")) {
                foldingEl.parentElement.querySelectorAll(`div.para_content`)[0].classList.remove("hidden_paragraph");
            } else {
                foldingEl.parentElement.querySelectorAll(`div.para_content`)[0].classList.add("hidden_paragraph");
            }
        }
    });
});
