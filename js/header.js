"use strict";

document.addEventListener('DOMContentLoaded', () =>{
    
    const burgerBtn = document.querySelector('.header__burger');
    const nav = document.querySelector('.nav');
    const navList = document.querySelectorAll('.nav__item');
    const mainHtml = document.querySelector('.main');
    let countBurger = 0;
    
    navList.forEach(item =>{
        item.addEventListener('click', () =>{
            renderMenu();
        });
    });
    burgerBtn.addEventListener('click', () =>{
        renderMenu();
    });
    
    
    function renderMenu(){
        if (countBurger == 0){
            nav.classList.add('visible');
            burgerBtn.classList.add('active');
            if (mainHtml){
                mainHtml.classList.add('none-visible');
            }
            countBurger++;
        } else {
            nav.classList.remove('visible');
            burgerBtn.classList.remove('active');
            if (mainHtml){
                mainHtml.classList.remove('none-visible');
            }
            
            countBurger--;
        }
    }
    
    });
