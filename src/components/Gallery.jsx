import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import eventImage1 from "../assets/images/events/farming-seminar-1.jpeg";
import eventImage2 from "../assets/images/events/farming-seminar-2.jpeg";
import eventImage3 from "../assets/images/events/farming-seminar-3.jpeg";

import umabrthavarImage1 from "../assets/images/events/vayachya-umabrthavar-1.jpeg";
import umabrthavarImage2 from "../assets/images/events/vayachya-umabrthavar-2.jpeg";
import umabrthavarImage3 from "../assets/images/events/vayachya-umabrthavar-3.jpeg";

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
  {
    key: "vayachyaUmbrathavar",
    images: [umabrthavarImage1, umabrthavarImage2, umabrthavarImage3],
    year: "२०२६",
    date: "१६ सप्टेंबर २०२६",
    location: "नारशिंगे",
    speaker: "राहुल दुधाळे",
    title: "वयाच्या उंबरठ्यावर",
    description:
      "किशोरवयात होणारे शारीरिक व भावनिक बदल, आरोग्य, आत्मविश्वास आणि योग्य मार्गदर्शन याविषयी जागरूकता निर्माण करणारा संवादात्मक कार्यक्रम.",
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
        className="relative overflow-hidden bg-stone-50 py-24"
      >
        <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-stone-100 to-transparent" />

        <div className="container-wide relative z-10 mx-auto">
          {/* Section Header */}

          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-gold">
              कार्यक्रम आणि गॅलरी
            </span>

            <h2 className="mb-6 text-4xl font-bold text-forest md:text-5xl">
              बदलाची प्रेरणा देणारे क्षण
            </h2>

            <p className="text-lg text-stone-600">
              अधिक सक्षम गाव आणि सशक्त ग्रामीण समुदाय घडवण्याच्या दिशेने
              प्रत्येक कार्यक्रम हे एक महत्त्वाचे पाऊल आहे.
            </p>
          </div>

          {/* Events */}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <motion.div
                key={event.key}
                className="group relative h-[450px] cursor-pointer overflow-hidden rounded-3xl shadow-lg"
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
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Gradient Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#011812]/95 via-[#011812]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}

                <div className="absolute inset-0 flex translate-y-6 flex-col justify-end p-8 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="mb-4 w-fit rounded-full bg-gold/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                    {event.year} • {event.location}
                  </span>

                  <h3 className="mb-3 text-2xl font-bold leading-snug text-white drop-shadow-md">
                    {event.title}
                  </h3>

                  {event.date && (
                    <p className="mb-2 text-sm font-semibold text-amber-300">
                      {event.date}
                    </p>
                  )}

                  {event.speaker && (
                    <p className="mb-3 text-sm font-medium text-white">
                      वक्ते: {event.speaker}
                    </p>
                  )}

                  <p className="text-sm leading-relaxed text-stone-200 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                    {event.description}
                  </p>

                  {/* View Gallery */}

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-gold">
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
            aria-label="गॅलरी बंद करा"
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
            aria-label="मागील फोटो"
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
              alt={`गॅलरी फोटो ${selectedIndex + 1}`}
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
            aria-label="पुढील फोटो"
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
