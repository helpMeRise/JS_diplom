const repairTypesPopup = () => {

  const popup = document.querySelector(`.popup-repair-types`),
        navListPopupRepair = document.querySelector(`.nav-list-popup-repair`),
        contentW = popup.querySelector(`.row`);

  document.body.addEventListener(`click`, (event) => {
    let target = event.target;
    if ( target.closest(`.no-overflow`) || target.closest(`.link-list-repair`) ) {
      const postData = () => fetch(`./db/db.json`); 
      postData()
        .then((response) => {
          if ( response.status !== 200 ) {
            throw new Error(`Ошибочка`);
          }
          let current;
          response.json().then(data => {
            data.forEach( (item, i) => {
              current = i;
              let btn = document.createElement(`button`);
              btn.classList.add(`button_o`, `popup-repair-types-nav__item`);
              btn.textContent = item.title;
              navListPopupRepair.appendChild(btn);

              let content = document.createElement(`div`);
              content.classList.add(`popup-repair-types-content`);
              let contentHead = document.createElement(`div`);
              contentHead.classList.add(`popup-repair-types-content__head`, `mobile-hide`);
              let title = document.createElement(`div`);
              title.classList.add(`popup-repair-types-content__head-title`);
              let date = document.createElement(`div`);
              date.classList.add(`popup-repair-types-content__head-date`);
              let tableWrap = document.createElement(`div`);
              tableWrap.classList.add(`popup-repair-types-content-table-wrap`);          
              let tableHead = document.createElement(`table`);
              tableHead.classList.add(`popup-repair-types-content-table__head`);
              let thead = document.createElement(`thead`);
              let trH = document.createElement(`tr`);
              let thH = document.createElement(`th`);
              let thHE = document.createElement(`th`);
              thHE.classList.add(`mobile-hide`);
              let thHC = document.createElement(`th`);
              thHC.classList.add(`mobile-hide`);
              let contentTable = document.createElement(`div`);
              contentTable.classList.add(`popup-repair-types-content-table`);
              let table = document.createElement(`table`);
              table.classList.add(`popup-repair-types-content-table__list`);
              let tbody = document.createElement(`tbody`);
              let tr = document.createElement(`tr`);
              tr.classList.add(`mobile-row`);
              let tdName = document.createElement(`td`);
              tdName.classList.add(`repair-types-name`);
              let tdTitle = document.createElement(`td`);
              tdTitle.classList.add(`mobile-col-title`, `tablet-hide`, `desktop-hide`);
              let tdPrice = document.createElement(`td`);
              tdPrice.classList.add(`mobile-col-title`, `tablet-hide`, `desktop-hide`);
              let tdTt = document.createElement(`td`);
              tdTt.classList.add(`repair-types-value`);
              let tdPp = document.createElement(`td`);
              tdPp.classList.add(`repair-types-value`);

              contentW.appendChild(content);
              content.appendChild(contentHead);
              title.textContent = item.title;
              contentHead.appendChild(title);
              date.textContent = new Date().toDateString();
              contentHead.appendChild(date);
              content.appendChild(tableWrap);
              tableWrap.appendChild(tableHead);
              tableHead.appendChild(thead);
              thead.appendChild(trH);
              thH.textContent = `Виды работ`;
              trH.appendChild(thH);
              thHE.textContent = `Ед. измерения`;
              trH.appendChild(thHE);
              thHC.textContent = `Цена за ед.`;
              trH.appendChild(thHC);
              tableWrap.appendChild(contentTable);
              contentTable.appendChild(table);
              table.appendChild(tbody);

              item.priceList.forEach( (elem) => {
                let tr = document.createElement(`tr`);
                tr.classList.add(`mobile-row`);
                let tdName = document.createElement(`td`);
                tdName.classList.add(`repair-types-name`);
                let tdTitle = document.createElement(`td`);
                tdTitle.classList.add(`mobile-col-title`, `tablet-hide`, `desktop-hide`);
                let tdPrice = document.createElement(`td`);
                tdPrice.classList.add(`mobile-col-title`, `tablet-hide`, `desktop-hide`);
                let tdTt = document.createElement(`td`);
                tdTt.classList.add(`repair-types-value`);
                let tdPp = document.createElement(`td`);
                tdPp.classList.add(`repair-types-value`);
                tbody.appendChild(tr);
                tdName.textContent = elem.typeService;
                tr.appendChild(tdName);
                tr.appendChild(tdTitle);
                tr.appendChild(tdPrice);
                tdTt.textContent = elem.units;
                tr.appendChild(tdTt);
                tdPp.textContent = elem.cost;
                tr.appendChild(tdPp);
              });

              content.style.display = `none`;
            });

            const contentBlocks = popup.querySelectorAll(`.popup-repair-types-content`),
                  btns = popup.querySelectorAll(`.popup-repair-types-nav__item`);
            contentBlocks[current].style.display = `block`;
            popup.addEventListener(`click`, (event) => {
              let target = event.target;
              
              btns.forEach( (item, i) => {
                if (target === item) {
                  contentBlocks[current].style.display = `none`;
                  current = i;
                  contentBlocks[current].style.display = `block`;
                }
              });
            });
            
            

          });
        })
        .catch( (error) => console.log(error));

    }
  });

};
export default repairTypesPopup;