let pelaajaMaara = 0
let pelaajat = []
let voittaneet = []
let peliMenossa = false
let pisteTavoite = 0

let vuoro = 0
let vuoroPisteet = 0

let tuplat = 0


document.getElementById("pyorautus1").addEventListener("click", heitto1)
document.getElementById("lopetus1").addEventListener("click", lopetus1)
document.getElementById("pyorautus2").addEventListener("click", heitto2)
document.getElementById("lopetus2").addEventListener("click", lopetus2)

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

function heitto2(event){
    let luku = Math.floor(Math.random() * 6) + 1
    let luku2 = Math.floor(Math.random() * 6) + 1
    document.getElementById("luku2").innerText = "Viimeisin heitto: " + luku + " ja " + luku2
    if(luku == 1 || luku2 == 1){
        if(luku2 == 1 && luku == 1){
            vuoroPisteet = vuoroPisteet + 25
            tuplat = 0
            
        }
        vuoroPisteet = 0
        tuplat = 0
        if(vuoro < pelaajat.length - 1){
            vuoro = vuoro + 1
                
        }else {
            vuoro = 0
        }
              
    }else if(luku == luku2){
        tuplat = tuplat + 1
        vuoroPisteet = vuoroPisteet + 2 * (luku + luku2)
        if (tuplat == 3){
            vuoroPisteet = 0
            tuplat = 0
            if(vuoro < pelaajat.length - 1){
                vuoro = vuoro + 1
            }else {
                vuoro = 0
            } 
            
        }
    }else{
        vuoroPisteet = vuoroPisteet + luku + luku2
        tuplat = 0
    }
    document.getElementById("tuplaMäärä").innerText = "Tuplien Määrä: " + tuplat
    document.getElementById("vuoroPisteet2").innerText = "Lunastettavat pisteet: " + vuoroPisteet
    document.getElementById("kenVuor2").innerText = "Pelaajan " + pelaajat[vuoro][0] + " vuoro"
    event.preventDefault()
}

function lopetus2(event){
    pelaajat[vuoro][1] = pelaajat[vuoro][1] + vuoroPisteet
    vuoroPisteet = 0
    tuplat = 0
    if(vuoro < pelaajat.length - 1){
            vuoro = vuoro + 1
    }else {
        vuoro = 0
    }
    document.getElementById("kenVuor2").innerText = "Pelaajan " + pelaajat[vuoro][0] + " vuoro"
    document.getElementById("vuoroPisteet2").innerText = "Lunastettavat pisteet: " + vuoroPisteet
    document.getElementById("tuplaMäärä").innerText = "Tuplien Määrä: " + tuplat
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

    pisteTavoite = document.getElementById("pisteTavoite").value
    let versio = document.getElementById("versioValinta").value


    if (pisteTavoite == 0 || pisteTavoite.trim() == "") {
    document.getElementById("ilmoitus").innerText = "Aseta pisteTavoite";
    return;
    }
    if (pelaajat.length <= 1) {
        document.getElementById("ilmoitus").innerText = "Ei tarpeeksi pelaajia (2 vaadittu)";
        return;
    }
    if (versio == "1" && peliMenossa == false) {
        document.getElementById("peli1").style.display = "block";
        document.getElementById("kenVuor1").innerText = "Pelaajan " + pelaajat[0][0] + " vuoro";
        peliMenossa = true
    }else if(versio == "2" && peliMenossa == false){
        document.getElementById("peli2").style.display = "block";
        document.getElementById("kenVuor2").innerText = "Pelaajan " + pelaajat[0][0] + " vuoro";
        peliMenossa = true
    }
}

function pelStats(){
    for (let i = 0; i < pelaajat.length; i++){
        if (pelaajat[i][1] >= pisteTavoite){
            peliMenossa = false
            document.getElementById("peli1").style.display = "none";
            document.getElementById("peli2").style.display = "none";
            document.getElementById("ilmoitus").innerText = "pelaaja " + pelaajat[i][0] + " voitti"
            for (let i = 0; i < pelaajat.length; i++){
                pelaajat[i][1] = 0
            }
        }
    }
    for (let i = 0; i < pelaajat.length; i++){
        document.getElementById("pelaaja " + (i + 1)).innerText = "pelaaja " + (i + 1) + ": " + pelaajat[i][0] + " pisteet: " + pelaajat[i][1]
    }

}