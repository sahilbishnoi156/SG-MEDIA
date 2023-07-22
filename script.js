gsap.from("#stats-div, #stats-img, #stats-text",{
    y:50,
    opacity:0,
    stagger:.4,
    scrollTrigger:{
        trigger:"#stats-div",
        scroller:"body",
        start:"top 80%",
        end:"top 85%",
        scrub:3
    }
});
gsap.from("#offer-1, #offer-1 p",{
    y:50,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
        trigger:"#offer-1",
        scroller:"body",
        start:"top 130%",
        end:"top 95%",
        scrub:3
    }
});
gsap.from("#companies, .company",{
    y:50,
    opacity:0,
    stagger:.1,
    scrollTrigger:{
        trigger:"#companies",
        scroller:"body",
        start:"top 115%",
        end:"top 95%",
        scrub:2
    }
});
gsap.from(".services",{
    x:50,
    opacity:0,
    stagger:.4,
    scrollTrigger:{
        trigger:"#service",
        scroller:"body",
        start:"top 120%",
        end:"top 95%",
        scrub:2
    }
});

var speak_div = document.querySelectorAll(".speak-div");
const demo_div = document.getElementById("connect-info")
speak_div.forEach(function (ele) {
    ele.addEventListener('click', function () {
        demo_div.scrollIntoView({ behavior: 'smooth' })
    })
})

gsap.from("#team-div",{
    y:50,
    opacity:0,
    stagger:.1,
    scrollTrigger:{
        trigger:"#team-div",
        scroller:"body",
        start:"top 110%",
        end:"top 95%",
        scrub:2
    }
});
gsap.from(".team-persons",{
    position:'relative',
    bottom:40,
    left:40,
    opacity:0,
    rotate:20,
    stagger:.3,
    scrollTrigger:{
        trigger:"#team-members",
        scroller:"body",
        start:"top 70%",
        end:"top 75%",
        scrub:2
    }
});
gsap.from("#demo-call, #section-1, #section-2, #section-3",{
    y:50,
    opacity:0,
    stagger:.1,
    scrollTrigger:{
        trigger:"#demo-call",
        scroller:"body",
        start:"top 100%",
        end:"top 95%",
        scrub:2
    }
});
gsap.from("#section-3 li",{
    scale:1.2,
    opacity:0,
    stagger:.4,
    scrollTrigger:{
        trigger:"#section-3",
        scroller:"body",
        start:"top 90%",
        end:"top 85%",
        scrub:4
    }
});
gsap.from("#footer, #footer-content-1, #footer-content-2",{
    x:50,
    opacity:0,
    stagger:.1,
    scrollTrigger:{
        trigger:"#footer",
        scroller:"body",
        start:"top 100%",
        end:"top 95%",
        scrub:2
    }
});