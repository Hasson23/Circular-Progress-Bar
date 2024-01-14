let pc = document.querySelector(".pc");
let value = document.querySelector(".value");
let input = document.querySelector("input");
let btn = document.querySelector("button");

let start = 0;


btn.addEventListener('click',bar)

function bar(){
    let progress = setInterval(()=>{
        if(start < input.value ){
            start++;
            end()
        }else{
            start--
            end()
        }

        function end(){
            value.textContent = `${start}%`;
            pc.style.background = `conic-gradient(#880bea ${start*3.6}deg, #ededed 0deg)`;
            if(start == input.value){
            clearInterval(progress)
            input.value = "";
        }
        }
    },50)
}