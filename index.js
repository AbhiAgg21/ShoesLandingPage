gsap.from("#page2 .box",{
    scale: 0,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller : "body",
        // markers : true,
        // start:"top 70%"
    }
})

