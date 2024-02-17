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
        <div class="max-w-[1180px] mx-auto relative">
          <div class="w-full h-[196px] p-[40px_100px] flex bg-White -translate-y-[150%] absolute shadow-[0_0_10px_rgba(0,0,0,0.7)]">
            <div>
              <h2 class="text-subTitle text-Honey uppercase">актуально</h2>
              <h1 class="mt-2 text-title">Получайте полезные рассылки о путешествиях</h1>
            </div>
          </div>
          <section class="grid grid-cols-[auto_auto_auto] text-White">

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
