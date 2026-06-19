import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const pizza = [
    { 
        name: "Pepperoni", 
        img: "/images/pizza1.png",
        leftImg: "/images/pizza1-1.png",
        rightImg: "/images/pizza1-2.png",
        leftStyle: { width: "580px", height: "550px", top: "-30px", left: "-120px", rotate: -15 },
        rightStyle: { width: "580px", height: "550px", top: "-30px", right: "-100px", rotate: 12 },
        title: "Classic Pepperoni Pizza",
        description: "A timeless favorite with crispy pepperoni,  mozzarella, and a rich tomato base. Perfectly baked with a hint of spice and irresistible flavor in every slice.",
        background: "radial-gradient(circle at center, #00000 0%, #00000 20%, #000000 100%)"

      },
      
      { 
        name: "Spinach", 
        img: "/images/pizza2.png",
        leftImg: "/images/pizza2-1.png",
        rightImg: "/images/pizza2-2.png",
        title: "Savory Spinach Pizza",
        leftStyle: { width: "680px", height: "490px", top: "10px", left: "-190px", rotate: -15 },
        rightStyle: { width: "680px", height: "580px", top: "-60px", right: "-190px", rotate: -120 },
        description: "Fresh spinach layered over a rich tomato base, topped with creamy mozzarella and herbs for a wholesome, earthy flavor in every bite.",
        background: "radial-gradient(circle at center, #00000 0%, #00000 20%, #000000 100%)"

      },
      
      { 
        name: "Paneer ", 
        img: "/images/pizza3.png",
        leftImg: "/images/pizza3-1.png",
        rightImg: "/images/pizza3-2.png",
        title: "Paneer Tikka Pizza",
        leftStyle: { width: "600px", height: "550px", top: "-100px", left: "-100px", rotate: -15 },
        rightStyle: { width: "600px", height: "520px", top: "-100px", right: "-170px", rotate: 12 },
        description: "Smoky marinated paneer cubes baked with onions, peppers, and melted cheese on a spiced tomato base. A bold fusion of Indian flavors and classic  goodness.",
        background: "radial-gradient(circle at center, #00000 0%, #00000 20%, #000000 100%)"

      },
      
      { 
        name: "Margherita", 
        img: "/images/pizza4.png",
        leftImg: "/images/pizza4-1.png",
        rightImg: "/images/pizza4-2.png",
        title: "Classic Margherita Pizza",
        leftStyle: { width: "550px", height: "520px", top: "-80px", left: "-120px", rotate: -15 },
        rightStyle: { width: "550px", height: "520px", top: "-70px", right: "-90px", rotate: 12 },
        description: "Fresh mozzarella, vibrant tomato sauce, and aromatic basil on a perfectly baked crust. A timeless classic that captures the essence of Italian pizza.",
        background: "radial-gradient(circle at center, #00000 0%, #00000 20%, #000000 100%)"

      }
      
      ,
      { 
        name: "Veggie ", 
        img: "/images/pizza5.png",
        leftImg: "/images/pizza5-1.png",
        rightImg: "/images/pizza5-2.png",
        title: "Veggie Delight Pizza",
        leftStyle: { width: "590px", height: "500px", top: "-20px", left: "-120px", rotate: -15 },
        rightStyle: { width: "590px", height: "500px", top: "-20px", right: "-170px", rotate: 12 },
        description: "A colorful medley of fresh vegetables layered over a rich tomato base, topped with melted cheese and  herbs. A wholesome, flavorful bite in every slice.",
        background: "radial-gradient(circle at center, #00000 0%, #00000 20%, #000000 100%)"

      }
      ,
      
      { 
        name: "BBQ Chicken", 
        img: "/images/pizza6.png",
        leftImg: "/images/pizza6-1.png",
        rightImg: "/images/pizza6-2.png",
        title: "Smoky BBQ Chicken Pizza",
        leftStyle: { width: "650px", height: "500px", top: "20px", left: "-160px", rotate: -70 },
        rightStyle: { width: "650px", height: "500px", top: "20px", right: "-160px", rotate: -22 },
        description: "Tender BBQ chicken pieces with caramelized onions, melted cheese, and smoky sauce on a perfectly baked crust. A bold, savory pizza with a rich, flavorful bite.",
        background: "radial-gradient(circle at center, #00000 0%, #00000 20%, #000000 100%)"

      }
      ,
      { 
        name: "Pineapple", 
        img: "/images/pizza7.png",
        leftImg: "/images/pizza7-1.png",
        rightImg: "/images/pizza7-2.png",
        title: "Hawaiian Pineapple Pizza",
        leftStyle: { width: "500px", height: "450px", top: "20px", left: "-80px", rotate: -30 },
        rightStyle: { width: "500px", height: "450px", top: "-20px", right: "-80px", rotate: 12 },
        description: "Sweet pineapple chunks paired with savory ham, melted cheese, and a rich tomato base. A tropical twist that balances sweetness and flavor in every bite.",
        background: "radial-gradient(circle at center, #00000 0%, #00000 20%, #000000 100%)"

      }
      ,
  ];
  
  
  
