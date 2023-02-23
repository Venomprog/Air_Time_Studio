const btnList = document.querySelectorAll('.projects__item');
const mngList = document.querySelectorAll('.mng--item');
const dsgList = document.querySelectorAll('.design--item');
const cbrList = document.querySelectorAll('.cyber--item');
const prdList = document.querySelectorAll('.prod--item');
const allFiltersList = [mngList, dsgList, cbrList, prdList];

btnList.forEach((item) =>{
    item.addEventListener('click', () =>{
        btnList.forEach( (item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
        if (item.dataset.filter == "all"){
            for (let keys of allFiltersList){
                keys.forEach((key) =>{
                    key.classList.remove('hidden');
                });
            }
        } else {
            for (let keys of allFiltersList){
                keys.forEach((key) =>{
                    key.classList.add('hidden');
                });
            }
        }
        

        if (item.dataset.filter == "mng"){
            mngList.forEach((key) =>{
                key.classList.remove('hidden');
            });
        } else if (item.dataset.filter == "design"){
            dsgList.forEach((key) =>{
                key.classList.remove('hidden');
            });
        } else if (item.dataset.filter == "cyber"){
            cbrList.forEach((key) =>{
                key.classList.remove('hidden');
            });
        } else if (item.dataset.filter == "prod"){
            prdList.forEach((key) =>{
                key.classList.remove('hidden');
            });
        }
    });
});