import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, Pagination, EffectFade } from "swiper/modules";

interface props {
  images: string[];
  fade?: boolean;
}
export default function ImgSlider2({ images, fade }: props) {
  const modules =
    fade != undefined
      ? [EffectFade, Pagination, Navigation]
      : [Pagination, Navigation];
  const effect = fade != undefined ? "fade" : "";

  return (
    <div className="min-w-full overflow-hidden relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        modules={modules}
        effect={effect}
        className="mySwiper w-full lg:max-w-[90%] 2xl:max-w-[80%] rounded-2xl flex items-center aspect-video"
      >
        {images.map((curr, index) => {
          return (
            // item
            <SwiperSlide key={index} className="aspect-video overflow-y-scroll">
              <picture>
                <source srcSet={curr} />
                <img
                  alt={`${index}.jpg`}
                  className="min-w-full min-h-full mx-auto bg-white"
                  style={{ pointerEvents: "none" }}
                />
              </picture>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
