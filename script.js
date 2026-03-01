const searchFuncion = document.querySelector(".searchStyle")

searchFuncion.addEventListener("input", function(event){
    event.defaultPrevented()
    console.log('submit')
});


const menu = document.querySelector(".divMenu")
const menuView = document.querySelector(".menuActivo")


menu.addEventListener("click", () =>{
    menuView.classList.toggle("active")
});

const navHeader = document.querySelectorAll(".navMainLi")

navHeader.forEach(function(item){
    item.addEventListener("click", function(){
        navHeader.forEach(function(el){
            el.classList.remove("active");
        });
        item.classList.toggle("active")
    })
});

const dataNav = document.querySelectorAll(".navMainLi");
const articuleDataNav = document.querySelectorAll(".contetnPrincipal");

dataNav.forEach(function(item){
    item.addEventListener("click", function(){

        const selectedValue = item.dataset.categoria;

        articuleDataNav.forEach(function(job){

            const categoria = job.dataset.categoria;

            if(selectedValue === "all" || selectedValue === categoria){
                job.style.display = "";
            } else{
                job.style.display = "none";
            }

        });

    });
});
