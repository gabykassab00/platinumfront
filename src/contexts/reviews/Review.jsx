// import React from "react";
// import { FaStar } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCards } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-cards";


// const reviewData = [
//   {
//     id: 1,
//     name: "Alice",
//     review: "Absolutely love the floral tones. Long-lasting and elegant!",
//     rank: "Perfume Connoisseur",
//     club: "Elite Fragrance Club",
//   },
//   {
//     id: 2,
//     name: "Bob",
//     review: "A strong, bold scent. Great for evening wear.",
//     rank: "Fragrance Collector",
//     club: "Scent Society",
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     review: "Fresh and subtle. Perfect for everyday use.",
//     rank: "Daily User",
//     club: "Perfume Addicts",
//   },
//   {
//     id: 4,
//     name: "Dana",
//     review: "Such a rich and warm aroma. I get compliments every time!",
//     rank: "Luxury Lover",
//     club: "Scented Moments",
//   },
//   {
//     id: 5,
//     name: "Eli",
//     review: "The perfect balance of sweet and spicy. Love it!",
//     rank: "Enthusiast",
//     club: "The Aroma Circle",
//   },
// ];

// const Review = () => {
//   return (
//     <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#1976d2]">
//       <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
//         <div>
//           <h1 className="text-2xl font-semibold text-white">Feedback</h1>
//           <p className="mt-6 text-gray-200">
//             Let’s hear what people say about our perfumes!
//           </p>
//           <div className="mt-6 flex items-center space-x-6">
//             <div>
//               <p className="text-2xl font-bold text-white">4.88</p>
//               <p className="text-white mb-2">Overall Rating</p>
//               <div className="flex items-center">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} className="text-white" />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Swiper Slider */}
//         <div className="overflow-hidden">
//           <Swiper
//             effect={"cards"}
//             grabCursor={true}
//             modules={[EffectCards]}
//             className="md:w-[450px] md:h-[350px] w-[90%] h-[300px]"
//           >
//             {reviewData.map((data) => (
//               <SwiperSlide
//                 key={data.id}
//                 className="bg-white rounded-3xl p-6 flex flex-col justify-between"
//               >
//                 <div>
//                   <p className="text-xs sm:text-sm md:text-base font-semibold">
//                     {data.review}
//                   </p>
//                   <div className="flex items-center mt-4 text-yellow-600">
//                     {[...Array(5)].map((_, i) => (
//                       <FaStar key={i} className="md:w-6 md:h-6 w-3" />
//                     ))}
//                   </div>
//                 </div>
//                 <div className="mt-10">
//                   <p className="text-sm sm:text-lg font-semibold">{data.name}</p>
//                   <p className="text-gray-600 text-xs sm:text-base">{data.rank}</p>
//                   <p className="text-gray-700 text-xs sm:text-base">{data.club}</p>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Review;



// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const reviews = [
//   "Such a rich, warm aroma. I get compliments every time!",
//   "The perfect balance of sweet and spicy. Love it!",
//   "Fresh and subtle. Great for everyday wear.",
// ];

// export default function ReviewSwiper() {
//   return (
//     <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
//       <Swiper
//         spaceBetween={20}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         style={{ padding: "20px" }}
//       >
//         {reviews.map((review, index) => (
//           <SwiperSlide
//             key={index}
//             style={{
//               background: "#fff",
//               borderRadius: "10px",
//               padding: "1rem",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <p>{review}</p>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";

// const reviews = [
//   {
//     text: "Such a rich, warm aroma. I get compliments every time!",
//     name: "Emily Johnson",
//   },
//   {
//     text: "The perfect balance of sweet and spicy. Love it!",
//     name: "David Lee",
//   },
//   {
//     text: "Fresh and subtle. Great for everyday wear.",
//     name: "Sophia Kim",
//   },
// ];

// export default function ReviewSwiper() {
//   return (
//     <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem" }}>
//         Reviews
//       </h2>

//       <Swiper spaceBetween={20} slidesPerView={1}>
//         {reviews.map((review, index) => (
//           <SwiperSlide
//             key={index}
//             style={{
//               background: "#fff",
//               borderRadius: "10px",
//               padding: "1.5rem",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//               textAlign: "center",
//             }}
//           >
//             <div style={{ marginBottom: "0.5rem", color: "#FFD700", fontSize: "1.2rem" }}>
//               ★★★★★
//             </div>
//             <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>"{review.text}"</p>
//             <p style={{ fontWeight: "bold", color: "#555" }}>— {review.name}</p>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }




// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectCoverflow } from "swiper"; // ✅ FIXED HERE
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// const reviews = [
//   {
//     text: "Such a rich, warm aroma. I get compliments every time!",
//     name: "Emily Johnson",
//   },
//   {
//     text: "The perfect balance of sweet and spicy. Love it!",
//     name: "David Lee",
//   },
//   {
//     text: "Fresh and subtle. Great for everyday wear.",
//     name: "Sophia Kim",
//   },
// ];

// export default function ReviewSwiper() {
//   return (
//     <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem" }}>
//         Reviews
//       </h2>

//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         modules={[Autoplay, Pagination, EffectCoverflow]}
//         style={{ paddingBottom: "3rem" }}
//       >
//         {reviews.map((review, index) => (
//           <SwiperSlide
//             key={index}
//             style={{
//               background: "#fff",
//               borderRadius: "10px",
//               padding: "1.5rem",
//               width: "500px",
//               height:"200px",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//               textAlign: "center",
//             }}
//           >
//             <div style={{ marginBottom: "0.5rem", color: "#FFD700", fontSize: "1.2rem" }}>
//               ★★★★★
//             </div>
//             <p style={{ fontStyle: "italic", marginBottom: "1rem" }}>"{review.text}"</p>
//             <p style={{ fontWeight: "bold", color: "#555" }}>— {review.name}</p>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectCoverflow } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// const reviews = [
//   {
//     text: "Such a rich, warm aroma. I get compliments every time!",
//     name: "Emily Johnson",
//   },
//   {
//     text: "The perfect balance of sweet and spicy. Love it!",
//     name: "David Lee",
//   },
//   {
//     text: "Fresh and subtle. Great for everyday wear.",
//     name: "Sophia Kim",
//   },
// ];

// export default function ReviewSwiper() {
//   return (
//     <div
//       style={{
//         padding: "2rem 1rem",
//         maxWidth: "100%",
//         margin: "0 auto",
//       }}
//     >
//       <h2
//         style={{
//           textAlign: "center",
//           marginBottom: "2rem",
//           fontSize: "2rem",
//           wordWrap: "break-word",
//         }}
//       >
//         Reviews
//       </h2>

//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 30,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         modules={[Autoplay, Pagination, EffectCoverflow]}
//         style={{ paddingBottom: "3rem" }}
//       >
//         {reviews.map((review, index) => (
//           <SwiperSlide
//             key={index}
//             style={{
//               background: "#fff",
//               borderRadius: "10px",
//               padding: "1.5rem",
//               width: "80%",
//               maxWidth: "400px",
//               minHeight: "300px",
//               boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//               textAlign: "center",
//               boxSizing: "border-box",
//             }}
//           >
//             <div style={{ marginBottom: "0.5rem", color: "#FFD700", fontSize: "1.2rem" }}>
//               ★★★★★
//             </div>
//             <p
//               style={{
//                 fontStyle: "italic",
//                 marginBottom: "1rem",
//                 fontSize: "0.95rem",
//                 wordWrap: "break-word",
//               }}
//             >
//               "{review.text}"
//             </p>
//             <p style={{ fontWeight: "bold", color: "#555", fontSize: "0.9rem" }}>
//               — {review.name}
//             </p>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }


// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectCoverflow } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

// const reviews = [
//   {
//     text: "Such a rich, warm aroma. I get compliments every time!",
//     name: "Emily Johnson",
//     rating: 5,
//   },
//   {
//     text: "The perfect balance of sweet and spicy. Love it!",
//     name: "David Lee",
//     rating: 4,
//   },
//   {
//     text: "Fresh and subtle. Great for everyday wear.",
//     name: "Sophia Kim",
//     rating: 5,
//   },
// ];


// const StarRating = ({ rating }) => {
//   const fullStars = "★".repeat(rating);
//   const emptyStars = "☆".repeat(5 - rating);

//   return (
//     <Text color="yellow.400" fontSize="xl" mb={2}>
//       {fullStars}{emptyStars}
//     </Text>
//   );
// };


