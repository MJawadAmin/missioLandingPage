// import { useState } from 'react';

// const Slider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [Group1, Group2, Group3, Group4]; // Your image sources

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div className="relative">
//       {/* Slider */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-10">
//         {/* Card Slider */}
//         <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
//           <img
//             src={images[currentIndex]} // Dynamically change image
//             alt="Donor Management"
//             className="mb-4"
//           />
//           <h3 className="text-lg font-bold mb-2">Donor Management</h3>
//           <p className="text-sm">Strengthen relationships and increase donations.</p>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4">
//         <button
//           className="bg-teal-800 text-white rounded-full p-2"
//           onClick={prevSlide}
//         >
//           &#10094;
//         </button>
//       </div>
//       <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4">
//         <button
//           className="bg-teal-800 text-white rounded-full p-2"
//           onClick={nextSlide}
//         >
//           &#10095;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;
