function validateInputs(){
    let first = document.getElementById("firstName").value.trim();
    let last= document.getElementById("lastName").value.trim();
    let zip=document.getElementById("zip").value.trim();
    let fullName= first + " " + last;
    let output = document.getElementById("output");
    let img= document.getElementById("secretimg");
    output.innerHTML= "";
    img.style.display= "none";
    if(fullName > 20){
        output.innerHTML= `<p>"Your full name is too long (more than 20 characters!)."</p>`;
        return;
    }
    if(zip.length!==  5 || isNaN(zip)){
        output.innerHTML= `<p>"Zip code must be exactly 5 numeric digits."</p>`;
        return;
    }
    output.innerHTML =`<h2>Access Granted!</h2><p>Welcome, ${fullName} from ${zip}.<br>Here is your secret message:</p><p><strong> "This is my dog Rufus and he likes glasses! For more fun scroll to bottom! _/¯(ツ)_/¯" </strong></p>`;
    img.style.display= "inline"; 
}
// I know we were supposed to use this "actionlistener" but I added this for a fun little detail
function displayimage(){
    let img= document.getElementById("sprscrt")
    img.style.display = "inline";
    document.getElementById("supersecret")
    if("click"){
        displayimage
    }
}
