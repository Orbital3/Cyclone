const c = function () {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) n(e);
    new MutationObserver(e => {
        for (const t of e)
            if (t.type === "childList")
                for (const l of t.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && n(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function s(e) {
        const t = {};
        return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy), e.crossorigin === "use-credentials" ? t.credentials = "include" : e.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t
    }

    function n(e) {
        if (e.ep) return;
        e.ep = !0;
        const t = s(e);
        fetch(e.href, t)
    }
};
c();
document.querySelector(".dot.yellow");
let i = document.querySelectorAll(".dot");
for (let o = 0; o < i.length; o++) setTimeout(function () {
    i[o].classList.add("yellow"), setTimeout(() => {
        i[o].classList.remove("yellow")
    }, 250)
}, o * 250);