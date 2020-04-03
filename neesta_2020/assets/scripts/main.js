(function () {
    let why_are_you_looking_at_my_code = document.querySelector('body'),
        min = 1, max = 6, op = 0,
        random = Math.floor(Math.random() * (+max - +min)) + +min;
    
    //why_are_you_looking_at_my_code.style.setProperty('background', "url('./assets/images/bg_" + random + ".jpg') center center");
    why_are_you_looking_at_my_code.style.setProperty('background-size', 'cover');

    function getRandom(min, max) {
        return (Math.floor(Math.random() * (+max - +min)) + +min);
    }

    gsap.from("#shit", { rotation: getRandom(10, 180), y: "-=1000", duration: 5, ease: "elastic.out( 1, 0.3)", delay:0.75 });
})();