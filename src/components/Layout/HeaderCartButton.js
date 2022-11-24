import { useContext, useState, useEffect } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/Cart-context';

function HeaderCarButton(props) {
  const [animationCart,setAnimationCart] = useState(false)

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { items } = cartCtx

  const btnClasses = `${classes.button} ${animationCart ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0 ) {
      return
    }
    setAnimationCart(true)

    const timer = setTimeout(() => {
      setAnimationCart(false)
    }, 300 )

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCarButton;
