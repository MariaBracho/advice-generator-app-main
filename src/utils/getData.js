import {loader} from "../utils/view.js"
import {loaderHide} from "../utils/view.js"

const API = process.env.API

const urlApi = "https://api.adviceslip.com/advice"

const fetchData = async() => {

    try {
         loader()
        const apidata = await fetch(urlApi, {cache:"no-store"})
        const api = await apidata.json()
        let quotes = api.slip.advice
        let adviceNumber=api.slip.id
        document.getElementById("quotes").innerHTML = `${quotes}`
        document.getElementById("adviceNumber").innerHTML=`ADVICE #${adviceNumber}`
        console.log(quotes)
        console.log(adviceNumber)
    } catch (e) {
        console.log(e)
    } finally {
       loaderHide()
    }

}



export default fetchData