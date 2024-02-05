import React, { useState, useEffect } from "react";
import Plx from "react-plx";
import "./styles.css";

export default function App() {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 500) {
                setShowText(true);
            } else {
                setShowText(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 700,
                        easing: "ease-in",
                        properties: [
                            {
                                startValue: 1,
                                endValue: 1.6,
                                property: "scale",
                            },
                        ],
                    },
                ]}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                    zIndex: 100,
                }}
            >
                <img style={{ width: "100%" }} src='moon.jpg' alt='moon' />
            </Plx>
            <Plx
                parallaxData={[
                    {
                        start: 0,
                        end: 800,
                        properties: [
                            {
                                startValue: 1,
                                endValue: 1.18,
                                property: "scale",
                            },
                        ],
                    },
                ]}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: "100%",
                }}
            >
                <img style={{ width: "100%" }} src='moon.jpg' alt='moon' />
            </Plx>

            <div
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    zIndex: 200,
                    paddingTop: "56%",
                    height: "400vh",
                    width: "100%",
                    overflowY: "scroll",
                }}
            >
                <div style={{ background: "#000", height: "100%" }}></div>
            </div>

            <div
                className={showText ? "welcome-text show" : "welcome-text"}
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "20%",
                    transform: "translate(-50%, -50%)",
                    color: "#FFC300",

                    fontSize: "72px",
                    zIndex: 300,
                    opacity: showText ? 1 : 0, // Ensuring opacity is set even before adding the class
                    transition: "opacity 0.5s ease", // Adding transition property explicitly
                }}
            >
                Welcome to the moon, <br /> Ill see you soon!
            </div>
        </div>
    );
}
