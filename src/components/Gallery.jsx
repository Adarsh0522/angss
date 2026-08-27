import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import eventImage1 from "../assets/images/events/farming-seminar-1.jpeg";
import eventImage2 from "../assets/images/events/farming-seminar-2.jpeg";
import eventImage3 from "../assets/images/events/farming-seminar-3.jpeg";

const events = [
  {
    key: "naturalFarmingSeminar",
    images: [eventImage1, eventImage2, eventImage3],
    year: "२०२५",
    location: "कोकण विभाग",
    title: "गोआधारित उद्योजकता आणि नैसर्गिक शेती मार्गदर्शन",
    description:
      "गोआधारित व्यवसाय आणि रसायनमुक्त शेतीच्या माध्यमातून ग्रामीण उद्योजकतेला प्रोत्साहन देणारा जनजागृती कार्यक्रम.",
  },
];

const Gallery = () => {
  const [selectedImages, setSelectedImages] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openGallery = (images, index = 0) => {
    setSelectedImages(images);
    setSelectedIndex(index);
  };

  const closeGallery = () => {
    setSelectedImages(null);
    setSelectedIndex(0);
  };

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? selectedImages.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === selectedImages.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <>
      <section
        id="gallery"
        className="py-24 bg-stone-50 relative overflow-hidden"
      >
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-stone-100 to-transparent pointer-events-none" />

        <div className="container-wide mx-auto relative z-10">
          {/* Section Header */}

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">
              कार्यक्रम आणि गॅलरी
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">
              बदलाची प्रेरणा देणारे क्षण
            </h2>

            <p className="text-lg text-stone-600">
              अधिक सक्षम गाव आणि सशक्त ग्रामीण समुदाय घडवण्याच्या दिशेने
              प्रत्येक कार्यक्रम हे एक महत्त्वाचे पाऊल आहे.
            </p>
          </div>

          {/* Events */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <motion.div
                key={event.key}
                className="relative rounded-3xl overflow-hidden h-[450px] group shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                onClick={() => openGallery(event.images, 0)}
              >
                {/* Main Image */}

                <img
                  src={event.images[0]}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Gradient Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#011812]/95 via-[#011812]/40 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100" />

                {/* Content */}

                <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 translate-y-8 group-hover:translate-y-0">
                  <span className="text-xs font-bold px-3 py-1.5 bg-gold/90 text-white rounded-full w-fit mb-4 backdrop-blur-md">
                    {event.year} • {event.location}
                  </span>

                  <h3 className="font-bold text-2xl text-white mb-3 leading-snug drop-shadow-md">
                    {event.title}
                  </h3>

                  <p className="text-sm text-stone-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {event.description}
                  </p>

                  {/* View Gallery */}

                  <div className="mt-5 flex items-center gap-2 text-gold font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                    <span>गॅलरी पहा</span>
                    <ChevronRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Gallery Popup */}

      {selectedImages && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={closeGallery}
        >
          {/* Close Button */}

          <button
            type="button"
            onClick={closeGallery}
            className="absolute right-5 top-5 z-20 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/80"
            aria-label="Close gallery"
          >
            <X size={28} />
          </button>

          {/* Previous Button */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-4 z-20 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/80 md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Selected Image */}

          <div
            className="flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImages[selectedIndex]}
              alt={`Gallery image ${selectedIndex + 1}`}
              className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
            />
          </div>

          {/* Next Button */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-4 z-20 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/80 md:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image Counter */}

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
            {selectedIndex + 1} / {selectedImages.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
