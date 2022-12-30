import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}> Scrumptious </Logo>
      </Nav>
      <Search/>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: 'Lobstor Two', cursive;

Logo:hover{
  opacity: 0.2;
}`;

const Nav = styled.div`
padding: 4rem 0rem;
dispaly: flex;
justify-content: flex-start;
align-items: center;
svg {
  font-size: 2rem;
}
svg:hover{
  opacity: 0.5;
}
`;
export default App;
