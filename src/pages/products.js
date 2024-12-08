const products = {
    "TrentonModularSofa3": {
        name: "Trenton Modular Sofa 3",
        price: "Rs. 25,000.00",
        image: "Images/Trenton modular.png",
        description: "A beautifully crafted wooden seat with sturdy legs and a smooth finish, designed for comfort and style in any room"
    },
    "GraniteDiningTable": {
        name: "Granite Dining Table with Dining Chair",
        price: "Rs. 25,000.00",
        image: "Images/Granite dining table.png",
        description: "A solid wooden surface, ideal for dining or working, featuring a minimalist design with natural grain patterns that add elegance."
    },
    "OutdoorBarTable": {
        name: "Outdoor Bar Table and Stool",
        price: "Rs. 25,000.00",
        image: "Images/Outdoor bar table.png",
        description: "A plush seating option offering exceptional comfort with a soft yet supportive cushion, perfect for relaxation in living spaces."
    },
    "PlainConsole": {
        name: "Plain Console with Teak Mirror",
        price: "Rs. 25,000.00",
        image: "Images/Plain console.png",
        description: "A sleek wooden structure with a timeless design, adding a rustic charm while providing a comfortable place for meals or study."
    },
    "GrainCoffeeTable": {
        name: "Grain Coffee Table",
        price: "Rs. 15,000.00",
        image: "Images/Grain coffee table 1.png",
        description: "A comfortable piece of furniture with a soft, plush design, ideal for lounging after a long day while enhancing your home decor."
    },
    "KentCoffeeTable": {
        name: "Kent Coffee Table",
        price: "Rs. 225,000.00",
        image: "Images/Kent coffee table 1.png",
        description: "A rustic wooden frame that offers stability and a unique character, making it a perfect addition to any modern or traditional interior."
    },
    "RoundCoffeeTable": {
        name: "Round Coffee Table (Color 2)",
        price: "Rs. 251,000.00",
        image: "Images/Round coffee table_color 2 1.png",
        description: "A generously cushioned piece designed to support relaxation, featuring a sophisticated fabric blend that complements any setting."
    },
    "ReclaimedTeakCoffeeTable": {
        name: "Reclaimed Teak Coffee Table",
        price: "Rs. 25,200.00",
        image: "Images/Reclaimed teak coffee table 1.png",
        description: "A multifunctional wooden surface with a polished finish, perfect for holding decorative items or offering space for work and play."
    },
    "PlainConsole2": {
        name: "Plain Console",
        price: "Rs. 25,800.00",
        image: "Images/Plain console_ 1.png",
        description: "An inviting and soft piece with a contemporary design, offering a cozy spot to unwind and a perfect blend of comfort and style."
    },
    "ReclaimedTeakSideboard": {
        name: "Reclaimed Teak Sideboard",
        price: "Rs. 20,000.00",
        image: "Images/Reclaimed teak Sideboard 1.png",
        description: "A stylish wooden foundation with intricate carvings, ideal for holding essentials while bringing warmth and character to any room."
    },
    "SJP0825": {
        name: "SJP_0825",
        price: "Rs. 200,000.00",
        image: "Images/SJP_0825  1.png",
        description: "A supportive and plush piece designed for comfort, offering a contemporary touch to any space with a versatile fabric finish."
    },
    "BellaChairAndTable": {
        name: "Bella Chair and Table",
        price: "Rs. 100,000.00",
        image: "Images/Bella chair and table 1.png",
        description: "A beautifully designed wooden item, combining both function and aesthetic appeal, perfect for use in living or working areas."
    },
    "GraniteSquareSideTable": {
        name: "Granite Square Side Table",
        price: "Rs. 25,880.00",
        image: "Images/Side Table1.png",
        description: "A sleek, modern piece with soft cushions that promise long-lasting comfort, adding elegance to any living or entertainment space."
    },
    "AsgaardSofa": {
        name: "Asgaard Sofa",
        price: "Rs. 250,000.00",
        image: "Images/Asgaard sofa 1.png",
        description: "A sturdy wooden frame with a clean, polished look, providing ample space for various activities while complementing the room’s ambiance"
    },
    "MayaSofaThreeSeater": {
        name: "Maya Sofa Three Seater",
        price: "Rs. 115,000.00",
        image: "Images/Maya sofa three seater 1.png",
        description: "An ergonomic design that prioritizes comfort, wrapped in a soft, durable fabric perfect for relaxation in a cozy setting."
    },
    "OutdoorSofaSet": {
        name: "Outdoor Sofa Set",
        price: "Rs. 244,000.00",
        image: "Images/Outdoor sofa set 1.png",
        description: "A solid wood construction with elegant details, ideal for both functionality and style, bringing a sophisticated touch to any home."
    }
};

// Get the product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("product");

// Display the product details
if (productId && products[productId]) {
    const product = products[productId];
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-description").textContent = product.description;
} else {
    document.querySelector(".product-details").innerHTML = "<p>Product not found.</p>";
}
