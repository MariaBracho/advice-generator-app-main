const API = process.env.API

const urlApi = "https://api.adviceslip.com/advice"

const fetchData = async() => {

    try {
        const apidata = await fetch(urlApi)
        const api = await apidata.json()
        let quotes = api.slip.advice
        document.getElementById("quotes").innerHTML = `${quotes}`

    } catch (e) {
        console.log(e)
    }

}



export default fetchData