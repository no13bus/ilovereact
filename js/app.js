function animateLogo() {
    TweenMax.to(".react-logo", 3, {
        css: {
            y: "50px",
        },
        // 永久重复动画的选项
        repeat: -1,

        // 反转、重新运行动画的选项
        yoyo: true,
        ease: Power2.easeInOut,
    });
    var t = new TimelineMax({
        yoyo: true,
        repeat: -1,
        ease: Power2.easeInOut
    });
    t.to("#android-robot", 0.5, {
        rotation: "-45deg"
    }).to("#android-robot", 0.1, {
        rotation: "-50deg"
    }).to("#android-robot", 0.5, {
        rotation: "-40deg"
    });

}

function updateSliderControl() {
    // 获得所有的 slider 链接
    var links = document.querySelectorAll("#slider-control a");

    for (var i = 0; i < links.length; i++) {
        var link = links[i];

        // 获取被链接指向的部分
        var section = document.querySelector(link.getAttribute("href"));
        var sectionTop = section.offsetTop;
        var sectionBottom = sectionTop + window.innerHeight;

        // 检查 window.scrollY 是否在这部分中
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            link.className = "active";
        } else {
            link.className = "";
        }
    }
}


function scrollToElement(element) {
    var topOfElement = element.offsetTop;
    TweenMax.to(window, 1, {
        scrollTo: {
            y: topOfElement,
        },
        ease: Power2.easeInOut,
    });
}

function addSmoothScrolling() {
    var links = document.querySelectorAll("#slider-control a");

    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        
        (function(_link) {
            var href = link.getAttribute("href");
            var section = document.querySelector(href);
            link.addEventListener("click", function(event) {
                // `event` 是鼠标点击事件
                event.preventDefault();
                // BUG 警告！使用闭包或者 ES6 `let` 修复。
                scrollToElement(section);
            });
        })(link);

    }
}
// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {
    updateSliderControl();
}


window.onload = function() {
    animateLogo();
    addSmoothScrolling();
}