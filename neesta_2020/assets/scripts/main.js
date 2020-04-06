(function () {
    let why_are_you_looking_at_my_code = document.querySelector('body'),
        min = 1, max = 6, op = 0, toggle = "off",
        brightBG = "#F3E600", darkBG = "#39454D",
        s1 = document.getElementById("shit"),
        s2 = document.getElementById("shit_shadow"),
        grad = document.getElementById("grad"),
        random = Math.floor(Math.random() * (+max - +min)) + +min;
    
    //why_are_you_looking_at_my_code.style.setProperty('background', "url('./assets/images/bg_" + random + ".jpg') center center");
    why_are_you_looking_at_my_code.style.setProperty('background-size', 'cover');

    function getRandom(min, max) {
        return (Math.floor(Math.random() * (+max - +min)) + +min);
    }
    
    function toggleClick(targ) {
        toggle == "on" ? toggle = "off" : toggle = "on";
        s1.innerHTML = s2.innerHTML = toggle;
        if(toggle === "on") {
            gsap.to(why_are_you_looking_at_my_code, { background: brightBG, duration: 5, ease: "back.out( 1.7)" });
            gsap.to(s1, { color: darkBG, opacity: 0.5, duration: 5, ease:"power4.out" });
            gsap.to(s2, { color: darkBG,opacity:0.5,duration: 5});
            gsap.to(grad, { opacity: 1, duration: 5, delay: 0.5, ease: "power4.out", background: "radial-gradient(circle, rgba(255,255,150,1) 0%, rgba(255,150,150,0.2) 50%, rgba(255,0,150,0) 100%)" });
        } else {
            gsap.to(why_are_you_looking_at_my_code, { background:darkBG, duration: 5, ease: "back.out( 1.7)" });
            gsap.to(s1, { color: brightBG, opacity: 0.5, duration: 5 });
            gsap.to(s2, { color: "#f0f0f0", opacity:1, duration: 5 });
            gsap.to(grad, { opacity:.5, duration:3, background:"radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%, rgba(0, 150, 150, 0.2) 50%, rgba(255, 0, 150, 0) 100%)"});
        }        
    }
    gsap.from(s1, { rotation: getRandom(10, 180), scale:"+=2", y: "-=1000", duration:5, ease:"elastic.out( 1, 0.3)", delay:0.75 });
    gsap.from(s2, { rotation: getRandom(10, 180), scale:"+=2",opacity:0, y: "-=1000", duration: 5, ease: "elastic.out( 1, 0.3)", delay: 1 });

    s1.addEventListener('click', function(e){
        gsap.to([s1, s2], { opacity: 0, onComplete: function () { toggleClick(e);} });

    });
    
})();