import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <div className={cn('navbar-item', { 'is-active': pathname === '/' })}>
            <Link to="/" className="navbar-link is-arrowless">
              Home
            </Link>
          </div>

          <div
            className={cn('navbar-item', {
              'is-active': pathname.startsWith('/tabs'),
            })}
          >
            <Link to="/tabs" className="navbar-link is-arrowless">
              Tabs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
