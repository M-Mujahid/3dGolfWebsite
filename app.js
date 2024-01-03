// var cursor = document.querySelector("#cursor")
// var h4 = document.querySelectorAll('#nav h4')


// document.addEventListener("mousemove",function(dets){
//     cursor.style.left = dets.x + 30 + "px";
//     cursor.style.top = dets.y + "px";
// })

// var cursorBlur = document.querySelector("#cursorBlur")
// document.addEventListener("mousemove",function(dets){
//     cursorBlur.style.left = dets.x - 200 + "px";
//     cursorBlur.style.top = dets.y - 200  + "px";
// })

// h4.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         cursor.style.scale =  3;
//         cursor.style.border = "0.5px solid #fff" 
//         cursor.style.backgroundColor = "transparent"
//     })
// })
// h4.forEach(function(elem){
//     elem.addEventListener("mouseleave",function(){
//         cursor.style.scale =  1;
//         cursor.style.border = "0.5px solid #95c11e" 
//         cursor.style.backgroundColor = "#95c11e"
//     })
// })

var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursorBlur");
var h4 = document.querySelectorAll('#nav h4 , #footer h1, .elem, .card , #arrow');
// var h4 = document.querySelectorAll('#nav h4');
document.addEventListener("mousemove", function (event) {
    requestAnimationFrame(function () {
        cursor.style.left = event.clientX +30 + "px";
        cursor.style.top = event.clientY +  "px";
        cursorBlur.style.left = event.clientX - 170 + "px";
        cursorBlur.style.top = event.clientY - 200 + "px";
    });
});

h4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.transform = "scale(3)";
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
        cursor.style.transform = "scale(1)";
        cursor.style.border = "0.5px solid #95c11e";
        cursor.style.backgroundColor = "#95c11e";
    });
});




gsap.to("#nav",{
    backgroundColor:"black",
    duration:1,
    height:"110px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10px",
        end : "top -11%",
        scrub: 1, 
    }


}),

gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers: true,
        start: "top -20%",
        end :"top -70%",
        scrub: 2

    }

})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    stagger:0.4,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"58%",
        scrub: 1,
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"65%",
        scrub: 1,
    }
})

gsap.from("#colo1",{
    x: -30,
    y: -30,
    duration:1,
    scrollTrigger:{
        trigger:"#colo1",
        scroller:"body",
        start: "top 55%",
        end:"top 45%",
        scrub:1,
    }
})

gsap.from("#colo2",{
    x: 30,
    y: 30,
    duration:1,
    scrollTrigger:{
        trigger:"#colo2",
        scroller:"body",
        // markers:true,
        start: "top 100%",
        end:"top 5%",
        scrub:1,
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start: "top 65%",
        end:"top 55%",
        scrub:2,
    }

})