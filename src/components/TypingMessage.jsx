import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingMessage = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Software", "Front-End", "JavaScript", "React", "Web", "Next.js", "Python", "Django", "PHP", "Laravel", "WordPress", "CSS"],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <h2>
        {" "}
        <span className="line">Hello, I'm a </span> <span className="gradient" ref={el} /> <span className="line">Developer</span>{" "}
      </h2>
    </div>
  );
};

export default TypingMessage;