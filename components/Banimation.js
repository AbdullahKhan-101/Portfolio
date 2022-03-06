import React from "react";
import Particles from "react-tsparticles";

const Banimation = () => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="max-w-sm max-h-20 relative">
      <Particles
        style={{
          position: "static",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          maxHeight: "80vh",
          maxWidth: "100vw",
        }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          width: "40px",
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 30,
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
              bubble: {
                distance: 400,
                duration: 80,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 8,
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
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 900,
              },
              value: 80,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Banimation;
