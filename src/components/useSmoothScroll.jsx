import React, { useRef, useEffect } from "react";

const useSmoothScroll = (ref) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let targetScroll = 0;
    let currentScroll = 0;
    let isAnimating = false;

    const onWheel = (e) => {
      e.preventDefault();

      const maxScroll = element.scrollHeight - element.clientHeight;

      targetScroll += e.deltaY;
      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll)); // batasi scroll

      if (!isAnimating) {
        isAnimating = true;
        animateScroll();
      }
    };

    const animateScroll = () => {
      currentScroll += (targetScroll - currentScroll) * 0.1;

      if (Math.abs(currentScroll - targetScroll) < 0.5) {
        currentScroll = targetScroll;
        isAnimating = false;
      } else {
        requestAnimationFrame(animateScroll);
      }

      element.scrollTop = currentScroll;
    };

    element.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      element.removeEventListener("wheel", onWheel);
    };
  }, [ref]);
};

export default useSmoothScroll;
