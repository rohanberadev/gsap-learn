"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { cocktailLists, mockTailLists } from "~/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Cocktails() {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            },
        });

        parallaxTimeline
            .from("#c-left-leaf", {
                x: -100,
                y: -100,
            })
            .from("#c-right-leaf", {
                x: 100,
                y: 100,
            });
    }, []);

    return (
        <section id="cocktails" className="noisy">
            <Image
                src="/images/cocktail-left-leaf.png"
                alt="leaf image"
                id="c-left-leaf"
                width={500}
                height={500}
            />
            <Image
                src="/images/cocktail-right-leaf.png"
                alt="leaf image"
                id="c-right-leaf"
                width={500}
                height={500}
            />

            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails:</h2>

                    <ul>
                        {cocktailLists.map(
                            ({ name, country, detail, price }) => (
                                <li key={name}>
                                    <div className="md:me-28">
                                        <h3>{name}</h3>
                                        <p>
                                            {country} | {detail}
                                        </p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most loved mocktails:</h2>

                    <ul>
                        {mockTailLists.map(
                            ({ name, country, detail, price }) => (
                                <li key={name}>
                                    <div className="md:me-28">
                                        <h3>{name}</h3>
                                        <p>
                                            {country} | {detail}
                                        </p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
}
