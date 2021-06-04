import React from "react";
import { useOnScreen, sobe } from "../ functions/UseOnScreen";

export const Video = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.7 });
  return (
    <>
      <section className="video">
        <iframe
          src="https://www.youtube.com/embed/jfBV1N8lbf4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          ref={ref}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? sobe[0] : sobe[1],
          }}
        ></iframe>
      </section>
    </>
  );
};
