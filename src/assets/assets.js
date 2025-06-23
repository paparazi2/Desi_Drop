// Product Images
import tshirt1 from './1.png';  
import tshirt2 from './2.png';
import tshirt3 from './3.png';
import tshirt4 from './4.png';
import tshirt5 from './5.png';
import tshirt6 from './6.png';
import tshirt7 from './7.png';
import tshirt8 from './8.png';
import tshirt9 from './9.png';
import tshirt10 from './10.png';
import tshirt11 from './11.jpg';
import tshirt12 from './12.jpg';
import tshirt13 from './13.jpg';


// Brand/UI Assets
import logoo from './logoo.webp'
import logo from './logo.png';
import logoTransparent from './logo-transparent.png';
import cartIcon from './cart_icon.png';
import searchIcon from './search_icon.png';
import menuIcon from './menu_icon.png';
import starIcon from './star_icon.png';
import starDullIcon from './star_dull_icon.png';
import binIcon from './bin_icon.png';
// import logo from './logo.png'
// import hero_img from './hero_img.png'
// import cart_icon from './cart_icon.png'
// import bin_icon from './bin_icon.png'
// import dropdown_icon from './dropdown_icon.png'
// import exchange_icon from './exchange_icon.png'
// import profile_icon from './profile_icon.png'
// import quality_icon from './quality_icon.png'
// import search_icon from './search_icon.png'
// import star_dull_icon from './star_dull_icon.png'
// import star_icon from './star_icon.png'
// import support_img from './support_img.png'
// import menu_icon from './menu_icon.png'
// import about_img from './about_img.png'
// import contact_img from './contact_img.png'
// import razorpay_logo from './razorpay_logo.png'
// import stripe_logo from './stripe_logo.png'
// import cross_icon from './cross_icon.png'


const assets = {
  logo,
  logoTransparent,
  cartIcon,
  searchIcon,
  menuIcon,
  starIcon,
  starDullIcon,
  binIcon,
  logoo
};

export default assets;

export const products = [
    {
        _id: "ts001",
        name: "Classic Cotton Tee",
        description: "Premium 100% cotton t-shirt with crew neck",
        price: 24.99,
        images: [tshirt1],
        category: "Men",
        tags: ["casual", "basic"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["White"],
        rating: 4.5,
        stock: 50
    },
    {
        _id: "ts002",
        name: "Graphic Print T-shirt",
        description: "Soft cotton t-shirt with artistic front print",
        price: 29.99,
        images: [tshirt2],
        category: "Women",
        tags: ["graphic", "fashion"],
        sizes: ["XS", "S", "M"],
        colors: ["Black"],
        rating: 4.7,
        stock: 35
    },
    {
        _id: "ts003",
        name: "Striped Polo Shirt",
        description: "Classic pique polo with contrast collar",
        price: 34.99,
        images: [tshirt3],
        category: "Men",
        tags: ["polo", "sporty"],
        sizes: ["M", "L", "XL"],
        colors: ["Navy/White"],
        rating: 4.3,
        stock: 20
    },
    {
        _id: "ts004",
        name: "V-Neck Basic Tee",
        description: "Lightweight v-neck for layering",
        price: 22.99,
        images: [tshirt4],
        category: "Women",
        tags: ["basic", "undershirt"],
        sizes: ["S", "M", "L"],
        colors: ["Heather Grey"],
        rating: 4.0,
        stock: 40
    },
    {
        _id: "ts005",
        name: "Oversized Fit Tee",
        description: "Relaxed fit with dropped shoulders",
        price: 27.99,
        images: [tshirt5],
        category: "Unisex",
        tags: ["streetwear", "comfort"],
        sizes: ["M", "L", "XL"],
        colors: ["Oatmeal"],
        rating: 4.8,
        stock: 30
    },
    {
        _id: "ts006",
        name: "Performance Active Tee",
        description: "Moisture-wicking fabric for sports",
        price: 32.99,
        images: [tshirt6],
        category: "Men",
        tags: ["athletic", "workout"],
        sizes: ["S", "M", "L", "XL"],
        colors: ["Royal Blue"],
        rating: 4.6,
        stock: 25
    },
    {
        _id: "ts007",
        name: "Pocket Detail T-shirt",
        description: "Classic crewneck with chest pocket",
        price: 26.99,
        images: [tshirt7],
        category: "Men",
        tags: ["utility", "casual"],
        sizes: ["M", "L"],
        colors: ["Army Green"],
        rating: 4.4,
        stock: 15
    },
    {
        _id: "ts008",
        name: "Cropped Box Tee",
        description: "Modern cropped length with boxy fit",
        price: 28.99,
        images: [tshirt8],
        category: "Women",
        tags: ["trendy", "summer"],
        sizes: ["XS", "S"],
        colors: ["Pink"],
        rating: 4.9,
        stock: 18
    },
    {
        _id: "ts009",
        name: "Longline T-shirt",
        description: "Extended length for modern styling",
        price: 31.99,
        images: [tshirt9],
        category: "Men",
        tags: ["streetwear", "urban"],
        sizes: ["L", "XL"],
        colors: ["Charcoal"],
        rating: 4.2,
        stock: 22
    },
    {
        _id: "ts010",
        name: "Organic Cotton Tee",
        description: "Eco-friendly sustainable fabric",
        price: 36.99,
        images: [tshirt10],
        category: "Unisex",
        tags: ["eco", "basic"],
        sizes: ["S", "M", "L"],
        colors: ["Natural"],
        rating: 4.7,
        stock: 28
    },
    {
        _id: "ts011",
        name: "Ringer Tee Vintage",
        description: "Retro style with contrast trim",
        price: 29.99,
        images: [tshirt11],
        category: "Women",
        tags: ["vintage", "retro"],
        sizes: ["S", "M"],
        colors: ["Red/White"],
        rating: 4.5,
        stock: 12
    },
    {
        _id: "ts012",
        name: "Heavyweight Tee",
        description: "300gsm fabric for structured look",
        price: 39.99,
        images: [tshirt12],
        category: "Men",
        tags: ["premium", "quality"],
        sizes: ["M", "L", "XL"],
        colors: ["Black"],
        rating: 4.9,
        stock: 20
    },
    {
        _id: "ts013",
        name: "Tie-Dye Summer Tee",
        description: "Hand-dyed psychedelic pattern",
        price: 33.99,
        images: [tshirt13],
        category: "Unisex",
        tags: ["summer", "festival"],
        sizes: ["S", "M", "L"],
        colors: ["Multicolor"],
        rating: 4.6,
        stock: 15
    }
];