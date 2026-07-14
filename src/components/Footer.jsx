export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span className="mono">© {year} Kurt Z. Lumpayao</span>
      <a href="#top" className="mono footer__top">
        back to top ↑
      </a>
    </footer>
  );
}
