$(window).on("scroll", function () {
    $(".txt-box-1 p").each(function (i) {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();

      if (windowBottom > elementTop + 50) { // 50px 정도 들어오면 보이기 시작
        const delay = i * 00; // 한 줄씩 딜레이 (0.2초씩)
        $(this).delay(delay).queue(function (next) {
          $(this).addClass("show");
          next();
        });
      }
    });
  });
 
 $(window).on("scroll", function () {
    const section = $(".section-2");
    const outline = section.find(".text-outline");

    const scrollTop = $(window).scrollTop();
    const sectionTop = section.offset().top;
    const sectionHeight = section.outerHeight();
    const windowHeight = $(window).height();

    // 화면에 섹션이 보일 때만 작동
    if (scrollTop + windowHeight > sectionTop && scrollTop < sectionTop + sectionHeight) {
      const progress = (scrollTop + windowHeight - sectionTop) / (windowHeight + sectionHeight);
      const moveY = -progress * 800; // 위로 100px 이동 (숫자 조절 가능)
      outline.css("transform", `translateY(${moveY}px) rotate(90deg)`);
    }
  });