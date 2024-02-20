import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
export const PhotoReport = () => {
  setTimeout(() => {
    const swiper = new Swiper(".swiper_gallery", {
      slidesPerView: "auto",
      slidesOffsetAfter: 100,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
    });
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    function handleTabletChange(e) {
      if (e.matches) {
        swiper.disable();
        swiper.setProgress(0, 500);
      } else {
        swiper.enable();
      }
    }
    mediaQuery.addListener(handleTabletChange);
    handleTabletChange(mediaQuery);
  }, 1);
  return `
            <div class="pt-20 pb-[200px]">
                <section class="max-w-[1180px] mx-auto flex flex-col items-center">
                    <h2 class="text-subTitle text-Honey uppercase">фото-отчет</h2>
                    <h1 class="mt-2 text-title">Делимся впечатлениями</h1>
                    <div class="swiper_gallery w-full overflow-hidden">
                        <div class="swiper-wrapper lg:grid grid-rows-2 grid-cols-4 gap-5 mt-10 mb-[50px]">

                            <div class="swiper-slide w-[280px] flex col-start-1 col-end-3">
                                <picture>
                                    <source srcset="/assets/gallery_1.png" media="(min-width: 1024px)">
                                    <source srcset="/assets/gallery_1_mobile.png">
                                    <img src="/assets/gallery_1.png" alt="galery" class="lg:max-w-none">
                                </picture>        
                            </div>

                            <div class="swiper-slide w-[280px] ">
                                <img src="/assets/gallery_2.png" alt="galery" class="lg:max-w-none" >
                            </div>

                            <div class="swiper-slide w-[280px] ">
                                <img src="/assets/gallery_3.png" alt="galery" class="lg:max-w-none" >
                            </div>

                            <div class="swiper-slide w-[280px] ">
                                <img src="/assets/gallery_4.png" alt="galery" class="lg:max-w-none" >
                            </div>

                            <div class="swiper-slide w-[280px] col-start-2 col-end-4">
                                <picture>
                                    <source srcset="/assets/gallery_5.png" media="(min-width: 1024px)">
                                    <source srcset="/assets/gallery_5_mobile.png">
                                    <img src="/assets/gallery_5.png" alt="galery" class="lg:max-w-none" >
                                </picture>
                            </div>

                            <div class="swiper-slide w-[280px] ">
                                <img src="/assets/gallery_6.png" alt="galery" class="lg:max-w-none" >
                            </div>  

                        </div>
                    </div>
                    <button class="p-[16px_36px] border-[1px] border-Neptune rounded bg-Neptune text-btn text-White hover:bg-White hover:text-Neptune  transition-colors">Другие материалы</button>
                </section>
            </div>
        `;
};