// export default function ReviewSwiper() {
//   const cardBg = useColorModeValue("white", "gray.700");
//   const textColor = useColorModeValue("gray.700", "gray.200");
//   const shadow = useColorModeValue(
//     "0 4px 20px rgba(0, 0, 0, 0.1)",
//     "0 4px 20px rgba(0, 0, 0, 0.3)"
//   );

//   return (
//     <Box py={8} px={4} maxW="100%" mx="auto">
//       <Heading
//         as="h2"
//         textAlign="center"
//         mb={8}
//         fontSize={{ base: "xl", md: "2xl" }}
//         fontWeight="semibold"
//       >
//         Customer Reviews
//       </Heading>

//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         spaceBetween={30}
//         coverflowEffect={{
//           rotate: 10,
//           stretch: 0,
//           depth: 100,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         pagination={{ 
//           clickable: true,
//           dynamicBullets: true 
//         }}
//         autoplay={{ 
//           delay: 4000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true
//         }}
//         loop={true}
//         modules={[Autoplay, Pagination, EffectCoverflow]}
//         style={{ 
//           paddingBottom: "3rem",
//           width: "100%",
//         }}
//         breakpoints={{
//           640: {
//             coverflowEffect: {
//               rotate: 15,
//               stretch: 20,
//               depth: 150,
//             }
//           },
//           1024: {
//             coverflowEffect: {
//               rotate: 20,
//               stretch: 30,
//               depth: 200,
//             }
//           }
//         }}
//       >
//         {reviews.map((review, index) => (
//           <SwiperSlide
//             key={index}
//             style={{
//               background: cardBg,
//               borderRadius: "12px",
//               padding: "2rem",
//               width: "300px",
//               minHeight: "280px",
//               boxShadow: shadow,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               transition: "transform 0.3s ease, box-shadow 0.3s ease",
//             }}
//           >
//             <StarRating rating={review.rating} />
//             <Text
//               fontStyle="italic"
//               mb={4}
//               fontSize="lg"
//               color={textColor}
//               _before={{ content: '"\\201C"', fontSize: "3xl", mr: 1 }}
//               _after={{ content: '"\\201D"', fontSize: "3xl", ml: 1 }}
//             >
//               {review.text}
//             </Text>
//             <Text 
//               fontWeight="bold" 
//               color={textColor}
//               fontSize="md"
//               mt="auto"
//             >
//               — {review.name}
//             </Text>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </Box>
//   );
// }



// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectCoverflow } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// const reviews = [
//   {
//     text: "Such a rich, warm aroma. I get compliments every time!",
//     name: "Emily Johnson",
//     rating: 5,
//   },
//   {
//     text: "The perfect balance of sweet and spicy. Love it!",
//     name: "David Lee",
//     rating: 4,
//   },
//   {
//     text: "Fresh and subtle. Great for everyday wear.",
//     name: "Sophia Kim",
//     rating: 5,
//   },
// ];

// const StarRating = ({ rating }) => {
//   const fullStars = "★".repeat(rating);
//   const emptyStars = "☆".repeat(5 - rating);

//   return (
//     <p style={{ color: "#FFD700", fontSize: "20px", marginBottom: "10px" }}>
//       {fullStars}{emptyStars}
//     </p>
//   );
// };

// export default function ReviewSwiper() {
//   return (
//     <div style={{ padding: "32px", textAlign: "center", maxWidth: "100%", margin: "auto" }}>
//       <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "32px" }}>
//         Customer Reviews
//       </h2>

