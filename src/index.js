import render from '@utils/view.js'
import '@style/tailwind.css'
import '@utils/getData.js'
import fetchData from '@utils/getData.js'


render()
fetchData()

document.getElementById("button").addEventListener("click", () => {
    fetchData()
})