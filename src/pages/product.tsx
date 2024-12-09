import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function ProjectPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Product</title>
      </Head>

  {/* Navbar */}
  <section className="navbarpage" style={{ height: "auto", backgroundColor: "transparent" }}>
  <div className="widthPrespec">
    {/* Navbar Start */}
    <div className="container">
      <div className="navEle1" />
      <div className="navEle2">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navEle3">
        <ul>
          <li>
            <a href="#">
              <i className="fa-regular fa-user" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-magnifying-glass" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-regular fa-heart" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-cart-shopping" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* Navbar End */}
  </div>
</section>
  {/* Product */}
  <section className="product-details">
    <div className="product-container">
      <div className="imagesbox">
        <img id="product-image" src="" alt="Product Image" />
      </div>
      <div className="product-info">
        <h3 id="product-name" />
        <h4 id="product-price" />
        <p id="product-description" />
        <div className="add-to-cart">
          <div className="counter">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  </section>
  {/* description */}
  <section className="description">
    <div className="descdet">
      <div className="threeHead">
        <p>Description</p>
        <p id="three">Additional Information</p>
        <p id="three">Reviews [5]</p>
      </div>
      <p>
        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
        active stereo speaker takes the unmistakable look and sound of Marshall,
        unplugs the chords, and takes the show on the road. <br />
        <br /> Weighing in under 7 pounds, the Kilburn is a lightweight piece of
        vintage styled engineering. Setting the bar as one of the loudest
        speakers in its class, the Kilburn is a compact, stout-hearted hero with
        a well-balanced audio which boasts a clear midrange and extended highs
        for a sound that is both articulate and pronounced. The analogue knobs
        allow you to fine tune the controls to your personal preferences while
        the guitar-influenced leather strap enables easy and stylish travel.
      </p>
    </div>
  </section>
  {/* images */}
  <div className="main-container">
    <div className="part11">
      <img src="Images/Maya sofa three seater 1.png" alt="Maya sofa three seater 1" />
    </div>
    <div className="part11">
      <img src="Images/Maya sofa three seater 1.png" alt="Maya sofa three seater 1" />
    </div>
  </div>
  {/* Product Item */}
  {/* Top Pick */}
  <section className="topPick">
    <h5>Top Picks For You</h5>
    <p>
      Find a bright ideal to suit your taste with our great selection of
      suspension, floor and table lights.
    </p>
    <div className="boxes_section">
      <div className="box1">
        <img src="Images/Trenton modular.png" alt="Trenton modular" />
        <p>Trenton modular sofa_3</p>
        <h6>Rs. 25,000.00</h6>
      </div>
      <div className="box1">
        <img src="Images/Granite dining table.png" alt="Granite dining table" />
        <p>Granite dining table with dining chair</p>
        <h6>Rs. 25,000.00</h6>
      </div>
      <div className="box1">
        <img src="Images/Outdoor bar table.png" alt="Outdoor bar table" />
        <p>Outdoor bar table and stool</p>
        <h6>Rs. 25,000.00</h6>
      </div>
      <div className="box1">
        <img src="Images/Plain console.png" alt="Plain console" />
        <p>Plain console with teak mirror</p>
        <h6>Rs. 25,000.00</h6>
      </div>
    </div>
    <p id="views">View More</p>
  </section>
   {/* Footer */}
   <footer className="footer">
  <div className="footer-container">
    <div className="address">
      <p>400 University Drive Suite 200 Coral Gables,</p>
      <p>FL 33134 USA</p>
    </div>
    <div className="links">
      <p>Links</p>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
    <div className="help">
      <p>Help</p>
      <ul>
        <li>
          <a href="#">Payment Options</a>
        </li>
        <li>
          <a href="#">Returns</a>
        </li>
        <li>
          <a href="#">Privacy Policies</a>
        </li>
      </ul>
    </div>
    <div className="newsletter">
      <p>Newsletter</p>
      <form>
        <input
          type="email"
          placeholder="Enter Your Email Address"
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>
  <hr />
  <div className="footer-bottom">
    <p>2022 Meubel House. All rights reserved</p>
  </div>
</footer>

<Script src="products.js"></Script>

</>

  );
}