//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         spaceBetween={30}
//         coverflowEffect={{
//           rotate: 10,
//           stretch: 0,
//           depth: 100,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         pagination={{ clickable: true, dynamicBullets: true }}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         loop={true}
//         modules={[Autoplay, Pagination, EffectCoverflow]}
//         style={{ paddingBottom: "48px", width: "100%" }}
//         breakpoints={{
//           640: {
//             coverflowEffect: {
//               rotate: 15,
//               stretch: 20,
//               depth: 150,
//             }
//           },
//           1024: {
//             coverflowEffect: {
//               rotate: 20,
//               stretch: 30,
//               depth: 200,
//             }
//           }
//         }}
//       >
//         {reviews.map((review, index) => (
//           <SwiperSlide
//             key={index}
//             style={{
//               background: "#fff",
//               borderRadius: "12px",
//               padding: "32px",
//               width: "300px",
//               minHeight: "280px",
//               boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               transition: "transform 0.3s ease, box-shadow 0.3s ease",
//             }}
//           >
//             <StarRating rating={review.rating} />
//             <p style={{
//               fontStyle: "italic",
//               marginBottom: "16px",
//               fontSize: "18px",
//               color: "#555",
//             }}>
//               “{review.text}”
//             </p>
//             <p style={{
//               fontWeight: "bold",
//               fontSize: "16px",
//               marginTop: "auto",
//               color: "#333"
//             }}>
//               — {review.name}
//             </p>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectCoverflow } from "swiper";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// const reviews = [
//   {
//     text: "Such a rich, warm aroma. I get compliments every time!",
//     name: "Emily Johnson",
//     rating: 5,
//   },
//   {
//     text: "The perfect balance of sweet and spicy. Love it!",
//     name: "David Lee",
//     rating: 4,
//   },
//   {
//     text: "Fresh and subtle. Great for everyday wear.",
//     name: "Sophia Kim",
//     rating: 5,
//   },
// ];

// const StarRating = ({ rating }) => {
//   const fullStars = "★".repeat(rating);
//   const emptyStars = "☆".repeat(5 - rating);

//   return (
//     <p style={{ color: "#FFD700", fontSize: "20px", marginBottom: "10px" }}>
//       {fullStars}{emptyStars}
//     </p>
//   );
// };

// export default function ReviewSwiper() {
//   return (
//     <div style={{ padding: "32px", textAlign: "center", maxWidth: "100%", margin: "auto" }}>
//       <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "32px" }}>
//         Customer Reviews
//       </h2>

//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         spaceBetween={30}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//         loop={true} // Ensures continuous right movement
//         allowTouchMove={true} // Allow user interaction
//         onSlideChange={(swiper) => {
//           swiper.allowSlidePrev = false; // Prevents sliding left
//         }}
//         modules={[Autoplay, Pagination, EffectCoverflow]}
//         style={{ paddingBottom: "48px", width: "100%" }}
//       >
//         {reviews.map((review, index) => (
//           <SwiperSlide
//             key={index}
//             style={{
//               background: "#fff",
//               borderRadius: "12px",
//               padding: "32px",
//               width: "300px",
//               minHeight: "280px",
//               boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               transition: "transform 0.3s ease, box-shadow 0.3s ease",
//             }}
//           >
//             <StarRating rating={review.rating} />
//             <p style={{
//               fontStyle: "italic",
//               marginBottom: "16px",
//               fontSize: "18px",
//               color: "#555",
//             }}>
//               “{review.text}”
//             </p>
//             <p style={{
//               fontWeight: "bold",
//               fontSize: "16px",
//               marginTop: "auto",
//               color: "#333"
//             }}>
//               — {review.name}
//             </p>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }



import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const reviews = [
  {
    text: "Such a rich, warm aroma. I get compliments every time!",
    name: "Emily Johnson",
    rating: 5,
  },
  {
    text: "The perfect balance of sweet and spicy. Love it!",
    name: "David Lee",
    rating: 4,
  },
  {
    text: "Fresh and subtle. Great for everyday wear.",
    name: "Sophia Kim",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = "★".repeat(rating);
  const emptyStars = "☆".repeat(5 - rating);

  return (
    <p style={{ color: "#FFD700", fontSize: "20px", marginBottom: "10px" }}>
      {fullStars}{emptyStars}
    </p>
  );
};

export default function ReviewSwiper() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.allowSlidePrev = false; // Disable left swipe
    }
  }, []);

  return (
    <div style={{ padding: "32px", textAlign: "center", maxWidth: "100%", margin: "auto" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "32px" }}>
        Customer Reviews
      </h2>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        allowTouchMove={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.allowSlidePrev = false; // Initial disable
        }}
        onSlideChange={(swiper) => {
          swiper.allowSlidePrev = false; // Ensure it stays disabled
        }}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        style={{ paddingBottom: "48px", width: "100%" }} 
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "32px",
              width: "300px",
              minHeight: "280px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <StarRating rating={review.rating} />
            <p style={{
              fontStyle: "italic",
              marginBottom: "16px",
              fontSize: "18px",
              color: "#555",
            }}>
              "{review.text}"
            </p>
            <p style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "auto",
              color: "#333"
            }}>
              — {review.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}





