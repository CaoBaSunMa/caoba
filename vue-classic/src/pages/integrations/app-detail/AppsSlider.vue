<template>
  <swiper
    :spaceBetween="10"
    :thumbs="{ swiper: thumbsSwiper }"
    :modules="modules"
    class="mt-6"
  >
    <swiper-slide>
      <img src="@/assets/img/slide1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/slide2.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/slide3.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/slide4.jpg" />
    </swiper-slide>
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="thumbs-wrap"
  >
    <swiper-slide>
      <img src="@/assets/img/slide1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/slide2.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/slide3.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/img/slide4.jpg" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
};
</script>
