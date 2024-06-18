window.onload = function () {
  let currentIndex = 0;
  const sliderWrap = document.querySelector(".index .sliderWrap");
  const slider = document.querySelectorAll(".index .slider");

  const arrow = document.querySelectorAll(".index .arrow");
  const dots = document.querySelectorAll(".index .dot");

  console.log(dots);

  const dotsReset = ()=>{
    for(let item of dots) {
      // console.log(item);
      item.classList.remove("selected");
    }
  }

  const currentDots = () => {
    dotsReset();

    dots[currentIndex].classList.add("selected");
  }

  const checkIndex = () => {
    if (currentIndex > 2) currentIndex = 0;
    else if (currentIndex <= -1) currentIndex = 2;
  };

  const movingIndex = () => {
    sliderWrap.style.marginLeft = -currentIndex * 100 + "%";
    sliderWrap.style.transition = "all 0.6s";
  };

  const mainSliderActionRefresh = ()=>{
    checkIndex();
    movingIndex();
    currentDots();
  }

  const sliderAnimation = () => {
    currentIndex++;

    mainSliderActionRefresh();
  };

  let actionSliderAnimation = setInterval(sliderAnimation, 3000);

  // clearInterval(변수) <- actionSliderAnimtaion

  arrow.forEach((n, idx) => {
    n.addEventListener("click", (e) => {
      console.log(e.currentTarget);

      clearInterval(actionSliderAnimation);

      if (e.currentTarget.id === "arrowRight") currentIndex++;
      else currentIndex--;

      mainSliderActionRefresh();

      actionSliderAnimation = setInterval(sliderAnimation, 3000);
    });
  });
};
