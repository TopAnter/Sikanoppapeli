let vuoro1 = false

document.getElementById("pyorautus1").addEventListener("click", painallus)

function painallus(event){
    let luku1 = Math.floor(Math.random() * 6) + 1;
    if(vuoro1 == false){
        document.getElementById("kenVuor1").innerText = "Pelaaja 2 Vuoro"
        vuoro1 = true
        event.preventDefault()
        return
    }
    if(vuoro1 == true){
        document.getElementById("kenVuor1").innerText = "Pelaaja 2 Vuoro"
        event.preventDefault()
        vuoro1 = false
        return
    }
}
