export const PhotoReport = () => {
  return `
            <div class="pt-20 pb-[200px]">
                <section class="max-w-[1180px] mx-auto flex flex-col items-center">
                    <h2 class="text-subTitle text-Honey uppercase">фото-отчет</h2>
                    <h1 class="mt-2 text-title">Делимся впечатлениями</h1>
                    <div class="grid grid-rows-2 grid-cols-4 gap-5 mt-10 mb-[50px]">
                        <img src="/assets/gallery_1.png" alt="galery" class="col-start-1 col-end-3">
                        <img src="/assets/gallery_2.png" alt="galery" class="">
                        <img src="/assets/gallery_3.png" alt="galery" class="">
                        <img src="/assets/gallery_4.png" alt="galery" class="">
                        <img src="/assets/gallery_5.png" alt="galery" class="col-start-2 col-end-4">
                        <img src="/assets/gallery_6.png" alt="galery" class="">
                    </div>
                    <button class="p-[16px_36px] border-[1px] border-Neptune rounded bg-Neptune text-btn text-White hover:bg-White hover:text-Neptune  transition-colors">Другие материалы</button>
                </section>
            </div>
        `;
};
