export const scrollToComponent = (componentRef) => {
  const targetY = componentRef.getBoundingClientRect().top;
  scrollToY(targetY);
};

export const scrollToY = (scrollTargetY, speed = 2000) => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  let currentTime = 0;
  const time = Math.max(0.1, Math.min(Math.abs(scrollTargetY) / speed, 0.8)); // min time .1, max time .8 seconds
  function easeOutSine(position) {
    return Math.sin(position * (Math.PI / 2));
  }

  // animation loop
  function tick() {
    currentTime += 1 / 60;
    const position = currentTime / time;
    const t = easeOutSine(position);

    if (position < 1) {
      window.setTimeout(tick, 1000 / 60);
      window.scrollTo(0, scrollY + ((scrollTargetY) * t));
    }
  }
  tick();
};
