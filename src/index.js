import render from '@utils/view.js'
import '../src/css/tailwind.css'
import '@utils/getData.js'
import fetchData from '../src/utils/getData.js'




render()

document.getElementById("button").addEventListener("click", () => {
    fetchData()
})