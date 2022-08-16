import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    if (window.pageYOffset > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleToggle);
    return () => {
      window.removeEventListener("scroll", handleToggle);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {show && (
        <div onClick={scrollTop}>
          <i className="fas fa-arrow-circle-up fa-3x"></i>
          </div>
      )}
    </div>
  );
};


export default ScrollToTop