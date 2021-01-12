let tl = gsap.timeline();

tl.from([".bg_wrapper .bg_"], {
    y: -10,
    height: 0,
    opacity: 0,
    duration: 0.8,
    ease: "power3.inOut",
    stagger: {
        amount: .5
    }
})
    .from([".logo", ".text_logo", ".nav_item", ".nav_item a", ".language", ".menu_"], {
        delay: -0.8,
        y: 16,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        stagger: {
            amount: .5
        }
    })
    .from(["h1", "h1 span", "article p"], {
        delay: -0.8,
        y: 10,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        stagger: {
            amount: .5
        }
    })
    .from([".info", ".item"], {
        duration: 1,
        delay: .3,
        scaleX: 0,
        transformOrigin: "left",
        ease: "expo.out",
        stagger: {
            amount: .5
        }
    })
    .from([".social_section .fa", ".search"], {
        delay: -0.8,
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        stagger: {
            amount: .2
        }
    })
    .from([".slider_info"], {
        duration: 1.5,
        delay: -0.5,
        scaleX: 0,
        transformOrigin: "left",
        ease: "expo.out"
    })
    .from([".digital_img", ".featured_project .info_ span", ".featured_project .info_ h2", ".share", ".scroll"], {
        delay: -0.8,
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        stagger: {
            amount: .2
        }
    })
    .from([".slider_nav i", ".pagination .item", ".pagination span"], {
        delay: -0.2,
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        stagger: {
            amount: .2
        }
    })
    .from([".footer_border .border_"], {
        delay: -0.2,
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut",
        stagger: {
            amount: .2
        }
    })