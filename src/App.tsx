import { TypeAnimation } from "react-type-animation";
import Header from "./components/Header";
import Scroll from "./components/Scroll";
import React, { useRef, useEffect } from "react";

function range(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Vector {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  getDistance(other: Vector): number {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

class Agent {
  pos: Vector;
  speed: Vector;
  radius: number;
  color: string;
  constructor(x: number, y: number) {
    this.pos = new Vector(x, y);
    this.speed = new Vector(range(-1, 1), range(-1, 1));
    this.radius = range(1, 2);
    this.color = `rgba(164 194 244, 1)`;
  }

  bounce(width: number, height: number) {
    if (this.pos.x <= 0 || this.pos.x >= width) {
      this.speed.x *= -1;
    }
    if (this.pos.y <= 0 || this.pos.y >= height) {
      this.speed.y *= -1;
    }
  }

  update() {
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;
  }

  draw(context: any) {
    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.fillStyle = this.color;
    context.lineWidth = 1;

    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();

    context.restore();
  }
}

function App() {
  const canvasRef = useRef(null);

  let canvas = document.querySelector("canvas");
  let context = canvas?.getContext("2d");

  const width = context?.canvas.width;
  const height = context?.canvas.height;

  const agents: Agent[] = [];
  for (let i = 0; i < 32; i++) {
    const x = range(0, width as number);
    const y = range(0, height as number);

    agents.push(new Agent(x, y));
  }

  const draw = (context: any) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    for (let i = 0; i < agents.length; i++) {
      const agent = agents[i];

      for (let j = i + 1; j < agents.length; j++) {
        const other = agents[j];

        const dist = agent.pos.getDistance(other.pos);

        if (dist > 66) continue;

        context.strokeStyle = "#a4c2f4";
        context.fillStyle = "#f7f7f7";

        context.beginPath();
        context.moveTo(agent.pos.x, agent.pos.y);
        context.lineTo(other.pos.x, other.pos.y);
        context.stroke();
      }
    }

    agents.forEach((agent) => {
      agent.update();
      agent.draw(context);
      agent.bounce(width as number, height as number);
    });
  };

  useEffect(() => {
    let animationFrameId: number;

    const render = () => {
      draw(context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <section className="pt-11 bg-dark h-screen flex flex-col justify-between mx-[15%]">
      <Header />
      <canvas
        ref={canvasRef}
        width="1366"
        height="768"
        className="absolute top-11 -z-1"
      ></canvas>
      <div className="flex flex-row items-center pb-32 gap-24">
        <article className="text-white flex flex-col w-full">
          <h1 className="text-6xl font-serif font-normal">
            Olá, meu
            <p>
              nome é <span className="font-bold text-blue">RAHEL!</span>
            </p>
          </h1>
          <h2 className="text-2xl font-normal mt-2">
            Sou{" "}
            <span className="text-blue">
              <TypeAnimation
                sequence={[
                  "instrutor de ciência da computação",
                  1000, // Waits 1s
                  "desenvolvedor front-end",
                  1000, // Waits 2s
                  "game programmer",
                  1000,
                  () => {},
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </h2>
          <h3 className="text-base font-normal mt-8">
            Desenvolvedor Front-end com ReactJs, Game Programmer utilizando a
            Unity e Instrutor de Ciência da Computação na Trybe. Já atuei como
            professor na Universidade Federal do Ceará (UFC) e na Faculdade
            Paraíso do Ceará (FAP).
          </h3>
        </article>
        <img
          src="/avatar.png"
          alt="Rahel's avatar"
          className="h-[420px] w-[420px] rounded-full bg-blue"
        />
      </div>

      <Scroll />
    </section>
  );
}

export default App;
