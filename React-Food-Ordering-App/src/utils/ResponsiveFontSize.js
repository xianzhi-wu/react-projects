import { useEffect } from "react";

export default function ResponsiveFontSize() {
  useEffect(() => {
    const handleResize = () => {
      const htmlElement = document.documentElement;
      const viewportWidth = htmlElement.clientWidth >= 1024 ? 640 : htmlElement.clientWidth;
      if (viewportWidth) {
        htmlElement.style.fontSize = 100 * (viewportWidth / 640) + 'px';
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.addEventListener('resize', handleResize);
      window.addEventListener('orientationchange', handleResize);
    };
  }, []);

  return null;
}