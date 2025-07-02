"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const heroSplit = new SplitText(".title", { type: "chars, words" });
        const paragraphSplit = new SplitText(".subtitle", {
            type: "lines",
        });

        heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.05,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        })
            .to(".right-leaf", { y: 200 }, 0)
            .to(".left-leaf", { y: -200 }, 0);

        const startValue = isMobile ? "top 50%" : "center 60%";
        const endValue = isMobile ? "120% top" : "bottom top";

        const video = videoRef.current;
        if (!video) return;

        const setupScrollTrigger = () => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: startValue,
                    end: endValue,
                    pin: true,
                    scrub: true,
                },
            }).to(video, {
                currentTime: video.duration,
            });
        };

        if (video.readyState >= 1) {
            setupScrollTrigger();
        } else {
            video.onloadedmetadata = setupScrollTrigger;
        }
    }, []);

    return (
        <>
            <section id="hero" className="noisy">
                <h1 className="title">MOJITO</h1>
                <Image
                    src="/images/hero-left-leaf.png"
                    alt="leaf image"
                    width={500}
                    height={500}
                    className="left-leaf"
                />
                <Image
                    src="/images/hero-right-leaf.png"
                    alt="leaf image"
                    width={500}
                    height={500}
                    className="right-leaf"
                />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic.</p>
                            <p className="subtitle">
                                Sip the Spirit <br /> of the Summer
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every cocktail in our menu is a blend of premium
                                ingrediants, creative, flair, and timeless
                                recipes — designed to delight your senses.
                            </p>
                            <Link href="#cocktails">View Coctails</Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    src="/videos/output.mp4"
                    muted
                    playsInline
                    preload="auto"
                />
            </div>
        </>
    );
}
