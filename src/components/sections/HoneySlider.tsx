import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import honeyImage from '../../assets/slider/ashwagandha-honey.jpg';
import './HoneySlider.css';

interface HoneyProduct {
  id: string;
  size: string;
  weight: string;
  price: number;
}

const honeyProducts: HoneyProduct[] = [
  {
    id: 'honey-250mg',
    size: '250MG',
    weight: '250g',
    price: 12.99
  },
  {
    id: 'honey-500mg',
    size: '500MG',
    weight: '500g',
    price: 22.99
  },
  {
    id: 'honey-1kg',
    size: '1kg',
    weight: '1000g',
    price: 42.99
  }
];


const HoneySlider: React.FC = () => {
  const steps = honeyProducts.length;
  const stepRad = Math.PI / steps;

  const [stepIndex, setStepIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const { addToCart } = useCart();

  const radius = 500;
  const offset = 80 / radius;
  const startAngle = Math.PI + offset;
  const angle = startAngle + stepIndex * stepRad;

  const move = (dir: 'left' | 'right') => {
    const dirSign = dir === 'right' ? 1 : -1;
    setStepIndex((prev) => (prev + dirSign + steps) % steps);
    setRotation((prev) => prev + dirSign * 90);

    setTimeout(() => {
      setActiveIndex((prev) => (prev + dirSign + honeyProducts.length) % honeyProducts.length);
    }, 300);
  };

  const handleAddToCart = () => {
    const product = honeyProducts[activeIndex];
    const cartProduct = {
      id: product.id,
      name: `Nanntu Raw Ashwagandha Honey - ${product.size}`,
      category: 'Honey',
      price: product.price,
      rating: 4.9,
      image: honeyImage,
      description: `Premium ${product.weight} raw ashwagandha-infused honey from our forest hives. Rich in antioxidants and natural immune-boosting properties.`,
      features: [
        'Raw & unpasteurized',
        'Ashwagandha infused',
        'Cold filtered',
        'No additives',
        `${product.weight} weight`
      ],
      transparency: {
        origin: 'Deciduous Forests, Western Ghats, India',
        harvested: 'Wild-harvested by local tribal communities',
        processing: 'Cold gravity filtered to preserve natural enzymes.'
      }
    };

    addToCart(cartProduct, quantity);
    setShowSuccess(true);
    setQuantity(1);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const currentProduct = honeyProducts[activeIndex];

  return (
    <div className="honey-hero">
      <div className="honey-hero-content">
        <h1 className="top-variant-title" onClick={() => move('right')}>
          {currentProduct.size}
        </h1>
        <div className="circular-slider">
          <motion.div
            className="center-image"
            animate={{ rotate: rotation }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <img
              src={honeyImage}
              alt="Ashwagandha Honey"
            />
          </motion.div>

          {/* Variant Selection Buttons - Circular around image */}
          {honeyProducts.map((product, idx) => {
            const buttonAngle = (idx * 360) / honeyProducts.length;
            const isActive = idx === activeIndex;
            return (
              <motion.button
                key={product.id}
                className={`variant-button ${isActive ? 'active' : ''}`}
                style={{
                  '--button-angle': `${buttonAngle}deg`
                } as React.CSSProperties}
                onClick={() => {
                  setActiveIndex(idx);
                  setStepIndex(idx);
                  setRotation(idx * 90);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="variant-size">{product.size}</span>
                <span className="variant-price">${product.price.toFixed(2)}</span>
              </motion.button>
            );
          })}

          <div
            className="variant-indicator"
          >
            {currentProduct.size}
          </div>

          <div
            className="moving-ball"
            style={{
              transform: `rotate(${(angle * 180) / Math.PI}deg) translate(${radius - 10}px)`
            }}
          />

          <div className="circle-text">
            <svg viewBox="0 0 1100 1200" width="100%" height="100%">
              <defs>
                <path
                  id="circlePath"
                  d="M600,600 m-550,0 a500,500 0 1,1 1000,0 a500,500 0 1,1 -1000,0"
                />
              </defs>
              <text fill="#2E1E12" fontSize="24" letterSpacing="8">
                <textPath href="#circlePath" startOffset="50%">
                  {honeyProducts.map((h) => ` • ${h.size} • ${h.weight} • $${h.price.toFixed(2)} `).join('')}
                </textPath>
              </text>
            </svg>
          </div>

          <button className="arrow left" onClick={() => move('left')}>
            ←
          </button>
          <button className="arrow right" onClick={() => move('right')}>
            →
          </button>
        </div>

        {/* Add to Cart Panel - Below Slider */}
        <motion.div
          className="honey-cart-panel-bottom"
          key={`panel-${activeIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="cart-content">
            <div className="cart-info">
              <span className="cart-weight">{currentProduct.weight}</span>
              <span className="cart-price">${currentProduct.price.toFixed(2)}</span>
            </div>

            <div className="cart-controls">
              <div className="qty-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 1;
                    if (val > 0) setQuantity(val);
                  }}
                  min="1"
                />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>

              <motion.button
                className="cart-add-btn"
                onClick={handleAddToCart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Add to Cart
              </motion.button>
            </div>

            {showSuccess && (
              <motion.div
                className="cart-success"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Added to cart!
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HoneySlider;
