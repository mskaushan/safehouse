function addSwiper () {
    new Swiper('.section-home_swiper', {
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        grabCursor: true,
        loop: true,
    });
    
    new Swiper('.section-about__circles', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        simulateTouch: false,
    });
}

function closeMenu () {
    [].forEach.call(document.querySelectorAll('.menu-item'), function (el){
        el.addEventListener('click', function(e){
            document.querySelector('input[type="checkbox"].input').checked = false;
        });
    });
}

function closeAccordion () {
    document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
        item.addEventListener('click', () => {
            const parent = item.parentNode;

            if (parent.classList.contains('accordion-item--active')) {
                parent.classList.remove('accordion-item--active');
            } else {
                document
                    .querySelectorAll('.accordion-item')
                    .forEach((child) => child.classList.remove('accordion-item--active'))
                
                parent.classList.add('accordion-item--active')
            }
        })
    )
}

function mask () {
    let tel = document.querySelectorAll('.tel');
    for (let i = 0; i < tel.length; i++) {
        new IMask(tel[i], {
            mask: '{+7}(000)000-00-00',
        });
    }
}

addSwiper ();
closeMenu ();
closeAccordion ();
mask ();