(function () {
    document.addEventListener('click', burgerTrigger)

    function burgerTrigger(e) {

        const burgerClick = e.target.closest('.burger-icon')

        if (burgerClick) {
            e.preventDefault()
            if (document.body.classList.contains('body--opened-menu')) {
                document.body.classList.remove('body--opened-menu')
            }
            else {
                document.body.classList.add('body--opened-menu')
            }
        }
        else return
    }
})();

(function () {
    document.addEventListener('click', tabTrigger)

    function tabTrigger(e) {
        const tabClick = e.target.closest('.example__controls-link')

        if (tabClick) {
            e.preventDefault()

            const tabControl = tabClick.parentElement
            if (tabControl.classList.contains('example__controls-item--active')) {
                return
            }
            else {
                const tabCarrierList = document.getElementsByClassName('example__controls-item--active')

                const tabCarrier = tabCarrierList[0]
                tabCarrier.classList.remove('example__controls-item--active')
                tabControl.classList.add('example__controls-item--active') //переключение цвета 

                let tabList = document.getElementsByClassName('example__tab--active')
                let tabPage = tabList[0]
                tabPage.classList.remove('example__tab--active') // изъятие класса у таба

                const link = tabControl.children[0]
                const tabID = link.getAttribute('href')
                const tab = document.getElementById(tabID)
                tab.classList.add('example__tab--active') // добавление класса новому табу
            }
        }
    }
})();

(function () {
    const swiper = new Swiper('.results__slider', {
        allowTouchMove: false,
        spaceBetween: 100,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})();

(function () {
    const swiper = new Swiper('.certificate__slider', {
        allowTouchMove: true,
        spaceBetween: 0,
        slidesPerView: 1,

        breakpoints: {
            550: { //>=
                slidesPerView: 2,
                spaceBetween: 15
            },
            900: {
                slidesPerView: 3,
                spaceBetween: 25
            }
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})();

(function () {
    const accordionLists = document.querySelectorAll('.accordion__list')
    accordionLists.forEach(el => {
        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion__item--opened .accordion__item-content')

            const accordionControl = e.target.closest('.accordion__item-control')
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement
            const accordionContent = accordionControl.nextElementSibling
            const accordionSvg = accordionControl.children[1]

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion__item--opened')
            if (accordionItem.classList.contains('accordion__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null
            }
        })
    })
})();