import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style.scss";

gsap.registerPlugin(ScrollTrigger);

export const TextImageGSAP = () => {
    useEffect(() => {
        const img1 = document.getElementById('svg1');
        const img2 = document.getElementById('svg2');
        const img3 = document.getElementById('svg3');
        const imgCat = document.getElementById('img');
        const line1 = document.getElementById('line1');
        const line2 = document.getElementById('line2');

        gsap.fromTo(img1, { // formto bắt đầu từ vị trí 0% và kết thúc ở 30% sang phải
            x: '0%'
        }, {
            x: '30%',
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.textImageGSAP__container',
                start: "top center",
                scrub: true // animation sẽ diễn ra khi cuộn
            }
        });

        gsap.to(img2, {
            x: '-150%', // di chuyển sang trái khi container được cuộn
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.textImageGSAP .textImageGSAP__container',
                start: "top center",
                scrub: true
            }
        });

        gsap.to(img3, {
            x: '140%',
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.textImageGSAP .textImageGSAP__container',
                start: "top center",
                scrub: true
            }
        });

        gsap.to(imgCat, {
            y: '-70%', // di chuyển lên trên
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.textImageGSAP .image-container',
                start: "top center",
                scrub: true
            }
        });

        gsap.fromTo(line1, {
            x: '-100%', // line1 bắt đầu từ bên trái và xuất hiện dần khi cuộn
            opacity: 0
        }, {
            x: '10%',
            opacity: 1,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.textImageGSAP .image-container',
                start: 'top center',
                end: '+=200',
                scrub: true,
            }
        });

        gsap.fromTo(line2, {
            x: '-200%',
            opacity: 0
        }, {
            x: '10%',
            opacity: 1,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: '.textImageGSAP .image-container',
                start: 'top center',
                end: '+=200',
                scrub: true,
            }
        });

        // Cleanup ScrollTrigger khi component unmount
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="textImageGSAP">
            <div className="textImageGSAP__container">
                <div id="svg1" className="img-wrapper-l">
                    <p>Chauffeur service</p>
                </div>

                <div id="svg2" className="img-wrapper-r">
                    <p>Unparalled accomodations</p>
                </div>

                <div id="svg3" className="img-wrapper-l">
                    <p>Luxury transportation</p>
                </div>
            </div>

            <div className="image-container">
                <img id="img" src="https://images.unsplash.com/photo-1512757776214-26d36777b513?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" />
                <div className="text">
                    <div id="line1" className="line-text-1"><p>Inquire now</p></div>
                    <div id="line2" className="line-text-2"><p>Booking now</p></div>
                </div>
            </div>
        </div>
    );
};
