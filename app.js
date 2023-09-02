function pIntoSpan(){
    let spans = ""
    let pp = document.querySelector('.text-div p');

    pp.textContent.split(" ").forEach((dets) =>{
        spans +=`<span>${dets} </span>` 
    })
    pp.innerHTML = spans;
}

pIntoSpan();



var tl = gsap.timeline();

tl.from("nav p, nav h5",{
    y:"-100%",
    opacity:0,
    duration:.5,
    stagger:.3
})
tl.from(".heading h1",{
    x:"-100%",
    opacity:0,
    duration:.5,
    stagger:.3
    
})
tl.from(".hero-footer a",{
    opacity:0,
    duration:1,
    stagger:.3
})
// tl.from(".text-div p span",{
    
//     opacity:0,
//     duration:1,
//     stagger:.015,
//     scrollTrigger:{
//         trigger:".text-div p span",
//     }
// })


