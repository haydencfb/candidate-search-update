import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (

    <nav className='nav'>

        <h3 className='nav-item'>
          <NavLink 
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'} 
          >
            Home
          </NavLink>
        </h3>

        <h3 className='nav-item'>
          <NavLink 
          to="/SavedCandidates"
          className={currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}  
          >
            Saved Candidates
          </NavLink>
        </h3>
    </nav>

  )
};

export default Nav;
