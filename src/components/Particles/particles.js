import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const ParticlesThrill = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "linear-gradient(to right, #FFC000 0%, #fff 100%)",
          },
        },
        height: '720px',
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
              distance: 80,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: "#fff",
          },
          links: {
            color: "trasparent",
            distance: 150,
            enable: true,
            opacity: 1,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 40,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "char", // changing shape to 'char' for custom characters
            character: {
              value: ['♩', "♫", "𝄞"],
              font: "Verdana",
              style: "",
              weight: "700",
              fill: true,
            },
          },
          size: {
            value: { min: 5, max: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
export default ParticlesThrill;