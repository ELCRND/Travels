export const About = () => {
  return `
            <div class="">
                <section class="max-w-[1180px] mx-auto py-[100px] grid grid-cols-2 items-center text-Black">
                    <section class="relative">
                        <div>
                            <img src="./assets/about_back_img.jpeg" alt="mountains">
                        </div>
                        <div class="absolute translate-x-[130px] -translate-y-[274px]">
                            <img src="./assets/about_front_img.png" alt="home">
                            <button class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] hover:scale-125">
                                <img src="./assets/play_icon.svg" alt="play icon">
                            </button>
                        </div>
                    </section>
                    <section>
                        <h2 class="text-subTitle text-Honey uppercase">о нашем походе</h2>
                        <h1 class="text-title">Исследуйте все горные массивы мира вместе с нами</h1>
                        <p>Его корни уходят в один фрагмент классической латыни 45 года н. э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, «consectetur» и занялся его поисками в классической латинской литературе.</p>
                        <button>Программа тура</button>
                    </section>
                </section>
            </div>
        `;
};
