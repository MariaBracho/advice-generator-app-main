import mobile from '@images/pattern-divider-mobile.svg'
import desktop from '@images/pattern-divider-desktop.svg'
import iconDice from '@images/icon-dice.svg'


const isMobile = screen.width == 360

const render = () => {
    document.getElementById("root").innerHTML = `
    <div id="loader">
    </div>
    
    </div>
    <div class="w-full h-screen bg-Dark_Blue flex justify-center items-center relative z-10 ">
    
     <div class="text-center  relative font-Manrope rounded-xl bg-Dark_Grayish_Blue w-11/12 h-auto max-w-xl" >
     
     <div class="w-full h-full py-10 px-8 ">

    
     <p class="text-Neon_Green text-sm inline-block h-5 tracking-widest" id="adviceNumber"></p>
     
     <p class="text-Light_Cyan my-auto text-2xl flex justify-center items-center h-60 "id="quotes"></p>

     <img class="mb-7 mx-auto " src="${isMobile? mobile:desktop}">


     </div>

     <div class="w-full absolute -bottom-6 mx-auto  ">
     <button class="h-16 w-16  bg-Neon_Green rounded-full border-none outline-none cursor-pointer hover:drop-shadow-3xl " id="button"><img class="mx-auto" src="${iconDice}"></button>
     </div>
     

     </div>
     </div>
    
    `
}

export const loader=()=>{
    document.getElementById("loader").innerHTML=`
    <div class="h-screen w-full bg-Dark_Blue z-20 absolute opacity-75 grid place-content-center" >
    <div class=" h-9 w-9 rounded-full border-l-2 border-solid border-x-Neon_Green animate-spin"></div>
    `
}

export const loaderHide=()=>{
    document.getElementById("loader").innerHTML=``
}



export default render