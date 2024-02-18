import { DropDown } from "./DropDown";

const selectTourTitle = "Локация для тура";
const selectTourFields = [
  {
    name: "Великобритания",
    value: "Great Britain",
  },
  {
    name: "Россия",
    value: "Russia",
  },
  {
    name: "США",
    value: "USA",
  },
];
const selectPersonsTitle = "Участники";
const selectPersonsFields = [
  {
    name: 4,
    value: 4,
  },
  {
    name: 5,
    value: 5,
  },
  {
    name: 6,
    value: 6,
  },
];

export const StartInfo = () => {
  setTimeout(() => {
    const btn = document.querySelector(`[data-type="modal_btn"]`);
    const modal = document.querySelector(`[data-type="modal_navbar"]`);
    const upper_element = btn.querySelector(`[data-type="upper_element"]`);
    const hidden_element = btn.querySelector(`[data-type="hidden_element"]`);
    const lower_element = btn.querySelector(`[data-type="lower_element"]`);
    btn.addEventListener("click", () => {
      document.body.classList.toggle("overflow-hidden");
      modal.classList.toggle("-translate-x-full");
      upper_element.classList.toggle("-rotate-45");
      upper_element.classList.toggle("relative");
      upper_element.classList.toggle("top-[7px]");
      lower_element.classList.toggle("rotate-45");
      lower_element.classList.toggle("relative");
      lower_element.classList.toggle("bottom-[7px]");
      hidden_element.classList.toggle("opacity-0");
    });
  }, 1);

  return `
        <div class="h-screen pt-[16px] pb-[82px] bg-[url('./assets/StartInfo_bg.jpeg')] bg-cover bg-center">
            <section class="max-w-[1180px] h-full mx-auto grid grid-rows-2 text-White">

                <header class="flex justify-end items-center self-start gap-12">
                    <div class="mr-auto">
                        <img src="./assets/logo.svg" alt="logo">
                    </div>
                    <nav class="">
                        <ol class="md:desktop:flex hidden gap-6 text-link">
                            <li><a href="#" class="hover:text-Honey transition-colors">Главная</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors">Про гида</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors">Программа тура</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors">Стоимость</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors">Блог</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors">Контакты</a></li>
                        </ol>                     
                    </nav>

                    <nav data-type="modal_navbar" class="md:desktop:-translate-x-full w-full p-6 -translate-x-full fixed inset-0 z-[5] bg-Neptune transition-all duration-200">
                        <ol class="flex flex-col gap-5 text-link">
                            <li><a href="#" class="hover:text-Honey transition-colors before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Главная</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Про гида</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Программа тура</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Стоимость</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Блог</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors before:content-['>'] before:mr-1 before:font-semibold before:text-[18px]">Контакты</a></li>
                        </ol>
                    </nav>
                    <button class="md:desktop:inline-block hidden p-[12px_24px] border-[1px] border-Neptune rounded bg-Neptune text-btn hover:bg-White hover:text-Neptune transition-colors">Консультация</button>
                
                    <button data-type="modal_btn" class="md:desktop:hidden w-5 h-5 mr-5 flex flex-col items-end gap-1 z-10">
                        <span data-type="upper_element" class="w-full h-[3px] block bg-Gray transition-all duration-200"></span>
                        <span data-type="hidden_element" class="w-full h-[3px] block bg-Gray transition-all duration-200"></span>
                        <span data-type="lower_element" class="w-full h-[3px] block bg-Gray transition-all duration-200"></span>
                    </button>

                  </header>

                <h1 class="font-NEXT text-[50px] leading-[75px] tracking-wider self-end font-bold">Насладись прогулкой в горах с командой единомышленников</h1>
                
                <div class="relative mt-[41px] self-end"> 
                    <div class="w-full h-full rounded-[10px] bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px] absolute "></div>
                    <form class="w-full p-[40px_42px_40px_42px] grid grid-flow-row grid-cols-2 justify-center md:desktop:grid-cols-[1fr_1fr_1fr_auto] gap-6 relative">

                    ${DropDown(selectTourTitle, selectTourFields, "tour")}

                        <div class="">
                            <label class="md:desktop:w-full p-3 inline-block border-[1px] border-Gray rounded-lg text-select">
                                <input type="date" value="${
                                  getDateNow() || "2024-01-01"
                                }" max="9999-12-31" required class="text-White outline-none bg-transparent cursor-pointer"/>
                                
                                <input type="date" max="9999-12-31" required class="text-White outline-none bg-transparent cursor-pointer"/>
                            </label>
                            <span class="mx-2 block">укажите диапазон</span>
                        </div>
                        
                    ${DropDown(
                      selectPersonsTitle,
                      selectPersonsFields,
                      "persons"
                    )}
                        
                        <input type="submit" value="Найти программу" class="self-start p-[16px_36px] w-fit border-[1px] border-White rounded-[4px] bg-White text-btn text-Neptune cursor-pointer hover:bg-Neptune hover:text-White transition-colors"/>
                    </form>
                    </div>
            </section>
        </div>
        `;
};

function getDateNow() {
  const date = new Date().toISOString().slice(0, 10);
  return date;
}
