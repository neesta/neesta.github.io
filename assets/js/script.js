(function(){
    gsap.from('.dot', {y:()=>(window.innerHeight/2)*-1.2, delay:"random(0.5,2)", ease:'bounce.out', duration:"random(2,4)", stagger:1, repeat:-1, repeatDelay:1, yoyo:true});
})();