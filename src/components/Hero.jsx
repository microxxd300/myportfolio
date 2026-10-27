import Slide from "./Slide.jsx";
import { RevealLetters, FadeUp } from "./Reveal.jsx";
import { useLiquidFilter, LiquidFilterDefs } from "./LiquidFilter.jsx";
import dots from "../../assets/profile_dots.webp";

// The hero waits out the preloader: ~2000ms of counting plus the wipe.
const REVEAL_DELAY = 2500;

export default function Hero() {
  // The watery distortion rides the name, not the portrait.
  const { filterId, hostRef, dispRef, turbRef } = useLiquidFilter(14);

  return (
    <Slide
      id="top"
      num="0.0"
      title="Introduction"
      label="Intro"
      meta="CV / 2026"
      variant="red"
      className="hero"
    >
      <div className="hero__copy">
        <FadeUp className="hero__roles" delay={REVEAL_DELAY + 200} immediate>
          <span className="mono">Software Engineer</span>
          <span className="mono hero__arrow" aria-hidden="true">
            →
          </span>
          <span className="mono">Aspiring AI Engineer</span>
        </FadeUp>

        <LiquidFilterDefs
          filterId={filterId}
          turbRef={turbRef}
          dispRef={dispRef}
        />
        <h1
          className="hero__name dot"
          ref={hostRef}
          style={{ filter: `url(#${filterId})` }}
        >
          <span className="hero__line">
            <RevealLetters text="Kurt" delay={REVEAL_DELAY} immediate />
          </span>
          <span className="hero__line">
            <RevealLetters
              text="Lumpayao"
              delay={REVEAL_DELAY + 240}
              immediate
            />
          </span>
        </h1>

        <FadeUp
          as="p"
          className="hero__intro t-lead"
          delay={REVEAL_DELAY + 400}
          immediate
        >
          I build fast, secure APIs with Django, FastAPI and Python — and
          automate the workflows around them with AI. Shipped end to end, from
          data model to deployment.
        </FadeUp>

        <FadeUp className="hero__foot" delay={REVEAL_DELAY + 700} immediate>
          <a className="btn" href="#projects">
            See the work <span aria-hidden="true">↓</span>
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </FadeUp>
      </div>

      {/* The dots are a mask, so they print in whatever ink the slide uses. */}
      <div
        className="hero__portrait"
        role="img"
        aria-label="Halftone portrait of Kurt Z. Lumpayao"
      >
        <div
          className="hero__dots"
          style={{
            WebkitMaskImage: `url(${dots})`,
            maskImage: `url(${dots})`,
          }}
        />
      </div>
    </Slide>
  );
}
