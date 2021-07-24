
// resize website pages corresponding devise height
const resizeHeight = function() {
    document.querySelector('.landing-page').style.height = window.innerHeight + 'px';
    document.querySelector('.services-page').style.height = window.innerHeight + 'px';
    document.querySelector('.contact-page').style.height = window.innerHeight + 'px';
    document.body.zoom = 1.0;
    this.blur();
}

resizeHeight();
//window.onresize = resizeHeight;

// jquery smooth scroll 
$('.links li a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    };
});
// Main Function here
const main = () => {
    // Selecting Elements function
    const $ = (elem) => { return document.querySelector(elem); };
    const $$ = (elements) => { return document.querySelectorAll(elements) };
    // Function for click Events
    const clickEvent = (element, func) => {
        return element.addEventListener("click", func);
    }
    // Function for add class to element
    const addClass = (element, clas) => {
        return element.classList.add(clas);
    }
    // Function for remove class from element
    const removeClass = (element, clas) => {
        return element.classList.remove(clas);
    }
    // Function for change activility to header links whin user scroll
    const changeActiveLink = (elements, linkName) => {
        return elements.forEach(e => {
            removeClass(e, 'active');
            if (e.dataset.name === linkName) addClass(e, "active");
        })
    }
    //function to change Activelity to Elements
    const changeActiveElement = (elements, element) => {
        return elements.forEach(e => {
            removeClass(e, 'active');
            if (e == element) addClass(e, "active");
        })
    }
    //Get array of amgs
    const imgsArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
    const serviceImgs = ["6.jpg", "7.png"];
    // let names for assinment to intervals
    let normalInterval, randomInterval;
    // 2 function for changing background images
    function ChangeBkRan(page, time = 5000) {
        let i = 0;
        this.page = page;
        this.time = time;
        randomInterval = setInterval(() => {
            let randomNums = Math.floor(Math.random() * imgsArray.length);
            //Change background img url
            this.page.style.backgroundImage = 'url("imgs/' + imgsArray[randomNums] + '")';
        }, this.time);
        console.log("random");
    }
    function ChangeBkNor(page, time = 5000, arr = imgsArray) {
        let i = 0;
        this.page = page;
        this.time = time;
        // Interval for switch background at custom time
        normalInterval = setInterval(() => {
            //Change background img url
            this.page.style.backgroundImage = 'url("imgs/' + arr[i] + '")';
            i = (i + 1) % arr.length;
        }, this.time)
        console.log("normal");
    }
    // add click to menu icon for open and close nav bar
    clickEvent($('.menu-icon'), (e) => {
        e.stopPropagation();
        $('.links').classList.toggle('show');
        $('.menu-icon').classList.toggle('toggle');
        $$('.links li').forEach((link, index) => {
            if (link.style.animation) link.style.animation = '';
            else link.style.animation = `slideIn 1s ease`
        })

    })
    // add click to toggle cog for opening setting box
    clickEvent($('.toggle-settings'), (e) => {
        e.stopPropagation();
        $('.settings-box').classList.toggle('open');
        $(".toggle-settings > .fa-cog").classList.toggle('fa-spin');
        $$('.settings-container > div').forEach((div) => {
            if (div.style.animation) div.style.animation = '';
            else div.style.animation = `slideInFromLeft 1s ease`
        })
    })
    // Add click to landing page for closing setting box
    // clickEvent($('.container'), (e) => {
    //             removeClass($('.settings-box'), 'open')
    //             removeClass($('.toggle-settings > .fa-cog'), 'fa-spin');
    //             removeClass($('.links'), 'show');
    //             removeClass($('.menu-icon'), 'toggle');
    //             console.log(e.target.classList); 
    // })
    // Add click to each color circle for changing root color and setting value in local storage
    $$('.color-list li').forEach(item => clickEvent(item, (e) => {
        $(':root').style.setProperty("--main--color", e.target.dataset.color);
        changeActiveElement($$('.color-list li'), e.target)
        localStorage.setItem('colorSetting', e.target.dataset.color);
    }))
    // Checking localStoragr if it is storing a color value
    let colorOption = localStorage.getItem('colorSetting');
    if (colorOption !== null) {
        $(':root').style.setProperty("--main--color", colorOption);
        // Check color list items and set active class to it
        $$(".color-list li").forEach(e => {
            removeClass(e, 'active');
            if (e.dataset.color === colorOption) addClass(e, 'active');
        });
    }
    // Add click to each yes and no buttons for changing activelity 
    $$('.yes-no li').forEach(button => button.addEventListener('click', (e) => {
        changeActiveElement($$('.yes-no li'), e.target)
        if (e.target.dataset.random === "yes") {
            clearInterval(normalInterval);
            clearInterval(randomInterval);
            ChangeBkRan($('.landing-page'));
        }
        else {
            clearInterval(randomInterval);
            clearInterval(normalInterval);
            ChangeBkNor($('.landing-page'));
        }
        $$('.time-groub li').forEach(e => { if (e.dataset.time === '5000') changeActiveElement($$('.time-groub li'), e); });
        localStorage.setItem("isRandomlyImgs", e.target.dataset.random);
    }))

    // add click event to time groub buttons for changing swithTime value
    $$('.time-groub li').forEach(button => clickEvent(button, (e) => {
        changeActiveElement($$('.time-groub li'), e.target);
        changeSwitchTime(e.target.dataset.time);
    }))
    // add scroll event to window 
    window.onscroll = function (e) {
        // when user scroll close setting box and unRotate cog icon
        removeClass($('.settings-box'), 'open');
        removeClass($(".toggle-settings > .fa-cog"), 'fa-spin');
        // checking page offset for hide and appear into text
        let scrollAmount = this.pageYOffset;
        if (scrollAmount > 100) {
            addClass($('.introduction-text'), 'hidden')
        }
        else {
            removeClass($('.introduction-text'), 'hidden');
        }

        // check scroll amount for changing active link(page)
        if (scrollAmount < ($('.products-page').offsetTop)) {
            changeActiveLink($$('.links li a'), 'about');
        }
        else if (scrollAmount >= $('.products-page').offsetTop && scrollAmount < $('.services-page').offsetTop) {
            changeActiveLink($$('.links li a'), 'products');
        }
        else if (scrollAmount >= $('.services-page').offsetTop && scrollAmount < $('.contact-page').offsetTop) {
            changeActiveLink($$('.links li a'), 'services');
        }
        else changeActiveLink($$('.links li a'), 'contact');
    }
    let randomImgsOption = localStorage.getItem('isRandomlyImgs');
    const changeSwitchTime = (time = 5000) => {
        // Checking localStorage if it is storing a IsRandomlyImgs value
        if (randomImgsOption !== null) {
            clearInterval(normalInterval);
            clearInterval(randomInterval);
            if (randomImgsOption === "yes") {
                ChangeBkRan($('.landing-page'), Number(time));
            } else {
                ChangeBkNor($('.landing-page'), Number(time));
            }
        } else ChangeBkNor($('.landing-page'));
    }

    changeSwitchTime();

}
main();




