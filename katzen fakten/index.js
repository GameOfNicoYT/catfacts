let div_fact;

reload()
async function reload() {
    try{
        let responce = await fetch('https://catfact.ninja/fact')
        let result = await responce.json();
        console.log(result.fact)
        document.getElementById("Fact_fetch").innerHTML = `<h1>${result.fact}</h1>`
    }
    catch(e){
        console.log(`Es wurde ein Fehler erkannt! Fehler: ${e}`)
    }
}

console.log(div_fact)