import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpeg';
import HeaderCarButton from './HeaderCartButton';

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCarButton onShow={props.onShow}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious meals" />
      </div>
    </Fragment>
  );
}

export default Header;
