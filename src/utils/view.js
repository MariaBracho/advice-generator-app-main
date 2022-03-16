console.log("bueeeehh")

const render = () => {
    document.getElementById("root").innerHTML = `
    <div class="w-full h-screen bg-Dark_Blue flex justify-center items-center  ">
    
     <div class="text-center relative font-Manrope rounded-xl bg-Dark_Grayish_Blue w-5/6 h-1/2 " >

     <p class="text-Neon_Green text-sm " >ADVICE #177</p>
     <p class="text-Light_Cyan text-3xl"id="quotes"></p>
     
     
     <div class=" h-3 w-40 "> </div>
     
     <div class="w-full absolute -bottom-6 mx-auto  ">
     <button class="h-16 w-16  bg-Neon_Green rounded-full cursor-pointer" id="button">button</button>
     </div>
     
     
     

     
     
     </div>
     </div>
    
    `
}


export default render