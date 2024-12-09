import Link from "next/link"; // Import Next.js Link
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HeckaDown 0</title>
      </Head>
  {/* Navbar Page */}
  <section className="navbarpage" style={{ height: "100vh", backgroundColor: "#FBEBB5" }}>
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
    {/* Two Section */}
    <div className="twoSection">
      <div className="sectionOne">
        <h5>Rocket single seater</h5>
        <p>Shop Now</p>
      </div>
      <div className="sectionTwo">
        <img src="/Images/Rocket single seater 1.png" alt="Rocket Single Seater" />
      </div>
    </div>
  </div>
</section>

  {/* After Nav */}
  <section className="twoTable">
    <div className="firstTable">
      <img src="Images/Side Table1.png" alt="Side Table" />
      <h6>Side Table</h6>
      <p>View More</p>
    </div>
    <div className="secondTable">
      <img src="Images/Site Table2.png" alt="Site Table2" />
      <h6>Side Table</h6>
      <p>View More</p>
    </div>
  </section>
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
  {/* Asgaard sofa */}
  <section className="asgaardSofa">
    <div className="part1_image">
      <img src="Images/Asgaard sofa 1.png" alt="Asgaard sofa 1" />
    </div>
    <div className="part2_text">
      <p>New Arrivals</p>
      <h2>Asgaard sofa</h2>
      <button>Order Now</button>
    </div>
  </section>
  {/* Our Blog */}
  <section className="ourBlog">
    <h5>Our Blogs</h5>
    <p>Find a bright ideal to suit your taste with our great selection</p>
    <div className="card_container">
      <div className="card1">
        <img src="Images/Going all in1.png" alt="Going all in1" />
        <p>Going all-in with millennial design</p>
        <h6>Read More</h6>
        <span id="clock">
          <i className="fa-regular fa-clock" />5 min
        </span>
        <span id="calendar">
          <i className="fa-regular fa-calendar" />
          12<sup>th</sup> Oct 2022
        </span>
      </div>
      <div className="card1">
        <img src="Images/Going all in2.png" alt="Going all in2" />
        <p>Going all-in with millennial design</p>
        <h6>Read More</h6>
        <span id="clock">
          <i className="fa-regular fa-clock" />5 min
        </span>
        <span id="calendar">
          <i className="fa-regular fa-calendar" />
          12<sup>th</sup> Oct 2022
        </span>
      </div>
      <div className="card1">
        <img src="Images/Going all in3.png" alt="Going all in3" />
        <p>Going all-in with millennial design</p>
        <h6>Read More</h6>
        <span id="clock">
          <i className="fa-regular fa-clock" />5 min
        </span>
        <span id="calendar">
          <i className="fa-regular fa-calendar" />
          12<sup>th</sup> Oct 2022
        </span>
      </div>
    </div>
    <p id="views">View All Post</p>
  </section>
  {/* Our Instagram */}
  <section className="ourInsta">
    <h3>Our Instagram</h3>
    <p>Follow our store on Instagram</p>
    <button>Follow Us</button>
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


    </>
  );
}
