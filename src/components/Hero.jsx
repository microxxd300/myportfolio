import { RevealLetters, RevealLines, FadeUp } from "./Reveal.jsx";
import { useLiquidFilter, LiquidFilterDefs } from "./LiquidFilter.jsx";
import portrait from "../../assets/profile_suit_cutout.webp";

// The hero waits out the preloader: ~2000ms of counting plus the wipe.
const REVEAL_DELAY = 2500;

const ROLES = ["Backend", "Developer", "Builder", "Student"];

export default function Hero() {
  // The watery distortion rides the name, not the portrait.
  const { filterId, hostRef, dispRef, turbRef } = useLiquidFilter(14);

  return (
    <section className="hero" id="top">
      <div className="hero__top">
        <h2 className="hero__roles display t-h3">
          <RevealLines
            lines={ROLES}
            delay={REVEAL_DELAY + 200}
            stagger={80}
            immediate
          />
        </h2>

        <FadeUp
          as="p"
          className="hero__desc t-body"
          delay={REVEAL_DELAY + 400}
          immediate
        >
          I build fast, secure REST APIs with Django, FastAPI and Python —
          payments, auth, background jobs, and the details users never see —
          shipped end to end, from data model to deployment.
        </FadeUp>
      </div>

      <div className="hero__portrait">
        <img
          className="hero__photo"
          src={portrait}
          alt="Portrait of Kurt Z. Lumpayao"
        />
      </div>

      <div className="hero__base" aria-hidden="true" />

      <LiquidFilterDefs
        filterId={filterId}
        turbRef={turbRef}
        dispRef={dispRef}
      />

      <h1
        className="hero__name display"
        ref={hostRef}
        style={{ filter: `url(#${filterId})` }}
      >
        <span className="hero__line">
          <RevealLetters text="Kurt" delay={REVEAL_DELAY} immediate />
        </span>
        <span className="hero__line">
          <RevealLetters text="Lumpayao" delay={REVEAL_DELAY + 240} immediate />
        </span>
      </h1>

      <FadeUp
        className="hero__cue t-eyebrow"
        delay={REVEAL_DELAY + 900}
        immediate
      >
        <span className="hero__cue-rule" aria-hidden="true" />
        Scroll to enter
      </FadeUp>
    </section>
  );
}
