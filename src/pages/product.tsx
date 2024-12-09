// import Head from "next/head";
// import Script from "next/script";

// export default function ProjectPage() {
  //   return (
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
  
interface Product {
  name: string;
  price: string;
  image: string;
  description: string;
}

// Define the type for the products object
const products: { [key: string]: Product } = {
  "TrentonModularSofa3": {
    name: "Trenton Modular Sofa 3",
    price: "Rs. 25,000.00",
    image: "/Images/Trenton modular.png",
    description: "A beautifully crafted wooden seat with sturdy legs and a smooth finish, designed for comfort and style in any room."
  },
    "GraniteDiningTable": {
      name: "Granite Dining Table with Dining Chair",
      price: "Rs. 25,000.00",
      image: "/Images/Granite dining table.png",
      description: "A solid wooden surface, ideal for dining or working, featuring a minimalist design with natural grain patterns that add elegance."
    },
    "OutdoorBarTable": {
      name: "Outdoor Bar Table and Stool",
      price: "Rs. 25,000.00",
      image: "/Images/Outdoor bar table.png",
      description: "Perfect for outdoor settings, this table comes with stools, providing comfort and style for your patio."
    },
    "PlainConsole": {
        name: "Plain Console with Teak Mirror",
        price: "Rs. 25,000.00",
        image: "/Images/Plain console.png",
        description: "A sleek wooden structure with a timeless design, adding a rustic charm while providing a comfortable place for meals or study."
    },
    "GrainCoffeeTable": {
        name: "Grain Coffee Table",
        price: "Rs. 15,000.00",
        image: "/Images/Grain coffee table 1.png",
        description: "A comfortable piece of furniture with a soft, plush design, ideal for lounging after a long day while enhancing your home decor."
    },
    "KentCoffeeTable": {
        name: "Kent Coffee Table",
        price: "Rs. 225,000.00",
        image: "/Images/Kent coffee table 1.png",
        description: "A rustic wooden frame that offers stability and a unique character, making it a perfect addition to any modern or traditional interior."
    },
    "RoundCoffeeTable": {
        name: "Round Coffee Table (Color 2)",
        price: "Rs. 251,000.00",
        image: "/Images/Round coffee table_color 2 1.png",
        description: "A generously cushioned piece designed to support relaxation, featuring a sophisticated fabric blend that complements any setting."
    },
    "ReclaimedTeakCoffeeTable": {
        name: "Reclaimed Teak Coffee Table",
        price: "Rs. 25,200.00",
        image: "/Images/Reclaimed teak coffee table 1.png",
        description: "A multifunctional wooden surface with a polished finish, perfect for holding decorative items or offering space for work and play."
    },
    "PlainConsole2": {
        name: "Plain Console",
        price: "Rs. 25,800.00",
        image: "/Images/Plain console_ 1.png",
        description: "An inviting and soft piece with a contemporary design, offering a cozy spot to unwind and a perfect blend of comfort and style."
    },
    "ReclaimedTeakSideboard": {
        name: "Reclaimed Teak Sideboard",
        price: "Rs. 20,000.00",
        image: "/Images/Reclaimed teak Sideboard 1.png",
        description: "A stylish wooden foundation with intricate carvings, ideal for holding essentials while bringing warmth and character to any room."
    },
    "SJP0825": {
        name: "SJP_0825",
        price: "Rs. 200,000.00",
        image: "/Images/SJP_0825  1.png",
        description: "A supportive and plush piece designed for comfort, offering a contemporary touch to any space with a versatile fabric finish."
    },
    "BellaChairAndTable": {
        name: "Bella Chair and Table",
        price: "Rs. 100,000.00",
        image: "/Images/Bella chair and table 1.png",
        description: "A beautifully designed wooden item, combining both function and aesthetic appeal, perfect for use in living or working areas."
    },
    "GraniteSquareSideTable": {
        name: "Granite Square Side Table",
        price: "Rs. 25,880.00",
        image: "/Images/Side Table1.png",
        description: "A sleek, modern piece with soft cushions that promise long-lasting comfort, adding elegance to any living or entertainment space."
    },
    "AsgaardSofa": {
        name: "Asgaard Sofa",
        price: "Rs. 250,000.00",
        image: "/Images/Asgaard sofa 1.png",
        description: "A sturdy wooden frame with a clean, polished look, providing ample space for various activities while complementing the room’s ambiance"
    },
    "MayaSofaThreeSeater": {
        name: "Maya Sofa Three Seater",
        price: "Rs. 115,000.00",
        image: "/Images/Maya sofa three seater 1.png",
        description: "An ergonomic design that prioritizes comfort, wrapped in a soft, durable fabric perfect for relaxation in a cozy setting."
    },
    "OutdoorSofaSet": {
        name: "Outdoor Sofa Set",
        price: "Rs. 244,000.00",
        image: "/Images/Outdoor sofa set 1.png",
        description: "A solid wood construction with elegant details, ideal for both functionality and style, bringing a sophisticated touch to any home."
    }
  };
  
  export default function ProductPage() {
    const [product, setProduct] = useState<Product | null>(null);
    const router = useRouter();
    
    // Destructure `product` from query parameters (productId could be undefined initially)
    const { product: productId } = router.query;
  
    useEffect(() => {
      // Check if productId is valid and exists in the products object
      if (productId && typeof productId === 'string' && products[productId]) {
        setProduct(products[productId]);
      }
    }, [productId]);
  
    // If no product is found, show a fallback message
    if (!product) {
      return <div>Product not found.</div>;
    }
  
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
  {/* <section className="product-details">
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
  </section> */}
  <section className="product-details">
        <div className="product-container">
          <div className="imagesbox">
            {/* Render product image */}
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            {/* Render product name */}
            <h3>{product.name}</h3>
            {/* Render product price */}
            <h4>{product.price}</h4>
            {/* Render product description */}
            <p>{product.description}</p>
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

{/* <Script src="products.js"></Script> */}

</>

  );
}
