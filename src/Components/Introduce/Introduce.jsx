import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import "./Introduce.scss";

export const Introduce = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        // IntersectionObserver là 1 API của trình duyệt giúp theo dõi một phần tử xuất hiện hoặc biến mấy khỏi viewport.
      ([entry]) => {
        if (entry.isIntersecting) { //entry đang nằm trong viewport
          setIsVisible(true);
          observer.unobserve(entry.target); // ngừng theo dõi phần tử đang xuất hiện trong viewport
        }
      },
      { threshold: 0.5 } // 50% phần tử nhìn thấy sẽ được thực hiện hành động. 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // mảng dependency rỗng -> không phụ thuộc vào state hay props nào và chỉ nên chạy 1 lần khi component mount và dọn dẹp khi unmount.

  return (
    <div className="section introduce" ref={sectionRef}>
      <div className="section-container container">
        <ul className="grid">
          <li className="item flex">
            <h2>{isVisible ? <CountUp end={10} duration={2} /> : "10"}</h2>
            <p>World of experiences</p>
          </li>
          <li className="item flex">
            <h2>{isVisible ? <CountUp end={2000} duration={2} /> : "2K+"}</h2>
            <p>Fine Destinations</p>
          </li>
          <li className="item flex">
            <h2>{isVisible ? <CountUp end={10000} duration={2} /> : "10K+"}</h2>
            <p>Customer Reviews</p>
          </li>
          <li className="item flex">
            <h2>
              {isVisible ? (
                <CountUp end={4.8} duration={2} decimals={1} />
              ) : (
                "4.8"
              )}
            </h2>
            <p>Overall Rating</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
