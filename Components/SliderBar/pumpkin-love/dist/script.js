const { to, set, timeline, registerPlugin } = gsap

registerPlugin(Physics2DPlugin);

//gsap.globalTimeline.timeScale(.1)

document.querySelectorAll('.pumpkin-love').forEach(button => {
    button.addEventListener('pointerenter', e => {
        if(button.classList.contains('animated') || button.classList.contains('active')) {
            return
        }
        to(button, {
            '--opacity': .9,
            duration: .15
        })
    })
    button.addEventListener('pointerleave', e => {
        if(button.classList.contains('animated') || button.classList.contains('active')) {
            return
        }
        to(button, {
            '--opacity': .75,
            duration: .15
        })
    })
    button.addEventListener('click', e => {
        if(button.classList.contains('animated')) {
            return
        }
        button.classList.add('animated')
        if(button.classList.contains('active')) {
            to(button, {
                '--opacity': .75,
                duration: .15,
                onComplete() {
                    button.classList.remove('animated', 'active')
                }
            })
            return
        }
        to(button, {
            '--opacity': 1,
            duration: .15
        })
        to(button, {
            '--side-x': '0px',
            duration: .4,
            ease: 'elastic.out(1, .8)'
        })
        to(button, {
            keyframes: [{
                '--middle-scale': 1,
                '--middle-scale-x': 1,
                duration: .1
            }, {
                '--line-offset': '0px',
                '--eye-scale': 1,
                '--nose-scale': 1,
                '--mouth-scale': 1,
                '--top-line-scale': 1,
                duration: .3
            }, {
                '--top-y': '-44px',
                '--mouth-position': '-2px',
                '--scale': 1.15,
                duration: .6,
                ease: 'elastic.out(1, .7)',
                onStart() {
                    candy(button.querySelector('.middle'), document.querySelector('[type="range"]').value, 0, 0, -135, -45);
                }
            }, {
                '--eye-position': '3px',
                duration: .1
            }, {
                '--eye-position': '0px',
                duration: .1,
                delay: .2
            }, {
                '--eye-position': '3px',
                duration: .1
            }, {
                '--eye-position': '0px',
                duration: .1,
                delay: .2
            }, {
                '--top-y': '0px',
                '--mouth-position': '-17px',
                '--scale': 1,
                duration: .25
            }, {
                '--line-offset': '66px',
                '--eye-scale': 0,
                '--nose-scale': 0,
                '--mouth-scale': 0,
                '--top-line-scale': 0,
                duration: .2,
                delay: .2
            }, {
                '--middle-scale': .64,
                '--middle-scale-x': .9,
                duration: .2,
                clearProps: true,
                onStart() {
                    to(button, {
                        '--side-x': '20px',
                        duration: .19
                    })
                },
                onComplete() {
                    button.classList.remove('animated')
                    button.classList.add('active')
                }
            }]
        })
    })
})

