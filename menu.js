let btnLeft = document.getElementById('prev-btn');
let btnRight = document.getElementById('nxt-btn');

let slider = document.querySelector('.slider');
let sliderSec = document.querySelector('.slider-second');

btnRight.addEventListener('click', nextSlide);
function nextSlide() {
    slider.appendChild(slider.firstElementChild);
    sliderSec.prepend(sliderSec.lastElementChild);
}

btnLeft.addEventListener('click', prevSlide);
function prevSlide() {
    slider.prepend(slider.lastElementChild);
    sliderSec.appendChild(sliderSec.firstElementChild);
}

function autoSlide() {
    deleteInterval = setInterval(timer, 2500);
    function timer() {
        nextSlide();
    }
}

autoSlide();

slider.addEventListener('mouseover', deleteAutoSliding);
sliderSec.addEventListener('mouseover', deleteAutoSliding);
btnRight.addEventListener('mouseover', deleteAutoSliding);
btnLeft.addEventListener('mouseover', deleteAutoSliding);

function deleteAutoSliding() {
    clearInterval(deleteInterval);
}

slider.addEventListener('mouseout', autoSlide);
sliderSec.addEventListener('mouseout', autoSlide);
btnRight.addEventListener('mouseout', autoSlide);
btnLeft.addEventListener('mouseout', autoSlide);

// Show and Hide the suggestions-list container
// function show_hide(x) {
//     x.classList.toggle("fa-arrow-up");
//     x.classList.toggle("fa-arrow-down");

//     const list = document.getElementById('list');

//     if (list.style.opacity === "" || list.style.opacity === "1") {
//         list.style.opacity = "0";
//         list.style.display = "none";
//     } else {
//         list.style.opacity = "1";
//         list.style.display = "block";
//     }
// }

// Sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

// Content
function hideAllContents() {
    let contents = document.querySelectorAll('.contents-item');
    contents.forEach(function(content) {
        conten.style.display = 'none';
    });

    let fulllist = document.querySelectorAll('.suggestions-list');
    fulllist.forEach(function(fulllist) {
        fulllist.style.display = 'none';
    });
}

function showFullList() {
    hideAllContents();
    let content = document.getElementById("suggestions-list");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent1() {
    hideAllContents();
    let content = document.getElementById("ryzen9");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent2() {
    hideAllContents();
    let content = document.getElementById("inteli5");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent3() {
    hideAllContents();
    let content = document.getElementById("inteli3");
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent4() {
    hideAllContents();
    let content = document.getElementById("aorus");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent5() {
    hideAllContents();
    let content = document.getElementById("nova");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent6() {
    hideAllContents();
    let content = document.getElementById("steel");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent7() {
    hideAllContents();
    let content = document.getElementById("dominator");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent8() {
    hideAllContents();
    let content = document.getElementById("delta");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent9() {
    hideAllContents();
    let content = document.getElementById("vengeance");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent10() {
    hideAllContents();
    let content = document.getElementById("4070");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent11() {
    hideAllContents();
    let content = document.getElementById("7900");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent12() {
    hideAllContents();
    let content = document.getElementById("4060");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent13() {
    hideAllContents();
    let content = document.getElementById("core");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent14() {
    hideAllContents();
    let content = document.getElementById("cx550f");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent15() {
    hideAllContents();
    let content = document.getElementById("cx450");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent16() {
    hideAllContents();
    let content = document.getElementById("fractal");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent17() {
    hideAllContents();
    let content = document.getElementById("lancool");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function changeContent18() {
    hideAllContents();
    let content = document.getElementById("obsidian");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

