export const DropDown = (title, fields, id) => {
  setTimeout(() => {
    const dropDown = document.querySelector(`#dropDown_${id}`);
    const dropDownList = document.querySelector(`#dropDownList_${id}`);
    const dropDownListItem = document.querySelectorAll(
      `[data-type="item_${id}"]`
    );
    const hiddenInput = document.querySelector(`[name="selected-value_${id}"]`);

    dropDown.addEventListener("click", (e) => {
      e.target.classList.add("after:rotate-[100deg]");
      e.target.classList.add("before:rotate-[-100deg]");
      dropDownList.classList.remove("hidden");
    });

    dropDownListItem.forEach((item) =>
      item.addEventListener("click", (e) => {
        dropDown.classList.remove("after:rotate-[100deg]");
        dropDown.classList.remove("before:rotate-[-100deg]");
        dropDown.innerText = e.target.innerText;
        dropDown.focus();

        hiddenInput.value = e.target.innerText;
      })
    );

    document.addEventListener("click", (e) => {
      if (
        e.target !== dropDown &&
        e.target !== dropDownList.firstElementChild
      ) {
        dropDownList.classList.add("hidden");
        dropDown.classList.remove("after:rotate-[100deg]");
        dropDown.classList.remove("before:rotate-[-100deg]");
      }
    });
  }, 1);

  return `
            <div class="relative">

                    <button 
                        type="button" 
                        id="dropDown_${id}" 
                        class="w-full relative block bg-transparent border-[1px] border-Gray rounded-lg p-[14px_44px_14px_16px] text-left text-select cursor-pointer
                               after:content-[''] after:w-[7px] after:h-[3px] after:absolute after:bg-Gray after:skew-y-[-50deg] after:right-[23px] after:bottom-[24px] 
                               before:content-[''] before:w-[7px] before:h-[3px] before:absolute before:bg-Gray before:skew-y-[50deg] before:right-[16px] before:bottom-[24px]
                               ">${title}
                    </button>

                    <ul id="dropDownList_${id}"class="w-full z-[1] absolute overflow-hidden hidden left-0 top-14 border-[1px] border_Gray text-Neptune bg-White text-select">
                    
                        <li class="p-3 bg-Neptune text-White cursor-not-allowed">${title}</li>

                        ${fields
                          .map(
                            ({ name, value }) => `
                                <li data-type="item_${id}" data-value="${value}" 
                                    class="p-4 m-0 bg-White hover:bg-Neptune-light transition-colors hover:text-White cursor-pointer last-of-type:mb-[1px]">
                                    ${name}</li>`
                          )
                          .join("")}
                          
                    </ul>

                    <input type="text" name="selected-value_${id}" value="" form="tour" reguired class="hidden"/>
                    <span class="m-2">выберите из списка</span>   
           
            </div>
        `;
};
