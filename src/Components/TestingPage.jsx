// // import { useState } from 'react';

// // const Slider = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const images = [Group1, Group2, Group3, Group4]; // Your image sources

// //   const nextSlide = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //   };

// //   const prevSlide = () => {
// //     setCurrentIndex(
// //       (prevIndex) => (prevIndex - 1 + images.length) % images.length
// //     );
// //   };

// //   return (
// //     <div className="relative">
// //       {/* Slider */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ml-10">
// //         {/* Card Slider */}
// //         <div className="bg-white text-teal-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center">
// //           <img
// //             src={images[currentIndex]} // Dynamically change image
// //             alt="Donor Management"
// //             className="mb-4"
// //           />
// //           <h3 className="text-lg font-bold mb-2">Donor Management</h3>
// //           <p className="text-sm">Strengthen relationships and increase donations.</p>
// //         </div>
// //       </div>

// //       {/* Navigation Buttons */}
// //       <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4">
// //         <button
// //           className="bg-teal-800 text-white rounded-full p-2"
// //           onClick={prevSlide}
// //         >
// //           &#10094;
// //         </button>
// //       </div>
// //       <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4">
// //         <button
// //           className="bg-teal-800 text-white rounded-full p-2"
// //           onClick={nextSlide}
// //         >
// //           &#10095;
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Slider;

// import React, { useState } from "react";


// const profiles = [
//   {
//     id: 1,
//     name: "John Doe",
//     title: "Software Engineer",
//     description: "John is a skilled software engineer with 5 years of experience.",
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     title: "Product Manager",
//     description: "Jane is an experienced product manager with a passion for innovation.",
//     image: "https://via.placeholder.com/100",
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     title: "UI/UX Designer",
//     description: "Alice is a creative UI/UX designer with a keen eye for detail.",
//     image: "https://via.placeholder.com/100",
//   },
// ];

// const ProfileCarousel = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const handleProfileClick = (index ) => {
//     setSelectedIndex(index);
//   };

//   const handlePrevious = () => {
//     setSelectedIndex((prevIndex) =>
//       prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setSelectedIndex((prevIndex) =>
//       prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       {/* Profile Thumbnails */}
//       <div className="flex justify-between items-center space-x-4 mb-6">
//         {profiles.map((profile, index) => (
//           <div
//             key={profile.id}
//             onClick={() => handleProfileClick(index)}
//             className={`cursor-pointer border-2 p-2 rounded ${
//               selectedIndex === index ? "border-blue-500" : "border-gray-300"
//             }`}
//           >
//             <img
//               src={profile.image}
//               alt={profile.name}
//               className="w-16 h-16 object-cover rounded-full"
//             />
//             <p className="text-sm text-center mt-2">{profile.title}</p>
//           </div>
//         ))}
//       </div>

//       {/* Selected Profile Details */}
//       <div className="border p-4 rounded shadow-md">
//         <div className="flex justify-between items-center">
//           <button
//             className="p-2 bg-gray-200 rounded hover:bg-gray-300"
//             onClick={handlePrevious}
//           >
//             ◀
//           </button>
//           <div className="text-center">
//             <img
//               src={profiles[selectedIndex].image}
//               alt={profiles[selectedIndex].name}
//               className="w-24 h-24 object-cover rounded-full mx-auto"
//             />
//             <h2 className="text-lg font-semibold mt-2">
//               {profiles[selectedIndex].name}
//             </h2>
//             <p className="text-gray-600">{profiles[selectedIndex].title}</p>
//             <p className="text-gray-700 mt-2">
//               {profiles[selectedIndex].description}
//             </p>
//           </div>
//           <button
//             className="p-2 bg-gray-200 rounded hover:bg-gray-300"
//             onClick={handleNext}
//           >
//             ▶
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCarousel;
