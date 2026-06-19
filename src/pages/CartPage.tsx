import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Trash2, Plus, Minus, CreditCard, ChevronRight, CheckCircle2, ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 5% 5rem 5%;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 6rem 5% 4rem 5%;
  }

  @media (max-width: 480px) {
    padding: 5rem 4% 3rem 4%;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 2rem;
`;

const EmptyCartState = styled.div`
  text-align: center;
  padding: 5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.background.card};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const GoShopButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.light};
  font-weight: 600;
  padding: 0.85rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
  }
`;

const CartContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    grid-template-columns: 1.6fr 1fr;
  }
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const CartItemRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 80px 1fr auto;
  gap: 1rem;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (min-width: 480px) {
    grid-template-columns: 100px 1fr auto auto;
    gap: 1.5rem;
  }
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  background-color: #f7f1e5;

  @media (min-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const ItemName = styled.h3`
  font-family: ${({ theme }) => theme.typography.heading};
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ItemCat = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const PriceText = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const QtyControls = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: #fff;
  overflow: hidden;
`;

const QtyBtn = styled.button`
  padding: 0.35rem 0.65rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(46, 30, 18, 0.05);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const QtyVal = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0 0.5rem;
  min-width: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const DeleteBtn = styled.button`
  color: rgba(46, 30, 18, 0.4);
  transition: color 0.2s ease;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #cc0000;
  }
`;

const SummaryPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SummaryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const SummaryTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.body};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 0.75rem;
`;

const SummaryTotalRow = styled(SummaryRow)`
  border-top: 1px dashed ${({ theme }) => theme.colors.border};
  padding-top: 1.25rem;
  margin-top: 1.25rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 2rem;
`;

const FormTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.body};
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  background-color: #fff;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: #fff;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  input:checked + & {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: rgba(30, 70, 32, 0.03);
  }
`;

const PlaceOrderBtn = styled(motion.button)`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text.light};
  font-weight: 600;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  margin-top: 1.5rem;
  font-size: 0.95rem;

  &:disabled {
    background-color: #d1c8bd;
    cursor: not-allowed;
  }
`;

// Success screen
const SuccessWrapper = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background.card};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const OrderIdText = styled.span`
  background-color: ${({ theme }) => theme.colors.accentLight};
  color: ${({ theme }) => theme.colors.primary};
  font-family: monospace;
  font-size: 1.15rem;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px dashed ${({ theme }) => theme.colors.primary};
`;

