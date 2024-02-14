import "flowbite";
export const StartInfo = () => {
  return `
        <div class="h-screen pt-[30px] pb-[82px] bg-[url('./assets/StartInfo_bg.jpeg')] bg-cover ">
            <section class="max-w-[1180px] h-full mx-auto text-White">

                <header class="flex justify-end items-center ">
                    <div>
                        <img src="./assets/logo.svg" alt="logo">
                    </div>
                    <nav class="ml-[212px] mr-[49px]">
                        <ol class="flex gap-6 text-link ">
                            <li><a href="#" class="hover:text-Honey">Главная</a></li>
                            <li><a href="#" class="hover:text-Honey">Про гида</a></li>
                            <li><a href="#" class="hover:text-Honey">Программа тура</a></li>
                            <li><a href="#" class="hover:text-Honey">Стоимость</a></li>
                            <li><a href="#" class="hover:text-Honey">Блог</a></li>
                            <li><a href="#" class="hover:text-Honey">Контакты</a></li>
                        </ol>
                    </nav>
                    <button class="p-[12px_24px] border-[1px] border-Neptune rounded bg-Neptune text-btn hover:bg-White hover:text-Neptune">Консультация</button>
                </header>

                <h1 class="font-NEXT text-[50px] leading-[75px] font-bold">Насладись прогулкой в горах с командой единомышленников</h1>
                
                <div class="relative self-end"> 
                    <div class="w-full h-[161px] bg-[#cccaca] opacity-50 rounded-[10px] absolute "></div>
                    <form class="w-full p-[40px_42px_40px_42px] grid grid-cols-[23%_23%_23%_18%] gap-6 relative">

                        <div>
                            <label class="bg-transparent p-3 border-[1px] border-Gray rounded-lg">
                                <select class="relative cursor-pointer text-select p-3 appearance-none bg-transparent outline-none">
                                    <option value="" disabled class="p-3 text-select text-Neptune checked:bg-Neptune  checked:shadow-select ">Локация для тура</option>
                                    <option value="Great Britain" class="p-3 text-select text-Neptune checked:bg-Neptune checked:text-White checked:shadow-select ">Великобритания</option>
                                    <option value="Russia" class="p-3 text-select text-Neptune checked:bg-Neptune checked:text-White checked:shadow-select ">Россия</option>
                                    <option value="USA" class="p-3 block text-select text-Neptune checked:bg-Neptune checked:text-White checked:shadow-select ">США</option>
                                </select>
                            </label>
                            <span class="m-[12px]">выберите из списка</span>
                        </div>

                        
                        <label class="border-[1px] border-Gray flex">
                            <input type="date" class="text-White outline-none bg-transparent"/>
                            <input type="date" class="text-White outline-none bg-transparent"/>
                        </label>
                        

                        <div>
                            <select></select>
                        </div>

                        <input type="submit"/>
                    </form>
                    </div>
            </section>
        </div>
        `;
};