const Hero = () => {
  const steps = 7; 
 
    const stepRad = Math.PI / steps;      

  const [stepIndex, setStepIndex] = useState(0);
  const [rotation, setRotation]   = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const radius = 500;
  const offset = 80 / radius;                     
  const startAngle = Math.PI + offset;
  const angle = startAngle + stepIndex * stepRad;

  const move = (dir) => {
    const dirSign = dir === "right" ? 1 : -1;
    setStepIndex(prev => (prev + dirSign + steps) % steps);
    setRotation(prev => prev + (dirSign * 90));

    setTimeout(() => {
      setActiveIndex(prev =>
        (prev + dirSign + pizza.length) % pizza.length
      );
    }, 300);
  };

  return (
    <div 
 className="hero"
  >
       <motion.div
    className="hero-bg"
    animate={{ background: pizza[activeIndex].background }}
    transition={{ duration: 1, ease: "easeInOut" }}
  />
<motion.img
  key={pizza[activeIndex].leftImg}
  src={pizza[activeIndex].leftImg}
  alt=""
  className="left-side"
  style={{
    position: "absolute",
    left: pizza[activeIndex].leftStyle.left,
    width: pizza[activeIndex].leftStyle.width,
    height: pizza[activeIndex].leftStyle.height,
    rotate: pizza[activeIndex].leftStyle.rotate,
  }}
  initial={{ top: "-200px", opacity: 0 }}
  animate={{ top: pizza[activeIndex].leftStyle.top, opacity: 0.5 }}
  exit={{ top: "-200px", opacity: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
/>

<motion.img
  key={pizza[activeIndex].rightImg}
  src={pizza[activeIndex].rightImg}
  alt=""
  className="right-side"
  style={{
    position: "absolute",
    right: pizza[activeIndex].rightStyle.right,
    width: pizza[activeIndex].rightStyle.width,
    height: pizza[activeIndex].rightStyle.height,
    rotate: pizza[activeIndex].rightStyle.rotate,
  }}
  initial={{ top: "-200px", opacity: 0 }}
  animate={{ top: pizza[activeIndex].rightStyle.top, opacity: 0.5 }}
  exit={{ top: "-200px", opacity: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
/>




      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            key={pizza[activeIndex].title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            {pizza[activeIndex].title}
          </motion.h1>
          <motion.p
            key={pizza[activeIndex].description}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {pizza[activeIndex].description}
          </motion.p>
        </div>

        <div className="circular-slider">
          <div className="circle outer-circle">
            <div className="circle inner-circle">
              <motion.div
                className="center-image"
                animate={{ rotate: rotation }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={pizza[activeIndex].img}
                  alt={pizza[activeIndex].name}
                />
              </motion.div>
            </div>

            <div
              className="moving-ball"
              style={{
                transform: `rotate(${(angle * 180) / Math.PI}deg) translate(${radius - 10}px)`
              }}
            />
          </div>

          <div className="circle-text">
            <svg viewBox="0 0 1100 1200" width="100%" height="100%">
              <defs>
                <path
                  id="circlePath"
                  d="M600,600 m-550,0 a500,500 0 1,1 1000,0 a500,500 0 1,1 -1000,0"
                />
              </defs>
              <text fill="white" fontSize="24" letterSpacing="8">
                <textPath href="#circlePath" startOffset="50%">
                  {pizza.map((pizz) => ` • ${pizz.name.toUpperCase()} `).join("")}
                </textPath>
              </text>
            </svg>
          </div>

        <button className="arrow left"  onClick={() => move('left')}>←</button>
        <button className="arrow right"  onClick={() => move('right')} >→</button>

        </div>
      </div>
      
    </div>
  );
};

export default Hero;