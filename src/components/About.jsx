export default function About() {
  return (
    <section className="about" id="about">
      <p className="about__label mono reveal">( About )</p>
      <div className="about__grid">
        <p className="about__statement reveal">
          I study at <strong>Davao del Norte State College</strong>, where I
          sharpen the craft of building software that's fast, secure, and
          maintainable. I care about the details users never see — clean data
          models, well-tested logic, and APIs that simply work — because that's
          where reliable products are made.
        </p>
        <div className="about__cols">
          <div className="about__col reveal">
            <h4 className="mono">Focus</h4>
            <ul>
              <li>API Design</li>
              <li>Backend Development</li>
              <li>Database Modeling</li>
              <li>System Architecture</li>
            </ul>
          </div>
          <div className="about__col reveal">
            <h4 className="mono">Stack</h4>
            <ul>
              <li>Python / Django</li>
              <li>Django REST Framework</li>
              <li>PostgreSQL</li>
              <li>Redis &amp; Celery</li>
              <li>Docker</li>
              <li>Git &amp; CI/CD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
