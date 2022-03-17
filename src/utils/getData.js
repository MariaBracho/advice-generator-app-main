const API = process.env.API

const urlApi = "https://api.adviceslip.com/advice"

const fetchData = async() => {

    try {
        const apidata = await fetch(urlApi)
        const api = await apidata.json()
        let quotes = api.slip.advice
        document.getElementById("quotes").innerHTML = `${quotes}`
        console.log(quotes, "apiiiiii")



    } catch (e) {
        console.log(e)
    }

    console.log(quotes, "frases")

}



export default fetchData