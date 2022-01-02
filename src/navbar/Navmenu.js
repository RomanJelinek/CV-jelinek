import React from 'react';

const Navmenu = () => {
    return (
   <>
   <Nav>
     <NavLink to="/">
       <h1>Home</h1>
     </NavLink>
     <Bars/>
     <NavMenu>
       <NavLink to="/timeline" activeStyle></NavLink>
     </NavMenu>
   </Nav>
   </>
    );
};

export default Navmenu;