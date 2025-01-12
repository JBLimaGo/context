import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/produtcs"> Produtos </NavLink>
      <NavLink to="/about"> Sobre </NavLink>
    </nav>
  );
};

export default Navbar;
