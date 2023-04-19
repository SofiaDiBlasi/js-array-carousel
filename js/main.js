let album = document.getElementById("album");
let bottoneAvanti = document.getElementById("avanti");
let bottoneIndietro = document.getElementById("indietro");
let foto = ["./img/javachedorme.jpg","./img/javanellacasetta.jpg","./img/javaperterracomeunascema.jpg","./img/javapisolino.jpg","./img/lacreazionedi java.jpg"]

for (let index = 0; index < foto.length; index++) {
    let img = document.createElement ("img");
    img.src = foto[index]; 
    if (index == 0) {
        img.className = "d-block foto";
    } else {
        img.className = "d-none foto";
    }  
        album.append(img);
}

let fotoAttuale = 0;
bottoneAvanti.addEventListener("click", function(){
    if(fotoAttuale < foto.length - 1) {
        let currentimg = document.querySelector("[src = \"" + foto[fotoAttuale] + "\"]");
        currentimg.className = "d-none foto";
        fotoAttuale++;
        let nextimg = document.querySelector("[src = \"" + foto[fotoAttuale] + "\"]");
        nextimg.className = "d-block foto";
    } else {
        console.log("non c'è una slide successiva");
    }
});

bottoneIndietro.addEventListener("click", function(){
    if(fotoAttuale > 0) {
        let currentimg = document.querySelector("[src = \"" + foto[fotoAttuale] + "\"]");
        currentimg.className = "d-none foto";
        fotoAttuale--;
        let nextimg = document.querySelector("[src = \"" + foto[fotoAttuale] + "\"]");
        nextimg.className = "d-block foto";
    } else {
        console.log("non c'è una slide precedente");
    }
});