function candy(parent, quantity, x, y, minAngle, maxAngle) {
    let colors = [
        'green',
        'pink',
        'orange'
    ];
    let shapes = [
        'rect',
        'round'
    ];
    for(let i = quantity - 1; i >= 0; i--) {
        let angle = gsap.utils.random(minAngle, maxAngle),
            velocity = gsap.utils.random(130, 170),
            svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
            shape = shapes[Math.floor(gsap.utils.random(0, 2))];

        svg.classList.add(shape, colors[Math.floor(gsap.utils.random(0, 3))], 'candy')

        if(shape === 'rect') {
            svg.setAttribute('viewBox', '0 0 28 10');
            svg.innerHTML = '<path class="default" d="M6.00049 3.90458C5.94498 3.8383 1.17461 -1.84936 1.00098 0.621371C0.97102 1.04764 1.11679 1.37059 1.26078 1.68958C1.41358 2.02811 1.56437 2.36218 1.50098 2.81056C1.42875 3.32144 1.07539 3.60026 0.729795 3.87296C0.360966 4.16399 0.000976562 4.44805 0.000976562 4.99976C0.000976562 5.55147 0.360966 5.83552 0.729795 6.12655C1.07539 6.39925 1.42875 6.67807 1.50098 7.18895C1.56437 7.63733 1.41358 7.9714 1.26077 8.30993C1.11679 8.62892 0.97102 8.95187 1.00098 9.37814C1.17461 11.8489 5.94498 6.16121 6.00049 6.09493V8C6.00049 9.10457 6.89592 10 8.00049 10H20.0005C21.1051 10 22.0005 9.10457 22.0005 8V6.0946C22.0005 6.0946 26.8258 11.8636 27.0005 9.37838C27.0304 8.95212 26.8847 8.62917 26.7407 8.31018C26.5879 7.97164 26.4371 7.63757 26.5005 7.18919C26.5727 6.67832 26.9261 6.3995 27.2717 6.1268C27.6405 5.83577 28.0005 5.55171 28.0005 5C28.0005 4.44829 27.6405 4.16423 27.2717 3.8732C26.9261 3.6005 26.5727 3.32168 26.5005 2.81081C26.4371 2.36243 26.5879 2.02835 26.7407 1.68982C26.8847 1.37083 27.0304 1.04788 27.0005 0.621615C26.8258 -1.86358 22.0005 3.9054 22.0005 3.9054V2C22.0005 0.895431 21.1051 -6.19766e-08 20.0005 -6.19766e-08H8.00049C6.89592 -6.19766e-08 6.00049 0.89543 6.00049 2V3.90458Z" /><path class="light" d="M8.00026 10H8.40026L12.0003 0H9.60026L6.32617 9.09469C6.6834 9.63988 7.29978 10 8.00026 10Z" /><path class="light" d="M11.0003 10H13.4003L17.0003 0H14.6003L11.0003 10Z" /><path class="light" d="M16.0003 10H18.4003L21.6743 0.905312C21.3171 0.360115 20.7007 0 20.0003 0H19.6003L16.0003 10Z" /><path class="dark" d="M22 4.56204C22 4.56204 24.4127 2.25445 24.5 3.24852C24.5309 3.59998 24.1884 3.77585 24.25 4.1242C24.3247 4.54664 25 4.57241 25 4.99988C25 5.42734 24.3247 5.45312 24.25 5.87555C24.1884 6.22391 24.5309 6.39977 24.5 6.75123C24.4127 7.74531 22 5.43772 22 5.43772V4.56204Z" /><path class="dark" d="M6.00049 4.56204C6.00049 4.56204 3.58781 2.25445 3.50049 3.24852C3.46961 3.59998 3.81205 3.77585 3.75049 4.1242C3.67583 4.54664 3.00049 4.57241 3.00049 4.99988C3.00049 5.42734 3.67583 5.45312 3.75049 5.87555C3.81205 6.22391 3.46961 6.39977 3.50049 6.75123C3.58781 7.74531 6.00049 5.43772 6.00049 5.43772V4.56204Z" />';
        } else {
            svg.setAttribute('viewBox', '0 0 26 10');
            svg.innerHTML = '<path class="default" d="M20 3.9054C20 3.9054 24.8254 -1.86358 25 0.621615C25.0617 1.50026 24.3769 1.93993 24.5 2.81081C24.6493 3.8669 26 3.93133 26 5C26 6.06867 24.6493 6.1331 24.5 7.18919C24.3769 8.06007 25.0617 8.49974 25 9.37838C24.8254 11.8636 20 6.0946 20 6.0946V3.9054Z" /><path class="dark" d="M21 4.56216C21 4.56216 23.4127 2.25457 23.5 3.24865C23.5309 3.60011 23.1884 3.77597 23.25 4.12432C23.3247 4.54676 24 4.57253 24 5C24 5.42747 23.3247 5.45324 23.25 5.87568C23.1884 6.22403 23.5309 6.39989 23.5 6.75135C23.4127 7.74543 21 5.43784 21 5.43784V4.56216Z" /><ellipse class="dark" cx="13" cy="5" rx="8" ry="5" /><path class="default" d="M19 3C19 5.76142 15.4183 8 11 8C8.88113 8 6.95466 7.48516 5.52336 6.64471C4.30106 8.02415 1.14073 11.3809 1 9.37838C0.970044 8.95212 1.11581 8.62917 1.2598 8.31018C1.4126 7.97165 1.5634 7.63757 1.5 7.18919C1.42777 6.67832 1.07441 6.3995 0.728818 6.1268C0.35999 5.83577 0 5.55171 0 5C0 4.44829 0.35999 4.16423 0.728818 3.8732C1.07441 3.6005 1.42777 3.32168 1.5 2.81081C1.5634 2.36243 1.4126 2.02835 1.2598 1.68982C1.11581 1.37083 0.970044 1.04788 1 0.621615C1.13888 -1.35464 4.21868 1.88872 5.47428 3.30001C6.58742 1.37545 9.53671 1.4336e-07 13 1.4336e-07C15.1783 1.4336e-07 17.1533 0.544151 18.596 1.42683C18.8581 1.92149 19 2.45039 19 3Z" /><path class="dark" d="M5 4.56216C5 4.56216 2.58732 2.25457 2.5 3.24865C2.46913 3.60011 2.81157 3.77597 2.75 4.12432C2.67534 4.54676 2 4.57253 2 5C2 5.42747 2.67534 5.45324 2.75 5.87568C2.81157 6.22403 2.46913 6.39989 2.5 6.75135C2.58732 7.74543 5 5.43784 5 5.43784V4.56216Z" /><path class="light" d="M13 4C13 5.10457 11.6569 6 10 6C8.34315 6 7 5.10457 7 4C7 2.89543 8.34315 2 10 2C11.6569 2 13 2.89543 13 4Z" />';
        }

        parent.appendChild(svg);
        set(svg, {
            opacity: 1,
            x: x,
            y: y,
            scale: gsap.utils.random(.8, 1)
        });
        timeline({
            onComplete() {
                svg.remove();
            }
        }).to(svg, {
            duration: .05,
            opacity: 1
        }, 0).to(svg, {
            duration: 1.8,
            rotation: `-=${gsap.utils.random(-440, 440)}`,
            physics2D: {
                angle: angle,
                velocity: velocity,
                gravity: 180
            }
        }, 0).to(svg, {
            duration: 1,
            opacity: 0
        }, .8);
    }
}

rangesliderJs.create(document.querySelector('[type="range"]'), {
    onInit(value) {
        this.handle.textContent = Math.round(value)
    },
    onSlide(value, percent, position) {
        this.handle.textContent = Math.round(value)
    },
    onSlideEnd(value, percent, position) {
        this.update({
            value: Math.round(value)
        })
    }
})