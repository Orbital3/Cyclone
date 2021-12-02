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



// ÉTABLIR UNE CONNEXION WEBSOCKET
let ws = new WebSocket("ws://localhost:7474");

// AFFICHER UN MESSAGE LORS DE LA CONNEXION
ws.onopen = function (event) {
	console.log("Connexion is open!");
};

// FERMER LA CONNEXION
window.onbeforeunload = function(){
  ws.close();
};

let value2Previous = 0;
let value3Previous = 0;
let value3LeftPrevious = 0;
let value3RightPrevious = 0;

let corps=document.body;
let tempColor = '';
// RÉCEPTION DES MESSAGES
ws.onmessage = function (event) {
	let messageArray = event.data.split(' ');
	
	// messageArray[0] -> LE PREMIER MOT ASCII
	// messageArray[1] -> LE DEUXIÈME MOT ASCII

	if ( messageArray[0] == "/poi" ) {
        let value = parseInt(messageArray[1]);
		let point = document.getElementById("pointage");
        point.innerHTML=value;
        corps.style.background = 'linear-gradient(to top right, #19ed15, #1aed59)';
        setTimeout(()=> {
            corps.style.background = 'linear-gradient(to right, #0083B0, #00B4DB)';
        }, 1750)        

	} else if ( messageArray[0] == "/pos" ) {
		let value2 = (parseInt(messageArray[1])) - 1;
        let i = document.querySelectorAll(".dot");
        i[value2Previous].classList.remove("red");
        i[value2].classList.add("red")
        value2Previous = value2;

	} else if (messageArray[0] == "/posRandom") {
        let value3 = parseInt(messageArray[1]);
        let value3Left = value3 -1;
        let value3Right = value3 + 1;
        let i = document.querySelectorAll(".dot");
        let points = document.getElementById("pointage");

        i[value3Previous].classList.remove("green-dark");
        i[value3LeftPrevious].classList.remove('yellow');
        i[value3RightPrevious].classList.remove('yellow');
        i[value3].classList.add('green-dark');
        if(points.innerText < 2) {
            i[value3Left].classList.add('yellow');
            i[value3Right].classList.add('yellow');
        }

        value3Previous = value3;
        value3LeftPrevious = value3Left;
        value3RightPrevious = value3Right;
    }
};