let toggles = document.getElementsByClassName
('toggle');
let contentDiv = document.getElementsByClassName
('conteudo');
let icons = document.getElementsByClassName
('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height)
        != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv
            [i].scrollHeight + "px";
            toggles[i].style.color = "#5555ba";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }
        for(let j=o; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[i].style.height = "0px";
                toggles[i].style.color = "#111130";
                icons[i].classList.remove('fa-minus');
                icons[i].classList.add('fa-plus');
            }
        }
    })
}

const hamburguerr = document.querySelector(".hamburguerr");
const list = document.querySelector(".list");

hamburguerr.addEventListener("click", ()=> {
    hamburguerr.classList.toggle("active");
    list.classList.toggle("active");
})

document.querySelectorAll(".list").forEach(n => n.addEventListener("click", () =>{
    hamburguerr.classList.remove("active");
    list.classList.remove("active");
}))