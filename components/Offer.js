export const Offer = () => {
  return `
            <div class="bg-[#F3F5F4]">
                <article class="max-w-[1180px] mx-auto py-20 px-28 flex flex-col lg:grid grid-rows-1 grid-cols-2 lg:px-0">
                    <section class="max-w-[580px]">
                        <h2 class="text-subTitle text-Honey uppercase">наше предложение</h2>
                        <h1 class="mt-2 text-title">Лучшие программы для тебя</h1>
                        <p class="my-10 text-p">Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.</p>
                        <ul>
                            <li class="mb-10 pl-[66px] bg-[url('./assets/gid_logo.svg')] bg-no-repeat bg-left">
                                <h3 class="text-[18px] leading-5 font-bold">Опытный гид</h3>
                                <p class="text-sm font-normal">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                            </li>
                            <li class="mb-10 pl-[66px] bg-[url('./assets/security_logo.svg')] bg-no-repeat bg-left">
                                <h3 class="text-[18px] leading-5 font-bold">Безопасный поход</h3>
                                <p class="text-sm font-normal">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                            </li>
                            <li class="mb-10 pl-[66px] bg-[url('./assets/price_logo.svg')] bg-no-repeat bg-left">
                                <h3 class="text-[18px] leading-5 font-bold">Лояльные цены</h3>
                                <p class="text-sm font-normal">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                            </li>
                        </ul>
                        <button class="p-[16px_36px] border-[1px] border-Neptune rounded bg-Neptune text-White text-btn cursor-pointer transition-colors hover:bg-White hover:text-Neptune">Стоимость программ</button>
                    </section >
                    
                    <section >
                        <div class="max-w-[510px] h-[510px] lg:h-full mt-10 mx-auto lg:ml-[auto] bg-[url('./assets/programm_tour.png')] bg-no-repeat bg-contain"></div>
                    </section>
                    
                </article>
            </div>
        `;
};
