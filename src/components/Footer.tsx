export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__mark">Anvi<em>é</em></div>
            <div className="footer__tag">
              A premium English-speaking space. Live conversation, real community, a language that
              actually becomes part of your life.
            </div>
          </div>
          <div className="footer__col">
            <h4>Space</h4>
            <a href="#concept">Concept</a>
            <a href="#method">Method</a>
            <a href="#founder">Founder</a>
            <a href="#tariffs">Formats</a>
          </div>
          <div className="footer__col">
            <h4>Join</h4>
            <a href="#apply">Apply</a>
            <a href="#reviews">Voices</a>
            <a href="#tariffs">Formats</a>
            <a href="#apply">Book a call</a>
          </div>
          <div className="footer__col">
            <h4>Reach</h4>
            <a href="#">Instagram</a>
            <a href="#">Telegram</a>
            <a href="#">TikTok</a>
            <a href="#">Email</a>
          </div>
        </div>
        <div className="footer__bottom">
          <div>© {year} Anvié — All rights reserved</div>
          <div>Made with attention · Berlin · Lisbon · NYC</div>
        </div>
      </div>
    </footer>
  );
}
