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
        Hello, I'm a <span className="gradient" ref={el} /> Developer{" "}
      </h2>
    </div>
  );
};

export default TypingMessage;