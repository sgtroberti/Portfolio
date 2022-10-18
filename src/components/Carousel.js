import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Carousel = ({ imagesVector }) => {
  return (
    <Box p={[5, 20]}>
      <Text fontSize={[26, 40]}>
        Minhas <strong>stacks</strong>:
      </Text>
      <Box pt={[3, 12]}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <Flex justifyContent={"center"} alignItems={"center"}>
            {imagesVector.map((img) => {
              return (
                <SwiperSlide key={img.tech}>
                  <Flex flexDirection={"column"} alignItems={"center"}>
                    <Image h={["80px", "250px"]} src={img.img} />
                    <Text>{img.tech}</Text>
                  </Flex>
                </SwiperSlide>
              );
            })}
          </Flex>
        </Swiper>
      </Box>
    </Box>
  );
};
export default Carousel;