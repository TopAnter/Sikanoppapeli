let pelaajaMaara = 0
let pelaajat = []

document.getElementById("pyorautus1").addEventListener("click", heitto)
document.getElementById("lisaaPelaaja").addEventListener("click", pelLisays)
document.getElementById("aloitusForm").addEventListener("submit", aloitaPeli)


function heitto(event){
    event.preventDefault()
}

function pelLisays(event){
    event.preventDefault()
    if(document.getElementById("pelaajaNimi").value.length != 0){
        pelaajat.push(0)
        let uusiP = document.createElement("p")
        uusiP.textContent = "pelaaja " + (pelaajaMaara + 1) + ": " + document.getElementById("pelaajaNimi").value + " pisteet: " + pelaajat[pelaajaMaara]
        uusiP.id = (pelaajaMaara + 1)
        document.getElementById("pelaajaLista").append(uusiP)
        pelaajaMaara = pelaajaMaara + 1
    }
}

function aloitaPeli(event){
    event.preventDefault()

    let pisteTavoite = document.getElementById("pisteTavoite").value
    let versio = document.getElementById("versioValinta").value

    if(pelaajat.length > 1){
        if(versio == 1){
            document.getElementById("peli1").style.display = "block"
        }
    }else if(pisteTavoite == 0 || pisteTavoite.trim() == ""){
        document.getElementById("ilmoitus").innerText = "Aseta pisteTavoite"
    }else if(pelaajat.length <= 1){
        document.getElementById("ilmoitus").innerText = "Ei tarpeeksi pelaajia (2 vaadittu)"
    }
}