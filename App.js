const passBox = document.getElementById('passBox');
const lowercase=document.getElementById('lowercase');
const uppercase=document.getElementById('uppercase');
const Numbers=document.getElementById('Numbers');
const symbols=document.getElementById('symbols');
const genBtn=document.getElementById('genBtn');
const sliderValue=document.getElementById('sliderValue');
const inputSlider=document.getElementById('inputSlider');
//showing input slider value
sliderValue.textContent=inputSlider.ariaValueMax;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.ariaValueMax;
});
genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
});


let lowerchars="abcdefghijklmnopqurstuvwxyz";
let upperchars="ABCDEFGHIJKLMNOPQURSTUVWXYZ";
let numbers="0123456789";
let symbol="~!@#$%^&*][}{?/";

//function to generate password
function generatePassword(){
    let genPassword="";
   let allChars="";
   let length=12;
   allChars += lowercase.checked?lowerchars:"";
   allChars += uppercase.checked?upperchars:"";
   allChars += Numbers.checked?numbers:"";
   allChars += symbols.checked?symbol:"";
   if(allChars==""||allChars.length==0){
    return genPassword;
   }
let i=1;
while(i>=inputSlider.value){
    genPassword=allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
}

    return genPassword;
}