export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span className="mono">© {year} Kurt Z. Lumpayao</span>
      <span className="mono footer__center">Designed &amp; built with care</span>
      <a href="#top" className="footer__top mono" data-cursor>
        Back to top ↑
      </a>
    </footer>
  );
}
