export const About = () => {
  return `
            <div class="">
                <section class="max-w-[1180px] mx-auto pt-[100px] pb-[226px] grid grid-cols-2 gap-[120px] items-center text-Black">
                    <section class="relative">
                        <div>
                            <img src="./assets/about_back_img.png" alt="mountains" class="drop-shadow-[3px_3px_10px_rgba(0,0,0,0.6)]">
                        </div>
                        <div class="absolute translate-x-[130px] -translate-y-[274px]">
                            <img src="./assets/about_front_img.png" alt="home" class="relative drop-shadow-[3px_3px_10px_rgba(0,0,0,0.6)]">
                            <button class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] hover:scale-125">
                                <img src="./assets/play_icon.svg" alt="play icon">
                            </button>
                        </div>
                    </section>
                    <section>
                        <h2 class="text-subTitle text-Honey uppercase">о нашем походе</h2>
                        <h1 class="mt-2 mb-10 text-title">Исследуйте все горные массивы мира вместе с нами</h1>
                        <p class="mb-10 text-p">Его корни уходят в один фрагмент классической латыни 45 года н. э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, «consectetur» и занялся его поисками в классической латинской литературе.</p>
                        <button class="p-[16px_36px] border-[1px] border-Neptune rounded bg-Neptune text-White text-btn cursor-pointer transition-colors hover:bg-White hover:text-Neptune">Программа тура</button>
                    </section>
                </section>
            </div>
        `;
};
