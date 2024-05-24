"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim";

function AmongUsParticles() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    fpsLimit: 165,
    fullScreen: {
      enable: true,
    },
    particles: {
      groups: {
        z5000: {
          number: {
            value: 70,
          },
          zIndex: {
            value: 50,
          },
        },
        z7500: {
          number: {
            value: 30,
          },
          zIndex: {
            value: 75,
          },
        },
        z2500: {
          number: {
            value: 50,
          },
          zIndex: {
            value: 25,
          },
        },
        z1000: {
          number: {
            value: 40,
          },
          zIndex: {
            value: 10,
          },
        },
      },
      number: {
        value: 200,
        density: {
          enable: false,
        },
      },
      color: {
        value: "#f4f6f7",
        animation: {
          enable: false,
          speed: 20,
          sync: true,
        },
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
        animation: {
          enable: false,
          speed: 3,
          sync: false,
        },
      },
      size: {
        value: 3,
      },
      move: {
        angle: {
          value: 10,
          offset: 0,
        },
        enable: true,
        speed: 5,
        direction: "right",
      },
      zIndex: {
        value: 5,
        opacityRate: 0.5,
      },
    },
    background: {
      color: "#117a65",
    },
    emitters: {
      position: {
        y: 55,
        x: -5,
      },
      rate: {
        delay: 7,
        quantity: 1,
      },
      size: {
        width: 0,
        height: 0,
      },
      particles: {
        size: {
          value: 40,
        },
        move: {
          speed: 10,
          outModes: {
            default: "out",
          },
          straight: true,
        },
        zIndex: {
          value: 0,
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 10,
            sync: true,
          },
        },
      },
    },
  };

  return (
    <div>{init && <Particles options={options} className="-z-50" />}</div>
  );
}

export default AmongUsParticles;
