const form = document.querySelector("form")
const masc = document.querySelector(".mascara-form")


function mostrarform(){
    form.style.left = "35%"
    form.style.transform ="transleteX(-35%)"
    masc.style.visibility = " visible"
   
}


function escoderform(){
    form.style.left = "-350px"
    form.style.transform ="transleteX(0)"
    masc.style.visibility = " hidden"
   

}


