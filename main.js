let pelaajaMaara = 0
let pelaajat = []

document.getElementById("pyorautus1").addEventListener("click", heitto)
document.getElementById("lisaaPelaaja").addEventListener("click", pelLisays)
document.getElementById("aloitusForm").addEventListener("submit", aloitaPeli)

function heitto(event){
    event.preventDefault()
}

function pelLisays(event){
    pelaajat.push(0)
    let uusiP = document.createElement("p")
    uusiP.textContent = "pelaaja " + (pelaajaMaara + 1) + ": " + document.getElementById("pelaajaNimi").value + " pisteet: " + pelaajat[pelaajaMaara]
    uusiP.id = (pelaajaMaara + 1)
    document.getElementById("pelaajaLista").append(uusiP)
    pelaajaMaara = pelaajaMaara + 1
    event.preventDefault()
}

function aloitaPeli(event){
    if(pelaajat.length() > 1){
        if(document.getElementById("versioValinta").value = 1){
            document.getElementById("peli1").style.display = "block"
        }
    }else{
        document.getElementById("ilmoitus").innerText = "Ei tarpeeksi pelaajia (2 vaadittu)"
    }
    event.preventDefault()
}