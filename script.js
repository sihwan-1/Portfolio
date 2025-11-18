AOS.init();
function Skip () {
    $(".splash-box > .skip").click(function () {
        $(".splash").addClass("hide");
        $(".section-1 .main-title h1").addClass("show");
        $("body").css("overflow", "auto");
    });
}
Skip ();


$(document).ready(function() {
    $(this).scrollTop(0);
    $("body").css("overflow", "hidden");

    setTimeout(function() {
        $(".splash").addClass("hide");
        $(".section-1 .main-title h1").addClass("show");
        $("body").css("overflow", "auto");
      }, 4000);
    });

$(window).on("scroll", function () {
    const section = $(".section-2");
    const outline = section.find(".text-outline");

    const scrollTop = $(window).scrollTop();
    const sectionTop = section.offset().top;
    const sectionHeight = section.outerHeight();
    const windowHeight = $(window).height();

    // 화면에 섹션이 보일 때만 작동
    if (
        scrollTop + windowHeight > sectionTop &&
        scrollTop < sectionTop + sectionHeight
    ) {
        const progress =
            (scrollTop + windowHeight - sectionTop) /
            (windowHeight + sectionHeight);
        const moveY = -progress * 1300; // 위로 100px 이동 (숫자 조절 가능)
        outline.css("transform", `translateY(${moveY}px) rotate(90deg)`);
    }
});

$(window).scroll(function() {
    var scrollPos = $(window).scrollTop();

    if (scrollPos < 610) {
    $("body").removeClass("white");
    }
    if (scrollPos > 611) {
    $("body").addClass("white");
    }
    if (scrollPos > 1520) {
    $("body").removeClass("white");
    }
});


// 스크롤 트리거 플러그인 활성화
gsap.registerPlugin(ScrollTrigger);

console.clear();

var $window = $(window);
var windowWidth = $window.width();
var windowHeight = $window.height();

$window.resize(function () {
    windowWidth = $(window).width();
    windowHeight = $window.height();
});

function setTimelineToEl(timeline, $el) {
    $el.data("gsap-timeline", timeline);
}

function killTimeline($el) {
    var timeline = $el.data("gsap-timeline");

    if (timeline) {
        timeline.kill();
    }
}

function SectionTop__init() {
    var wrapMarginRight = 64;
    var $contentLi = $(".section-top__content > li");
    var $bgLi = $(".section-top__bg > li");
    var $bgLiChild = $bgLi.find(" > div");

    var animationDuration = 600;

    var updateBgLiChildWidth = function () {
        var width = windowWidth - wrapMarginRight;
        $bgLiChild.stop().width(width);
    };

    $window.resize(function () {
        updateBgLiChildWidth();
    });
    updateBgLiChildWidth();

    $contentLi.mouseenter(function () {
        var $this = $(this);
        var index = $this.index();
        var $selectedBgLi = $bgLi.eq(index);
        var $selectedCoLi = $contentLi.eq(index);
        var $selectedBgLiChild = $bgLiChild.eq(index);

        $selectedBgLi.addClass("active");
        $selectedCoLi.removeClass("active");
        $selectedCoLi.siblings().addClass("active");
        


        var timeline = gsap.timeline();

        setTimelineToEl(timeline, $selectedBgLiChild);
        setTimelineToEl(timeline, $selectedBgLi);

        var animationDurationSeconds = animationDuration / 1000;

        timeline.to($selectedBgLiChild, {
            left: 0,
            duration: animationDurationSeconds
        });

        timeline.to(
            $selectedBgLi,
            {
                left: 0,
                right: 0,
                duration: animationDurationSeconds
            },
            "-=" + animationDurationSeconds
        );
    });

    $contentLi.mouseleave(function () {
        var $this = $(this);
        var index = $this.index();
        var $selectedBgLi = $bgLi.eq(index);
        var $selectedCoLi = $contentLi.eq(index);
        var $selectedBgLiChild = $bgLiChild.eq(index);

        $selectedBgLi.removeClass("active");
        $selectedCoLi.removeClass("active");
        $selectedCoLi.siblings().removeClass("active");


        killTimeline($selectedBgLi);
        $selectedBgLi.css({
            left: "",
            right: ""
        });

        killTimeline($selectedBgLiChild);
        $selectedBgLiChild.css({
            left: ""
        });
    });
}

SectionTop__init();
