import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import JSIcon from '@assets/icons/js2.svg';
import NextJSIcon from '@assets/icons/nextjs.svg';
import ReactJsIcon from '@assets/icons/reactjs.svg';
import Html5Icon from '@assets/icons/html5.svg';
import Css3Icon from '@assets/icons/css3.svg';
import NodeJSIcon from '@assets/icons/nodejs.svg';
import SassIcon from '@assets/icons/sass.svg';
import ExpressJSIcon from '@assets/icons/expressjs.svg';

export default function ParticlesAnimation() {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      options={{
        fpsLimit: 120,
        fullScreen: {
          enable: false,
        },
        particles: {
          collisions: {
            enable: true,
          },
          color: {
            value: '#fafafa',
          },
          rotate: {
            direction: 'clockwise',
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          move: {
            direction: 'top',
            collisions: true,
            enable: true,
            outModes: {
              default: 'destroy',
              bottom: 'none',
            },
            random: false,
            speed: 2,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 35,
          },
          opacity: {
            value: 0.15,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              startValue: 'random',
              sync: false,
            },
          },
          shape: {
            type: 'image',
            image: [
              {
                src: NextJSIcon.src,
                width: 100,
                height: 100,
                replaceColor: true,
              },
              {
                src: JSIcon.src,
                width: 100,
                height: 100,
                replaceColor: true,
              },
              {
                src: ReactJsIcon.src,
                width: 100,
                height: 100,
                replaceColor: true,
              },
              {
                src: Html5Icon.src,
                width: 100,
                height: 100,
                replaceColor: true,
              },
              {
                src: Css3Icon.src,
                width: 100,
                height: 100,
                replaceColor: true,
              },
              {
                src: NodeJSIcon.src,
                width: 100,
                height: 100,
                replaceColor: true,
              },
              {
                src: SassIcon.src,
                width: 100,
                height: 100,
                replaceColor: true,
              },
              {
                src: ExpressJSIcon.src,
                width: 100,
                height: 100,
                replaceColor: true,
              },
            ],
          },
          size: {
            value: 30,
            animation: {
              enable: true,
              speed: 10,
              minimumValue: 10,
              startValue: 'random',
              sync: false,
            },
          },
        },
        emitters: {
          direction: 'top',
          size: {
            width: 100,
            height: 100,
          },
          position: {
            x: 50,
            y: 150,
          },
          rate: {
            quantity: 1,
            delay: 0.6,
          },
        },
        detectRetina: true,
        pauseOnOutsideViewport: true,
      }}
    />
  );
}