export const CartPage: React.FC = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    payment: 'cod',
  });
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  const shipping = cartTotal >= 1500 ? 0 : 150.0;
  const tax = cartTotal * 0.05; // 5% VAT
  const grandTotal = cartTotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setLoading(true);
    // Simulate API checkout
    setTimeout(() => {
      const generatedId = `NT-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedId);
      setLoading(false);
      setOrderSuccess(true);
      clearCart();
    }, 2000);
  };

  if (orderSuccess) {
    return (
      <CartContainer>
        <SuccessWrapper
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          <CheckCircle2 size={64} style={{ color: '#1E4620' }} />
          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '2rem' }}>Order Placed Successfully!</h2>
          <p style={{ color: '#5C4E43', maxWidth: '420px', lineHeight: 1.6 }}>
            Thank you for buying from Nanntu Naturals. We appreciate your support for sustainable 
            farmer-owned agriculture. We are preparing your raw honey extraction details!
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', color: '#D59621' }}>
              Your Order Receipt ID
            </span>
            <OrderIdText>{orderId}</OrderIdText>
          </div>
          <GoShopButton to="/shop" style={{ marginTop: '1rem' }}>
            <ArrowLeft size={16} />
            Back to Shop Stand
          </GoShopButton>
        </SuccessWrapper>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <Title>Your Shopping Basket</Title>

      {cart.length === 0 ? (
        <EmptyCartState>
          <ShoppingCart size={54} style={{ color: '#D59621', opacity: 0.7 }} />
          <div>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Your basket is empty
            </h2>
            <p style={{ color: '#5C4E43', fontSize: '0.875rem' }}>
              Fill your pantry with raw, unfiltered forest honey, A2 ghee, and wood-pressed oils.
            </p>
          </div>
          <GoShopButton to="/shop">
            <ShoppingCart size={16} />
            Explore Products
          </GoShopButton>
        </EmptyCartState>
      ) : (
        <CartContentGrid>
          {/* List of items */}
          <ItemList>
            <AnimatePresence mode="popLayout">
              {cart.map(({ product, quantity }) => (
                <CartItemRow
                  key={product.id}
                  layout
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                >
                  <ItemImage src={product.image} alt={product.name} />
                  
                  <ItemInfo>
                    <ItemCat>{product.category}</ItemCat>
                    <ItemName>{product.name}</ItemName>
                    <PriceText>₹{product.price.toFixed(2)} each</PriceText>
                  </ItemInfo>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <QtyControls>
                      <QtyBtn
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        aria-label={`Decrease quantity of ${product.name}`}
                      >
                        <Minus size={14} />
                      </QtyBtn>
                      <QtyVal>{quantity}</QtyVal>
                      <QtyBtn
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        aria-label={`Increase quantity of ${product.name}`}
                      >
                        <Plus size={14} />
                      </QtyBtn>
                    </QtyControls>
                    
                    <DeleteBtn
                      onClick={() => removeFromCart(product.id)}
                      aria-label={`Remove ${product.name} from basket`}
                    >
                      <Trash2 size={18} />
                    </DeleteBtn>
                  </div>

                  <PriceText style={{ display: 'none', marginLeft: '1rem', fontWeight: 700 }} className="desktop-price">
                    ₹{(product.price * quantity).toFixed(2)}
                  </PriceText>
                </CartItemRow>
              ))}
            </AnimatePresence>
          </ItemList>

          {/* Checkout / Summary Box */}
          <SummaryPanel>
            <SummaryCard>
              <SummaryTitle>Basket Summary</SummaryTitle>
              <SummaryRow>
                <span>Items Subtotal</span>
                <span>₹{cartTotal.toFixed(2)}</span>
              </SummaryRow>
              <SummaryRow>
                <span>Shipping Fee</span>
                <span>{shipping === 0 ? 'Free Shipping' : `₹${shipping.toFixed(2)}`}</span>
              </SummaryRow>
              <SummaryRow>
                <span>VAT (5% Est.)</span>
                <span>₹{tax.toFixed(2)}</span>
              </SummaryRow>
              <SummaryTotalRow>
                <span>Total Amount</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </SummaryTotalRow>

              <CheckoutForm onSubmit={handleCheckout}>
                <FormTitle>Delivery Information</FormTitle>
                
                <InputGroup>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter name"
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="name@example.com"
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g. +91 98765 43210"
                  />
                </InputGroup>

                <InputGroup>
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="House/Street, City, Postal Code"
                  />
                </InputGroup>

                <InputGroup>
                  <Label>Payment Method</Label>
                  <RadioGroup>
                    <RadioLabel>
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={formData.payment === 'cod'}
                        onChange={handleInputChange}
                        style={{ display: 'none' }}
                      />
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                        <Shield size={16} /> Cash on Delivery (COD)
                      </span>
                    </RadioLabel>

                    <RadioLabel>
                      <input
                        type="radio"
                        name="payment"
                        value="bank"
                        checked={formData.payment === 'bank'}
                        onChange={handleInputChange}
                        style={{ display: 'none' }}
                      />
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                        <CreditCard size={16} /> Direct Bank Transfer
                      </span>
                    </RadioLabel>
                  </RadioGroup>
                </InputGroup>

                <PlaceOrderBtn
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  {loading ? 'Processing Order...' : 'Confirm & Place Order'}
                  {!loading && <ChevronRight size={18} />}
                </PlaceOrderBtn>
              </CheckoutForm>
            </SummaryCard>
          </SummaryPanel>
        </CartContentGrid>
      )}
    </CartContainer>
  );
};
