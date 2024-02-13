import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../Style/Button";

const ErrorPage = () => {
  const Wrapper = styled.section`
    .container {
      padding: 9rem 0;
      text-align: center;

      h2 {
        font-size: 10rem;
      }

      h3 {
        font-size: 4.2rem;
      }

      p {
        margin: 2rem 0;
      }
    }
  `;

  return (
    <Wrapper>
      <div className="container">
        <h2>404</h2>
        <h3>Page Not Found</h3>
        <p>Sorry, the page you are looking for does not exist.</p>
        <NavLink to="/">
          <Button>Back to Home</Button>
        </NavLink>
      </div>
    </Wrapper>
  );
};

export default ErrorPage;
