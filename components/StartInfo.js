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
  return `
        <div class="h-screen pt-[16px] pb-[82px] bg-[url('./assets/StartInfo_bg.jpeg')] bg-cover bg-center">
            <section class="max-w-[1180px] h-full mx-auto grid grid-rows-2 text-White">

                <header class="flex justify-end items-center self-start">
                    <div>
                        <img src="./assets/logo.svg" alt="logo">
                    </div>
                    <nav class="ml-[212px] mr-[49px]">
                        <ol class="flex gap-6 text-link">
                            <li><a href="#" class="hover:text-Honey transition-colors">Главная</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors">Про гида</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors">Программа тура</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors">Стоимость</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors">Блог</a></li>
                            <li><a href="#" class="hover:text-Honey transition-colors">Контакты</a></li>
                        </ol>
                    </nav>
                    <button class="p-[12px_24px] border-[1px] border-Neptune rounded bg-Neptune text-btn hover:bg-White hover:text-Neptune  transition-colors">Консультация</button>
                </header>

                <h1 class="font-NEXT text-[50px] leading-[75px] tracking-wider self-end font-bold">Насладись прогулкой в горах с командой единомышленников</h1>
                
                <div class="relative mt-[41px] self-end"> 
                    <div class="w-full h-[161px] rounded-[10px] bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px] absolute "></div>
                    <form class="w-full p-[40px_42px_40px_42px] grid grid-cols-[1fr_1fr_1fr_auto] gap-6 relative">

                    ${DropDown(selectTourTitle, selectTourFields, "tour")}

                        <div>
                            <label class="w-full p-3 border-[1px] border-Gray rounded-lg flex text-select">
                                <input type="date" value="${
                                  getDateNow() || "2024-01-01"
                                }" max="9999-12-31" required class="text-White outline-none bg-transparent cursor-pointer"/>
                                <input type="date" max="9999-12-31" required class="text-White outline-none bg-transparent cursor-pointer"/>
                            </label>
                            <span class="m-2">укажите диапазон</span>
                        </div>
                        
                    ${DropDown(
                      selectPersonsTitle,
                      selectPersonsFields,
                      "persons"
                    )}
                        
                        <input type="submit" value="Найти программу" class="self-start p-[16px_36px] border-[1px] border-White rounded-[4px] bg-White text-btn text-Neptune cursor-pointer hover:bg-Neptune hover:text-White transition-colors"/>
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
