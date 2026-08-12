import React, { useRef } from "react";
import {
  Search,
  User,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Camera",
    price: "$599",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    id: 2,
    name: "Luxury Watch",
    price: "$299",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
  },
  {
    id: 3,
    name: "Smartphone",
    price: "$799",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 4,
    name: "Laptop",
    price: "$999",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 5,
    name: "Backpack",
    price: "$89",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: "$129",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
  {
    id: 7,
    name: "Sneakers",
    price: "$159",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 8,
    name: "Perfume",
    price: "$99",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601",
  },
  {
    id: 9,
    name: "Home Decor",
    price: "$199",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
  {
    id: 10,
    name: "Indoor Plant",
    price: "$49",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
  },
];

const testimonials = [
  {
    name: "Rohit Sharma",
    text: "Amazing quality products and fast delivery. Highly recommended!",
  },
  {
    name: "Sneha Patel",
    text: "Great customer service and premium quality. Will shop again!",
  },
  {
    name: "Amit Verma",
    text: "Very satisfied with my purchase. Best shopping experience!",
  },
];

function App() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <h1 className="text-2xl font-bold text-blue-600">
            ShopEase
          </h1>

          <div className="hidden gap-8 md:flex">
            <a href="#home" className="font-medium hover:text-blue-600">
              Home
            </a>
            <a href="#products" className="font-medium hover:text-blue-600">
              Products
            </a>
            <a href="#testimonials" className="font-medium hover:text-blue-600">
              Testimonials
            </a>
            <a href="#about" className="font-medium hover:text-blue-600">
              About Us
            </a>
            <a href="#contact" className="font-medium hover:text-blue-600">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-5">
            <Search className="cursor-pointer hover:text-blue-600" />
            <User className="hidden cursor-pointer sm:block hover:text-blue-600" />
            <ShoppingCart className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">

          <div>
            <p className="mb-3 font-semibold text-blue-600">
              WELCOME TO SHOEASE
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Discover Amazing
              <span className="block text-blue-600">
                Products for You
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-lg text-gray-600">
              Quality products, best prices and exceptional service.
              Shop your favorite products today.
            </p>

            <button className="mt-8 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700">
              Shop Now
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
              alt="Shopping"
              className="h-[400px] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Explore Our Collection
            </h2>

            <p className="mt-2 text-gray-500">
              Swipe left to explore more products
            </p>
          </div>

          {/* CAROUSEL */}
          <div className="relative">

            {/* LEFT BUTTON */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg md:block"
            >
              <ChevronLeft />
            </button>

            {/* PRODUCT LIST */}
            <div
              ref={sliderRef}
              className="flex gap-5 overflow-x-auto scroll-smooth px-2 pb-5 snap-x snap-mandatory scrollbar-hide"
            >

              {products.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[220px] snap-start overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:min-w-[260px]"
                >

                  <img
                    src={`${product.image}?auto=format&fit=crop&w=600&q=80`}
                    alt={product.name}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-5">

                    <h3 className="text-lg font-semibold">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={15}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xl font-bold text-blue-600">
                        {product.price}
                      </span>

                      <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white hover:bg-blue-600">
                        View
                      </button>
                    </div>

                  </div>
                </div>
              ))}

            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg md:block"
            >
              <ChevronRight />
            </button>

          </div>

          {/* MOBILE SWIPE TEXT */}
          <p className="mt-3 text-center text-sm text-gray-400 md:hidden">
            ← Swipe left or right →
          </p>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="bg-gray-50 px-6 py-20"
      >

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              What Our Customers Say
            </h2>

            <p className="mt-3 text-gray-500">
              Loved by thousands of happy customers
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border bg-white p-7 shadow-sm"
              >

                <div className="mb-5 text-4xl text-blue-600">
                  "
                </div>

                <p className="leading-7 text-gray-600">
                  {testimonial.text}
                </p>

                <div className="mt-5 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-gray-500">
                      Verified Buyer
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold">
            Why Choose ShopEase?
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            We bring you carefully selected products with excellent
            quality, affordable prices and a smooth shopping experience.
            Our goal is to make online shopping simple and enjoyable.
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-gray-900 px-6 py-10 text-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">

          <h2 className="text-xl font-bold">
            ShopEase
          </h2>

          <p className="text-sm text-gray-400">
            © 2026 ShopEase. All rights reserved.
          </p>

        </div>
      </footer>

    </div>
  );
}

export default App;