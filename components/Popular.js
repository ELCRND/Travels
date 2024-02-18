export const Popular = () => {
  return `
            <div>
                <section class="max-w-[1180px] mx-auto py-20 flex flex-col items-center">
                    <h2 class="text-subTitle text-Honey uppercase">по версии отдыхающих</h2>
                    <h1 class="mt-2 text-title">Популярные направления</h1>
                    
                    <section class="w-full h-[500px] my-[50px] grid grid-cols-3 gap-5">
                        
                        <div class="h-full rounded-[32px] overflow-hidden bg-[url('./assets/lake.png')] bg-no-repeat relative">  
                            <div class="flex items-center gap-2 p-2 absolute right-0 top-[50px] rounded-l-[4px] text-[14px] leading-[18px] font-bold  bg-[rgba(255,255,255,0.2)] backdrop-blur-[4px]">
                                <img src="./assets/star.svg" alt="star icon">
                                <span>4.9</span>
                            </div>

                            <section class="h-full p-[20px_30px] absolute left-0 top-[80%] bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px] text-White hover:top-0 transition-all ease-in-out duration-[2s]">                               
                                
                                <header class="flex justify-between">
                                    <div class="flex flex-col">
                                        <span class="text-[24px] leading-7 font-bold">Озеро возле гор</span>
                                        <span class="text-[14px] leading-[18px] font-normal">романтическое приключение</span>
                                    </div>
                                    <div class="lg:p-[8px_16px] flex items-center rounded text-[20px] leading-[24px] font-bold bg-[rgba(255,255,255,0.2)] backdrop-blur-[4px]">480 $</div>
                                </header>

                                <p class="mt-[38px] lg:mb-[105px] text-base [text-shadow:_2px_1px_0_rgba(0,0,0,0.8)]">
                                    Его корни уходят в один фрагмент классической латыни 45 года н.э., 
                                    то есть более двух тысячелетий назад. Ричард МакКлинток, профессор 
                                    латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых 
                                    странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в 
                                    классической латинской литературе.
                                </p>
                                <button class="p-[12px_24px] border-[1px] border-Neptune rounded bg-Neptune text-White text-btn cursor-pointer transition-colors hover:bg-White hover:text-Neptune">Программа тура</button>
                            </section>

                        </div>



                        <div class="h-full rounded-[32px] overflow-hidden bg-[url('./assets/night.png')] bg-no-repeat relative">  
                            <div class="flex items-center gap-2 p-2 absolute right-0 top-[50px] rounded-l-[4px] text-[14px] leading-[18px] font-bold  bg-[rgba(255,255,255,0.2)] backdrop-blur-[4px]">
                                <img src="./assets/star.svg" alt="star icon">
                                <span>4.5</span>
                            </div>

                            <section class="h-full p-[20px_30px] absolute left-0 top-[80%] bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px] text-White hover:top-0 transition-all ease-in-out duration-[2s]">                               
                                
                                <header class="flex justify-between">
                                    <div class="flex flex-col">
                                        <span class="text-[24px] leading-7 font-bold">Ночь в горах</span>
                                        <span class="text-[14px] leading-[18px] font-normal">в компании друзей</span>
                                    </div>
                                    <div class="p-[8px_16px] flex items-center rounded text-[20px] leading-[24px] font-bold bg-[rgba(255,255,255,0.2)] backdrop-blur-[4px]">500 $</div>
                                </header>

                                <p class="mt-[38px] mb-[105px] text-base [text-shadow:_2px_1px_0_rgba(0,0,0,0.8)]">
                                    Его корни уходят в один фрагмент классической латыни 45 года н.э., 
                                    то есть более двух тысячелетий назад. Ричард МакКлинток, профессор 
                                    латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых 
                                    странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в 
                                    классической латинской литературе.
                                </p>
                                <button class="p-[12px_24px] border-[1px] border-Neptune rounded bg-Neptune text-White text-btn cursor-pointer transition-colors hover:bg-White hover:text-Neptune">Программа тура</button>
                            </section>

                        </div>



                        <div class="h-full rounded-[32px] overflow-hidden bg-[url('./assets/yoga.png')] bg-no-repeat relative">  
                            <div class="flex items-center gap-2 p-2 absolute right-0 top-[50px] rounded-l-[4px] text-[14px] leading-[18px] font-bold  bg-[rgba(255,255,255,0.2)] backdrop-blur-[4px]">
                                <img src="./assets/star.svg" alt="star icon">
                                <span>5.0</span>
                            </div>

                            <section class="h-full p-[20px_30px] absolute left-0 top-[80%] bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px] text-White hover:top-0 transition-all ease-in-out duration-[2s]">                               
                                
                                <header class="flex justify-between">
                                    <div class="flex flex-col">
                                        <span class="text-[24px] leading-7 font-bold">Йога в горах</span>
                                        <span class="text-[14px] leading-[18px] font-normal">для тех, кто забоится о себе</span>
                                    </div>
                                    <div class="p-[8px_16px] flex items-center rounded text-[20px] leading-[24px] font-bold bg-[rgba(255,255,255,0.2)] backdrop-blur-[4px]">230 $</div>
                                </header>

                                <p class="mt-[38px] mb-[105px] text-base [text-shadow:_2px_1px_0_rgba(0,0,0,0.8)]">
                                    Его корни уходят в один фрагмент классической латыни 45 года н.э., 
                                    то есть более двух тысячелетий назад. Ричард МакКлинток, профессор 
                                    латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых 
                                    странных слов в Lorem Ipsum, "consectetur"и занялся его поисками в 
                                    классической латинской литературе.
                                </p>
                                <button class="p-[12px_24px] border-[1px] border-Neptune rounded bg-Neptune text-White text-btn cursor-pointer transition-colors hover:bg-White hover:text-Neptune">Программа тура</button>
                            </section>

                        </div>

 
                        
                        

                    </section>
                    <button class="p-[16px_36px] border-[1px] border-Neptune rounded bg-Neptune text-White text-btn cursor-pointer transition-colors hover:bg-White hover:text-Neptune">Рейтинг направлений</button>
                </section>
            </div>
        `;
};
