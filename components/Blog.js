import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const Blog = () => {
  setTimeout(() => {
    const swiper = new Swiper(".swiper_blog", {
      slidesPerView: "auto",
      slidesOffsetAfter: 100,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
    });
    const mediaQuery = window.matchMedia("(min-width: 768px)");
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
                <div class="pt-20 pb-[100px] bg-[#F3F5F4]">
                    <section class="max-w-[1180px] mx-auto flex flex-col items-center">
                        <h2 class="text-subTitle text-Honey uppercase">делимся впечатлениями</h2>
                        <h1 class="mt-2 text-title">Блог о путешествиях</h1>

                        <div class="swiper_blog w-screen lg:w-full mt-10 mb-[50px] overflow-hidden">
                            <div class="swiper-wrapper md:flex md:flex-col lg:grid grid-rows-2 grid-cols-2 gap-5">
                                
                                <div class="swiper-slide w-[285px] md:w-full">
                                    <article class="grid grid-rows-[280px_216px] md:p-4 md:grid-rows-1 md:grid-cols-[auto_1fr] rounded-[10px] bg-White">
                                        <div>
                                            <img src="./assets/italy.png" alt="italy city" class="w-full h-full">
                                        </div>
                                        <div class="p-4 grid gap-4">
                                            <h1 class="text-2xl font-bold hover:underline cursor-pointer">Красивая Италия, какая она в реальности?</h1>
                                            <p class="max-h-20 overflow-hidden text-sm font-normal text-pretty">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                                            <div class="flex justify-between self-end">
                                                <span class="text-sm font-bold text-Honey">01/04/2023</span>
                                                <a class="text-sm font-bold  text-Neptune hover:underline cursor-pointer">читать статью</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                
                                <div class="swiper-slide w-[285px] md:w-full">
                                    <article class="grid grid-rows-[280px_216px] md:p-4 md:grid-rows-1 md:grid-cols-[auto_1fr] rounded-[10px] bg-White">
                                        <div>
                                            <img src="./assets/italy.png" alt="italy city" class="w-full h-full">
                                        </div>
                                        <div class="p-4 grid gap-4">
                                            <h1 class="text-2xl font-bold hover:underline cursor-pointer">Долой сомнения! Весь мир открыт для вас!</h1>
                                            <p class="max-h-20 md:h-auto overflow-hidden text-sm font-normal text-pretty">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...</p>
                                            <div class="flex justify-between self-end">
                                                <span class="text-sm font-bold text-Honey">01/04/2023</span>
                                                <a class="text-sm font-bold text-Neptune hover:underline cursor-pointer">читать статью</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                
                                <div class="swiper-slide w-[285px] md:w-full">
                                    <article class="grid grid-rows-[280px_216px] md:p-4 md:grid-rows-1 md:grid-cols-[auto_1fr] rounded-[10px] bg-White">
                                        <div>
                                            <img src="./assets/italy.png" alt="italy city" class="w-full h-full">
                                        </div>
                                        <div class="p-4 grid gap-4">
                                            <h1 class="text-2xl font-bold hover:underline cursor-pointer">Как подготовиться к путешествию в одиночку? </h1>
                                            <p class="max-h-20 md:h-auto overflow-hidden text-sm font-normal text-pretty">Для современного мира базовый вектор развития предполагает.</p>
                                            <div class="flex justify-between self-end">
                                                <span class="text-sm font-bold text-Honey">01/04/2023</span>
                                                <a class=" text-sm font-bold text-Neptune  hover:underline cursor-pointer">читать статью</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                
                                <div class="swiper-slide w-[285px] md:w-full">
                                    <article class="grid grid-rows-[280px_216px] md:p-4 md:grid-rows-1 md:grid-cols-[auto_1fr] rounded-[10px] bg-White">
                                        <div>
                                            <img src="./assets/italy.png" alt="italy city" class="w-full h-full">
                                        </div>
                                        <div class="p-4 grid gap-4">
                                            <h1 class="text-2xl font-bold hover:underline cursor-pointer">Индия ... летим?</h1>
                                            <p class="max-h-20 md:h-auto overflow-hidden text-sm font-normal text-pretty">Для современного мира базовый.</p>
                                            <div class="flex justify-between self-end">
                                                <span class="text-sm font-bold text-Honey">01/04/2023</span>
                                                <a class="text-sm font-bold  text-Neptune hover:underline cursor-pointer">читать статью</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                            </div>
                            
                        </div>
                        <button class="p-[16px_36px] border-[1px] border-Neptune rounded bg-Neptune text-btn text-White hover:bg-White hover:text-Neptune  transition-colors">Другие материалы</button>

                    </section>
                </div>
            `;
};
