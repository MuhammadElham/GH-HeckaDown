import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function ShopPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shop</title>
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
    {/* Two Section */}

  </div>
</section>

  {/* SHop Banner */}
  <section className="banner">
    <img src="Images/Shop_Logo.png" alt="Shop Logo" />
    <h3>Shop</h3>
    <div className="home_icon_shop">
      <p>Home</p>
      <i className="fa-solid fa-arrow-right" />
      <p>Shop</p>
    </div>
  </section>
  {/* Filter */}
  <section className="filter">
    <div className="filter_margin">
      <div className="part1">
        <i className="fa-solid fa-sliders" />
        <p>Filter</p>
        <img src="Images/4dot.png" alt="" />
        <img src="Images/linesymbol.png" alt="" />
        {/* <img src="Images/Line.png" alt=""> */}
        <p>Showing 1–16 of 32 results</p>
      </div>
      <div className="part2">
        <p>Show</p>
        <p id="num">16</p>
        <p>Short by</p>
        <p id="num">Default</p>
      </div>
    </div>
  </section>
  {/* Product */}
  <section className="topPick">
    <div className="boxes_section">
      {/* 1 */}
<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "TrentonModularSofa3" } }}>
  <Image
  src="/Images/Trenton modular.png"
  alt="Trenton Modular Sofa"
  width={500} // Specify the width of the image
  height={300} // Specify the height of the image
/>
    <p>Trenton modular sofa_3</p>
    <h6>Rs. 25,000.00</h6>
  </Link>
</div>

<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "GraniteDiningTable" } }}>
    <Image
      src="/Images/Granite dining table.png"
      alt="Granite dining table with dining chair"
      width={500} // Specify the width of the image
  height={300} // Specify the height of the image
    />
    <p>Granite dining table with dining chair</p>
    <h6>Rs. 25,000.00</h6>
  </Link>
</div>

        
<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "OutdoorBarTable" } }}>
    <Image
      src="/Images/Outdoor bar table.png"
      alt="Outdoor bar table and stool"
      width={500} // Specify the width of the image
      height={300} // Specify the height of the image
    />
    <p>Outdoor bar table and stool</p>
    <h6>Rs. 25,000.00</h6>
  </Link>
</div>

<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "PlainConsole" } }}>
    <Image
      src="/Images/Plain console.png"
      alt="Plain console with teak mirror"
      width={500} // Specify the width of the image
      height={300} // Specify the height of the image
    />
    <p>Plain console with teak mirror</p>
    <h6>Rs. 25,000.00</h6>
  </Link>
</div>

{/* 2 */}
<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "GrainCoffeeTable" } }}>
    <Image
      src="/Images/Grain coffee table 1.png"
      alt="Grain coffee table"
      width={500} // Specify the width of the image
      height={300} // Specify the height of the image
    />
    <p>Grain coffee table</p>
    <h6>Rs. 15,000.00</h6>
  </Link>
</div>

<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "KentCoffeeTable" } }}>
    <Image
      src="/Images/Kent coffee table 1.png"
      alt="Kent coffee table"
      width={500} // Specify the width of the image
      height={300} // Specify the height of the image
    />
    <p>Kent coffee table</p>
    <h6>Rs. 225,000.00</h6>
  </Link>
</div>

<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "RoundCoffeeTable" } }}>
    <Image
      src="/Images/Round coffee table_color 2 1.png"
      alt="Round coffee table_color 2"
      width={500} // Specify the width of the image
      height={300} // Specify the height of the image
    />
    <p>Round coffee table_color 2</p>
    <h6>Rs. 251,000.00</h6>
  </Link>
</div>

<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "ReclaimedTeakCoffeeTable" } }}>
    <Image
      src="/Images/Reclaimed teak coffee table 1.png"
      alt="Reclaimed teak coffee table"
      width={500} // Specify the width of the image
  height={300} // Specify the height of the image
    />
    <p>Reclaimed teak coffee table</p>
    <h6>Rs. 25,200.00</h6>
  </Link>
</div>

       
{/* 3 */}
<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "PlainConsole2" } }}>
    <Image
      src="/Images/Plain console_ 1.png"
      alt="Plain console"
      width={500} // Specify the width of the image
      height={300} // Specify the height of the image
    />
    <p>Plain console_</p>
    <h6>Rs. 258,200.00</h6>
  </Link>
</div>

<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "ReclaimedTeakSideboard" } }}>
    <Image
      src="/Images/Reclaimed teak Sideboard 1.png"
      alt="Reclaimed teak Sideboard"
      width={500} // Specify the width of the image
      height={300} // Specify the height of the image
    />
    <p>Reclaimed teak Sideboard</p>
    <h6>Rs. 20,000.00</h6>
  </Link>
</div>

<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "SJP0825" } }}>
    <Image
      src="/Images/SJP_0825  1.png"
      alt="SJP_0825"
      width={500} // Specify the width of the image
      height={300} // Specify the height of the image
    />
    <p>SJP_0825</p>
    <h6>Rs. 200,000.00</h6>
  </Link>
</div>

<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "BellaChairAndTable" } }}>
    <Image
      src="/Images/Bella chair and table 1.png"
      alt="Bella chair and table"
      width={500} // Specify the width of the image
      height={300} // Specify the height of the image
    />
    <p>Bella chair and table</p>
    <h6>Rs. 100,000.00</h6>
  </Link>
</div>
  
   {/* 4 */}
<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "GraniteSquareSideTable" } }}>
    <Image
      src="/Images/Side Table1.png"
      alt="Granite square side table"
      width={500} // Specify the width of the image
  height={300} // Specify the height of the image
    />
    <p>Granite square side table</p>
    <h6>Rs. 258,800.00</h6>
  </Link>
</div>

<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "AsgaardSofa" } }}>
    <Image
      src="/Images/Asgaard sofa 1.png"
      alt="Asgaard sofa"
      width={500} // Specify the width of the image
      height={300} // Specify the height of the image
    />
    <p>Asgaard sofa</p>
    <h6>Rs. 250,000.00</h6>
  </Link>
</div>

<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "MayaSofaThreeSeater" } }}>
    <Image
      src="/Images/Maya sofa three seater 1.png"
      alt="Maya sofa three seater"
      width={500} // Specify the width of the image
  height={300} // Specify the height of the image
    />
    <p>Maya sofa three seater</p>
    <h6>Rs. 115,000.00</h6>
  </Link>
</div>

<div className="box1">
  <Link href={{ pathname: "/product", query: { product: "OutdoorSofaSet" } }}>
    <Image
      src="/Images/Outdoor sofa set 1.png"
      alt="Outdoor sofa set"
      width={500} // Specify the width of the image
      height={300} // Specify the height of the image
    />
    <p>Outdoor sofa set</p>
    <h6>Rs. 244,000.00</h6>
  </Link>
</div>

    
    </div>
  </section>
{/* new */}

  {/* page Number */}
  <section className="pageNumber">
    <p>1</p>
    <p id="dif">2</p>
    <p id="dif">3</p>
    <p id="dif">Next</p>
  </section>
  {/* Free Deliev */}
  <section className="freeDiliev">
    <div className="subfreeDiliev">
      <div className="first">
        <h6>Free Delivery</h6>
        <p>For all oders over $50, consectetur adipim scing elit.</p>
      </div>
      <div className="first">
        <h6>90 Days Return</h6>
        <p>If goods have problems, consectetur adipim scing elit.</p>
      </div>
      <div className="first">
        <h6>Secure Payment</h6>
        <p>100% secure payment, consectetur adipim scing elit.</p>
      </div>
    </div>
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
