import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Client Name",
      prof: "Profession",
      img: "img/testimonial-1.jpg",
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    },
    {
      id: 2,
      name: "Client Name",
      prof: "Profession",
      img: "img/testimonial-2.jpg",
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    },
    {
      id: 3,
      name: "Client Name",
      prof: "Profession",
      img: "img/testimonial-3.jpg",
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    },
    {
      id: 4,
      name: "Client Name",
      prof: "Profession",
      img: "img/testimonial-4.jpg",
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
    },
  ];

  return (
    <div className="container-xxl py-16 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h5
            className="relative inline-block text-orange-500 font-secondary text-xl font-medium tracking-wider px-12 
            before:content-[''] before:absolute before:w-10 before:h-[2px] before:bg-orange-500 before:top-1/2 before:left-0
            after:content-[''] after:absolute after:w-10 after:h-[2px] after:bg-orange-500 after:top-1/2 after:right-0"
          >
            Testimonial
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Our Clients Say!!!
          </h1>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12" // Space for pagination dots
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-transparent border border-gray-200 rounded-lg p-6 hover:bg-orange-500 group transition-all duration-300">
                <FaQuoteLeft className="text-4xl text-orange-500 group-hover:text-white mb-4 transition-colors" />
                <p className="text-gray-600 group-hover:text-white mb-6 transition-colors">
                  {review.text}
                </p>
                <div className="flex items-center">
                  <img
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover border-2 border-white"
                    src={review.img}
                    alt={review.name}
                  />
                  <div className="ps-4">
                    <h5 className="font-bold text-lg group-hover:text-white transition-colors">
                      {review.name}
                    </h5>
                    <small className="text-gray-500 group-hover:text-white/80 transition-colors">
                      {review.prof}
                    </small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Optional: Custom CSS for Swiper pagination color */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background-color: #f97316 !important; /* Tailwind orange-500 */
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
