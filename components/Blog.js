export const Blog = () => {
  return `
                <div class="pt-20 pb-[100px] bg-[#F3F5F4]">
                    <section class="max-w-[1180px] mx-auto flex flex-col items-center">
                        <h2 class="text-subTitle text-Honey uppercase">делимся впечатлениями</h2>
                        <h1 class="mt-2 text-title">Блог о путешествиях</h1>

                        <div class="grid grid-rows-2 grid-cols-2 gap-5 mt-10 mb-[50px]">
                            <article class="max-h-[312px] grid grid-cols-[auto_1fr] gap-6 p-4 rounded-[10px] bg-White">
                                <div>
                                    <img src="./assets/italy.png" alt="italy city">
                                </div>
                                <div class="grid grid-flow-row overflow-hidden py-4">
                                    <h1 class="text-2xl font-bold hover:underline cursor-pointer">Красивая Италия, какая она в реальности?</h1>
                                    <p class="text-sm font-normal text-pretty">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                                    <div class="flex justify-between self-end">
                                        <span class="text-sm font-bold text-Honey">01/04/2023</span>
                                        <a class="text-sm font-bold hover:underline cursor-pointer">читать статью</a>
                                    </div>
                                </div>
                            </article>
                            
                            <article class="max-h-[312px] grid grid-cols-[auto_1fr] gap-6 p-4 rounded-[10px] bg-White">
                                <div>
                                    <img src="./assets/italy.png" alt="italy city">
                                </div>
                                <div class="grid grid-flow-row overflow-hidden py-4">
                                    <h1 class="text-2xl font-bold hover:underline cursor-pointer">Долой сомнения! Весь мир открыт для вас!</h1>
                                    <p class="text-sm font-normal text-pretty overflow-hidden">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...</p>
                                    <div class="flex justify-between self-end">
                                        <span class="text-sm font-bold text-Honey">01/04/2023</span>
                                        <a class="text-sm font-bold hover:underline cursor-pointer">читать статью</a>
                                    </div>
                                </div>
                            </article>
                            
                            <article class="max-h-[312px] grid grid-cols-[auto_1fr] gap-6 p-4 rounded-[10px] bg-White">
                                <div>
                                    <img src="./assets/italy.png" alt="italy city">
                                </div>
                                <div class="grid grid-flow-row overflow-hidden py-4">
                                    <h1 class="text-2xl font-bold hover:underline cursor-pointer">Как подготовиться к путешествию в одиночку? </h1>
                                    <p class="text-sm font-normal text-pretty">Для современного мира базовый вектор развития предполагает.</p>
                                    <div class="flex justify-between self-end">
                                        <span class="text-sm font-bold text-Honey">01/04/2023</span>
                                        <a class=" text-sm font-bold hover:underline cursor-pointer">читать статью</a>
                                    </div>
                                    </div>
                            </article>
                            
                            <article class="max-h-[312px] grid grid-cols-[auto_1fr] gap-6 p-4 rounded-[10px] bg-White">
                                <div>
                                    <img src="./assets/italy.png" alt="italy city">
                                </div>
                                <div class="grid grid-flow-row overflow-hidden py-4">
                                    <h1 class="text-2xl font-bold hover:underline cursor-pointer">Индия ... летим?</h1>
                                    <p class="text-sm font-normal text-pretty">Для современного мира базовый.</p>
                                    <div class="flex justify-between self-end">
                                        <span class="text-sm font-bold text-Honey">01/04/2023</span>
                                        <a class="text-sm font-bold hover:underline cursor-pointer">читать статью</a>
                                    </div>
                                </div>
                            </article>
                            
                        </div>
                        <button class="p-[16px_36px] border-[1px] border-Neptune rounded bg-Neptune text-btn text-White hover:bg-White hover:text-Neptune  transition-colors">Другие материалы</button>

                    </section>
                </div>
            `;
};
