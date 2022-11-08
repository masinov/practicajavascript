let emojis = ["🥰","😇","😙","🤑","🤭","🤥","🤓","😱","💩","🤡","👻","👽","😼","❤️","💯","🕳","🤚","🤘"];
let auxemojis = [];
let outputP = document.getElementById("output");
let pushbtn = document.getElementById('pushbtn');
let unshiftbtn = document.getElementById('unshiftbtn');
let insertatbtn = document.getElementById('insertatbtn');
let numinput1 = document.getElementById('numinput1');
let popbtn = document.getElementById('popbtn');
let shiftbtn = document.getElementById('shiftbtn');
let removeatbtn = document.getElementById('removeatbtn');
let numinput2 = document.getElementById("numinput2");

function arrayToString(array){
    let outputstr = "[";
    for (let i = 0; i< array.length;  i++){
        if (i< array.length - 1){
            outputstr += array[i];
            outputstr +=", ";}
        else{
            outputstr += array[i];
        }
    }
    outputstr += "]";
    return outputstr;
}

function updateMaxInput(){
    numinput1.max = auxemojis.length - 1;
    numinput2.max = auxemojis.length - 1;
}

pushbtn.addEventListener('click', function (){
    let auxemoji = emojis[Math.floor(Math.random()*emojis.length)];
    auxemojis.push(auxemoji);
    outputP.innerHTML = arrayToString(auxemojis);
    updateMaxInput();
    console.log(arrayToString(auxemojis));
    })

unshiftbtn.addEventListener('click', function (){
    let auxemoji = emojis[Math.floor(Math.random()*emojis.length)];
    auxemojis.unshift(auxemoji);
    outputP.innerHTML = arrayToString(auxemojis);
    updateMaxInput();
    console.log(arrayToString(auxemojis));
    })

insertatbtn.addEventListener('click', function (){
    let auxemoji = emojis[Math.floor(Math.random()*emojis.length)];
    let position = document.getElementById("numinput1").value;
    auxemojis.splice(position, 0, auxemoji);
    outputP.innerHTML = arrayToString(auxemojis);
    updateMaxInput();
    console.log(arrayToString(auxemojis));
})

popbtn.addEventListener('click', function (){
    auxemojis.pop();
    outputP.innerHTML = arrayToString(auxemojis);
    updateMaxInput();
    console.log(arrayToString(auxemojis));
    })

shiftbtn.addEventListener('click', function (){
    auxemojis.shift();
    outputP.innerHTML = arrayToString(auxemojis);
    updateMaxInput();
    console.log(arrayToString(auxemojis));
    })

removeatbtn.addEventListener('click', function (){
    let position = document.getElementById("numinput2").value;
    auxemojis.splice(position, 1);
    outputP.innerHTML = arrayToString(auxemojis);
    updateMaxInput();
    console.log(arrayToString(auxemojis));
})
