import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Offer } from "./components/Offer";
import { PhotoReport } from "./components/PhotoReport";
import { Popular } from "./components/Popular";
import { StartInfo } from "./components/StartInfo";
import "./css/style.css";

document.body.innerHTML = `
  <main class="font-Nunito-4">
    ${StartInfo()}
    ${About()}
    ${Offer()}
    ${Popular()}
    ${Blog()}
    ${PhotoReport()}
  </main>
  ${Footer()}
`;

function Footer() {
  return `
      <footer class="pt-[178px] bg-Neptune">
        <div class="max-w-[1180px] mx-auto flex flex-col md:block relative">
          <div class="w-full md:p-[40px_100px] flex flex-col lg:flex-row bg-White md:-translate-y-[75%] md:top-[-50%] rounded-md md:absolute shadow-[0_0_10px_rgba(0,0,0,0.2)]">
            <div class=" ">
              <h2 class="text-[18px] leading-5 font-normal text-Honey uppercase">актуально</h2>
              <h1 class="mt-2 text-[26px] leading-[26px] font-extrabold">Получайте полезные рассылки о путешествиях</h1>
            </div>
            <div class="lg:grid grid-rows-[auto_auto_auto] grid-cols-2 gap-2">
              <h2 class="text-btn font-semibold">Введите e-mail адрес</h2>
              <label class="row-end-3 text-sm font-light">
                <input type="email" placeholder="name@domain.com" class="w-1/2 lg:w-full p-[16px] rounded bg-[#F3F5F4]"/>
              </label>
              <button class="row-end-3 p-[12px_24px] border-[1px] border-Neptune rounded bg-Neptune text-btn text-White hover:bg-White hover:text-Neptune  transition-colors">Подписаться на новости</button>
              <p class="row-end-4 col-start-1 col-end-3 text-[14px] leading-[18px] font-semibold">подписываясь на новости, вы автоматически соглашаетесь с условиями обработки персональных данных и правилами рекламных рассылок</p>
            </div>
          </div>
          <section class="md:grid grid-cols-[auto_auto_auto] text-White">

            <div class="max-w-[480px]">
              <h1 class="text-[20px] leading-6 font-bold">Компания «РумТибет»</h1>
              <p class="mt-[17px] mb-20">Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney.</p>
              <div>
                <span class="underline cursor-pointer hover:text-Honey mr-6">info@domain.com</span>
                <span class="underline cursor-pointer hover:text-Honey">+7 (123) 456-78-90</span>
              </div>
              <ul class="flex gap-5 mt-8 text-[14px] leading-[18px] font-normal">
                <li>
                  <a href="#" class="h-7 w-7 bg-[url('./assets/telegram_logo.svg')] bg-contain inline-block hover:invert-[0.3]"></a>
                </li>
                <li>
                  <a href="#" class="h-7 w-7 bg-[url('./assets/vk_logo.svg')] bg-contain inline-block hover:invert-[0.3]"></a>
                </li>
                <li>
                  <a href="#" class="h-7 w-7 bg-[url('./assets/xz_logo.svg')] bg-contain inline-block hover:invert-[0.3]"></a>
                </li>
                <li>
                  <a href="#" class="h-7 w-7 bg-[url('./assets/skype_logo.svg')] bg-contain inline-block hover:invert-[0.3]"></a>
                </li>
                
              </ul>
            </div>

            <div>
              <h1 class="text-[20px] leading-6 font-bold">Наши услуги</h1>
              <ul class="mt-5 flex flex-col gap-4 text-[14px] leading-[18px] font-normal">
                <li class="hover:text-Honey cursor-pointer before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Прогулки в горы летом</li>
                <li class="hover:text-Honey cursor-pointer before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Зимние походы в горы</li>
                <li class="hover:text-Honey cursor-pointer before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Посещение храмов в горах</li>
                <li class="hover:text-Honey cursor-pointer before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Экстремальные виды туризма</li>
                <li class="hover:text-Honey cursor-pointer before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Походы в джунглях Амазонии</li>
                <li class="hover:text-Honey cursor-pointer before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Поездка в Африку</li>
              </ul>
            </div>

            <div>
              <h1 class="text-[20px] leading-6 font-bold">Важно для путешествий</h1>
              <ul class="mt-5 flex flex-col gap-4 text-[14px] leading-[18px] font-normal">
                <li class="hover:text-Honey cursor-pointer before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Как собрать в долгий поход?</li>
                <li class="hover:text-Honey cursor-pointer before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Жизненно важные предметы для похода</li>
                <li class="hover:text-Honey cursor-pointer before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Медицинская страховка, гарантии безопасности</li>
                <li class="hover:text-Honey cursor-pointer before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Если вы врач - загляните сюда</li>
              </ul>
            </div>

          </section>
          </div>
          <div class="w-full h-[66px] mt-20 flex items-center bg-[#18121E] text-White text-[14px] leading-[18px] font-semibold">
            <div class="max-w-[1180px] w-full mx-auto flex justify-between">
              <span>ИП Константинопольский К.К., 2023</span>
              <a class="underline cursor-pointer">Политика обработки персональных данных</a>
            </div>
          </div>
      </footer>
    `;
}
