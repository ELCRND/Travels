import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

export const Blog = () => {
  setTimeout(() => {
    const swiper = new Swiper(".swiper_blog", {
      setWrapperSize: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
    });
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    function handleTabletChange(e) {
      if (e.matches) {
        console.log("dis");
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
                            <div class="swiper-wrapper max-w-[1180px] h-[550px] lg:h-auto lg:flex lg:flex-col md:desktop:grid grid-rows-2 grid-cols-2 gap-5">
                                <article class="swiper-slide max-w-[285px] h-full max-h-[522px] mr-6 lg:max-w-full lg:max-h-[312px] lg:grid grid-cols-[auto_1fr] gap-6 lg:p-4 rounded-[10px] bg-White">
                                    <div>
                                        <img src="./assets/italy.png" alt="italy city" class="w-full max-h-[280px]">
                                    </div>
                                    <div class="grid grid-rows-[auto_auto_auto] items-center overflow-hidden p-4">
                                        <h1 class="text-2xl font-bold hover:underline cursor-pointer">Красивая Италия, какая она в реальности?</h1>
                                        <p class="max-h-20 overflow-hidden text-sm font-normal text-pretty">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                                        <div class="flex justify-between self-end">
                                            <span class="text-sm font-bold text-Honey">01/04/2023</span>
                                            <a class="text-sm font-bold  text-Neptune hover:underline cursor-pointer">читать статью</a>
                                        </div>
                                    </div>
                                </article>
                                
                                <article class="swiper-slide max-w-[285px] h-full max-h-[522px] mr-6 lg:max-w-full lg:max-h-[312px] lg:grid grid-cols-[auto_1fr] gap-6 lg:p-4 rounded-[10px] bg-White">
                                    <div>
                                        <img src="./assets/italy.png" alt="italy city" class="w-full max-h-[280px]">
                                    </div>
                                    <div class="grid grid-rows-[auto_auto_auto] items-center overflow-hidden p-4">
                                        <h1 class="text-2xl font-bold hover:underline cursor-pointer">Долой сомнения! Весь мир открыт для вас!</h1>
                                        <p class="max-h-20 text-sm font-normal text-pretty overflow-hidden">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...</p>
                                        <div class="flex justify-between self-end">
                                            <span class="text-sm font-bold text-Honey">01/04/2023</span>
                                            <a class="text-sm font-bold text-Neptune hover:underline cursor-pointer">читать статью</a>
                                        </div>
                                    </div>
                                </article>
                                
                                <article class="swiper-slide max-w-[285px] h-full max-h-[522px] mr-6 lg:max-w-full lg:max-h-[312px] lg:grid grid-cols-[auto_1fr] gap-6 lg:p-4 rounded-[10px] bg-White">
                                    <div>
                                        <img src="./assets/italy.png" alt="italy city" class="w-full max-h-[280px]">
                                    </div>
                                    <div class="grid grid-rows-[auto_auto_auto] items-center overflow-hidden p-4">
                                        <h1 class="text-2xl font-bold hover:underline cursor-pointer">Как подготовиться к путешествию в одиночку? </h1>
                                        <p class="max-h-20 overflow-hidden text-sm font-normal text-pretty">Для современного мира базовый вектор развития предполагает.</p>
                                        <div class="flex justify-between self-end">
                                            <span class="text-sm font-bold text-Honey">01/04/2023</span>
                                            <a class=" text-sm font-bold text-Neptune  hover:underline cursor-pointer">читать статью</a>
                                        </div>
                                        </div>
                                </article>
                                
                                <article class="swiper-slide max-w-[285px] h-full max-h-[522px] mr-6 lg:max-w-full lg:max-h-[312px] lg:grid grid-cols-[auto_1fr] gap-6 lg:p-4 rounded-[10px] bg-White">
                                    <div>
                                        <img src="./assets/italy.png" alt="italy city" class="w-full max-h-[280px]">
                                    </div>
                                    <div class="grid grid-rows-[auto_auto_auto] items-center overflow-hidden p-4">
                                        <h1 class="text-2xl font-bold hover:underline cursor-pointer">Индия ... летим?</h1>
                                        <p class="max-h-20 overflow-hidden text-sm font-normal text-pretty">Для современного мира базовый.</p>
                                        <div class="flex justify-between self-end">
                                            <span class="text-sm font-bold text-Honey">01/04/2023</span>
                                            <a class="text-sm font-bold  text-Neptune hover:underline cursor-pointer">читать статью</a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                            
                        </div>
                        <button class="p-[16px_36px] border-[1px] border-Neptune rounded bg-Neptune text-btn text-White hover:bg-White hover:text-Neptune  transition-colors">Другие материалы</button>

                    </section>
                </div>
            `;
};
