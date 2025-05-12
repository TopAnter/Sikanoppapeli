let pelaajaMaara = 0
let pelaajat = []
let voittaneet = []
let peliMenossa = false
let vuoro = 0
let vuoroPisteet = 0

document.getElementById("pyorautus1").addEventListener("click", heitto1)
document.getElementById("lopetus1").addEventListener("click", lopetus1)
document.getElementById("lisaaPelaaja").addEventListener("click", pelLisays)
document.getElementById("aloitusForm").addEventListener("submit", aloitaPeli)


function heitto1(event){
    let luku = Math.floor(Math.random() * 6) + 1
    document.getElementById("luku1").innerText = "Viimeisin heitto: " + luku
    if(luku == 1){
        vuoroPisteet = 0
        if(vuoro < pelaajat.length - 1){
            vuoro = vuoro + 1
        }else {
            vuoro = 0
        }
        document.getElementById("kenVuor1").innerText = "Pelaajan " + pelaajat[vuoro][0] + " vuoro"
        document.getElementById("vuoroPisteet").innerText = "Lunastettavat pisteet: " + vuoroPisteet
    }else{
        vuoroPisteet = vuoroPisteet + luku
        document.getElementById("vuoroPisteet").innerText = "Lunastettavat pisteet: " + vuoroPisteet
    }
    event.preventDefault()
}

function lopetus1(event){
    pelaajat[vuoro][1] = pelaajat[vuoro][1] + vuoroPisteet
    vuoroPisteet = 0
    if(vuoro < pelaajat.length - 1){
            vuoro = vuoro + 1
    }else {
        vuoro = 0
    }
    
    document.getElementById("kenVuor1").innerText = "Pelaajan " + pelaajat[vuoro][0] + " vuoro"
    document.getElementById("vuoroPisteet").innerText = "Lunastettavat pisteet: " + vuoroPisteet
    pelStats()
    event.preventDefault()
}

function pelLisays(event){
    event.preventDefault()
    if(document.getElementById("pelaajaNimi").value.length != 0){
        pelaajat.push([document.getElementById("pelaajaNimi").value, 0])
        let uusiP = document.createElement("p")
        uusiP.textContent = "pelaaja " + (pelaajaMaara + 1) + ": " + document.getElementById("pelaajaNimi").value + " pisteet: 0"
        uusiP.id = "pelaaja " + (pelaajaMaara + 1)
        document.getElementById("pelaajaLista").append(uusiP)
        pelaajaMaara = pelaajaMaara + 1
    }
}

function aloitaPeli(event){
    event.preventDefault()

    let pisteTavoite = document.getElementById("pisteTavoite").value
    let versio = document.getElementById("versioValinta").value


    if (pisteTavoite == 0 || pisteTavoite.trim() == "") {
    document.getElementById("ilmoitus").innerText = "Aseta pisteTavoite";
    return;
    }
    if (pelaajat.length <= 1) {
        document.getElementById("ilmoitus").innerText = "Ei tarpeeksi pelaajia (2 vaadittu)";
        return;
    }
    if (versio == "1") {
        document.getElementById("peli1").style.display = "block";
        document.getElementById("kenVuor1").innerText = "Pelaajan " + pelaajat[0][0] + " vuoro";
    }
}

function pelStats(){
    for (let i = 0; i < pelaajat.length; i++){
        document.getElementById("pelaaja " + (i + 1)).innerText = "pelaaja " + (i + 1) + ": " + pelaajat[i][0] + " pisteet: " + pelaajat[i][1]
    }

}