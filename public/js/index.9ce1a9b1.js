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

let o = 0;

function timedOut(){
    i[o].classList.remove("yellow");
    o++;
    if ( o >= i.length ) o=0;
    i[o].classList.add("yellow")
   
    setTimeout( timedOut , 100);
} 

timedOut();



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

// RÉCEPTION DES MESSAGES
ws.onmessage = function (event) {
	// DIVER LE MESSAGE ASCII REÇU DANS LE TABLEAU messageArray
	// SELON LES ESPACES (' ') ENTRE LES MOTS
	let messageArray = event.data.split(' ');
	
	// messageArray[0] -> LE PREMIER MOT ASCII
	// messageArray[1] -> LE DEUXIÈME MOT ASCII

	if ( messageArray[0] == "/pot" ) { // SI LE PREMIER MOT EST ÉGAL À "/pot" 
		// parseInt(messageArray[1]); -> TRANSFORMER LE DEUXIÈME MOT ASCII EN ENTIER
		let value = parseInt(messageArray[1]);
		let logo = document.getElementById("logo");
		logo.style.transform = "rotate("+ (value ) +"deg)"

	} else if ( messageArray[0] == "/bouton" ) { // SI LE PREMIER MOT EST ÉGAL À "/bouton" 
	     // parseInt(messageArray[1]); -> TRANSFORMER LE DEUXIÈME MOT ASCII EN ENTIER
		backgroundToggle = parseInt(messageArray[1]);
		let luminance = backgroundToggle * 255;
		document.body.style.backgroundColor = 'rgb(' + luminance + ',' + luminance + ',' + luminance + ')';
	}
};

let logo = document.getElementById("logo");
logo.onmousedown = () =>  {
	console.log("Logo was clicked!");
	ws.send("/logo 1");
}
logo.onmouseup= () =>  {
	ws.send("/logo 0");
}
