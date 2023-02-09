import { useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
const Particles = dynamic(() => import('react-particles'), {
    ssr: false,
  });
import { loadFull } from "tsparticles";
// import React from "react";

const Starfield = () => {
    const particlesOptions = {
        background: {
            color: {
                value: "#0d47a1",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `<div id="tsparticles" style="height: 100vh; width: 100%;"></div>
                <script>
                var tsParticles = new window.tsParticles.Particles("tsparticles", ${JSON.stringify(particlesOptions)});
                </script>`,
            }}
        />
    );
};

export default Starfield;

