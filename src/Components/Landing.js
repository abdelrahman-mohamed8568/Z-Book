import cover from "../img/cover.gif";
import cover_svg from "../img/Books.gif";
export default function Landing() {
  return (
    <>
      <div className="landing">
        <div className="boxOne">
          <div>
            <h3>Welcome to Z Book, your shop for all your book needs.</h3>
            <h6>
              "We're excited to offer you a wide selection of books, from the
              latest bestsellers to classic favorites."
              <br />
              "Our team is passionate about books, and we're committed to
              providing you with the best possible experience."
              <br />
              "We hope you'll find something you love on our website."
              <br />
              "Thank you for visiting Z Book. We're always looking for ways to
              improve, so please let us know what you think."
            </h6>
          </div>
          <img src={cover_svg} className="landing-svg" alt="..." />
        </div>
        <div className="boxOne">
          <img src={cover} className="landing-img" alt="..." />

          <h1>
            - Our website is easy to use and navigate.
            <br />
            - We offer a satisfaction guarantee.
            <br />- We're committed to customer service.
          </h1>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#202020"
            fillOpacity="1"
            d="M0,0L48,37.3C96,75,192,149,288,165.3C384,181,480,139,576,106.7C672,75,768,53,864,37.3C960,21,1056,11,1152,42.7C1248,75,1344,149,1392,186.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
