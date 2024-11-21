const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var elemc=document.querySelector(".contianer")
var b=document.querySelector(".fixed-image")
elemc.addEventListener ("mouseenter",function(){
    b.style.display="block"
})
elemc.addEventListener ("mouseleave",function(){
    b.style.display="none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image")
        b.style.backgroundImage=`url(${image})`
    })
})