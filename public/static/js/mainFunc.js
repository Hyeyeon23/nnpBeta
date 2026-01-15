window.initImgReveal = function (scope = document) {
    const configs = [
        {
            selector: ".img_anim_reveal",
            boxX: -200,
            imgX: 100,
            scale: 1.3
        },
        {
            selector: ".img_anim_reveal-2",
            boxX: 220,
            imgX: 100,
            scale: 1.2
        },
        {
            selector: ".img_anim_reveal-3",
            boxX: -220,
            imgX: -100,
            scale: 1.2
        }
    ];

    configs.forEach(cfg => {
        scope.querySelectorAll(cfg.selector).forEach(el => {
            const img = el.querySelector("img");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 70%"
                }
            });

            tl.set(el, { autoAlpha: 1 })
                .from(el, {
                    duration: 1.5,
                    xPercent: cfg.boxX,
                    ease: Power2.out
                })
                .from(img, {
                    duration: 1.5,
                    xPercent: cfg.imgX,
                    scale: cfg.scale,
                    ease: Power2.out
                }, "<");
        });
    });
};
