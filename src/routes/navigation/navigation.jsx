import {Fragment, useContext} from 'react';
import {Link, Outlet} from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';

import './navigation.scss';

const Shop = () => <h1>I am shop page</h1>

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
  );
};

export default Navigation;
