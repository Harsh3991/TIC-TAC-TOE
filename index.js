let boxElement = document.querySelectorAll(".box");
for(let i=0; i < boxElement.length; i++){
    // console.log(boxElement[i])
    boxElement[i].addEventListener("click",handleClick)
}

let click = 0;
let arr = [0,0,0,0,0,0,0,0,0];

function handleClick(event){
    let currEle = event.target;
    let id = currEle.id;
    let text = document.createElement("p");
    if(click%2==0){
        text.textContent = "X";
        arr[id-1] = "X";
    }
    else{
        text.textContent = "O";
        arr[id-1] = "O";
    }
    text.style.fontSize = "80px";
    text.style.color = "goldenrod";
    currEle.append(text);
    click++;
    checkResult();
    
}

function checkResult(){
    let res1 = arr[0]+arr[1]+arr[2];
    let res2 = arr[3]+arr[4]+arr[5];
    let res3 = arr[6]+arr[7]+arr[8];
    let res4 = arr[0]+arr[3]+arr[6];
    let res5 = arr[1]+arr[4]+arr[7];
    let res6 = arr[2]+arr[5]+arr[8];
    let res7 = arr[0]+arr[4]+arr[8];
    let res8 = arr[6]+arr[4]+arr[2];


    let message = document.getElementById("message");
    let resultEle = document.getElementById("result");


    if( res1 == "XXX" || res2 == "XXX" ||res3 == "XXX" ||
        res4 == "XXX" || res5 == "XXX" ||res6 == "XXX" ||
        res7 == "XXX" || res8 == "XXX"){
            message.innerText = "X Won the game";
            resultEle.style.visibility = "visible";
        }
        else if( res1 == "OOO" || res2 == "OOO" ||res3 == "OOO" ||
        res4 == "OOO" || res5 == "OOO" ||res6 == "OOO" ||
        res7 == "OOO" || res8 == "OOO"){
            message.innerText = "O Won the game";
            resultEle.style.visibility = "visible";
        }
        else if(click==9){
            message.innerText = "Tie";
            resultEle.style.visibility = "visible";
        }
}

let playAgainBtn = document.getElementById("button");

playAgainBtn.addEventListener("click", function(){
    window.location = "index.html";
});