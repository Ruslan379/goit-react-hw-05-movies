import { StyledLink } from "components/BackLink.styled";
import { HiArrowLeft } from "react-icons/hi";


// import { Link } from "react-router-dom";
// import styled from "styled-components";


// const StyledLink = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   gap: 4px;
//   padding: 8px 12px;

//   margin-left: 15px;
//   margin-top: 10px;
//   margin-bottom: 10px;

//   color: black;
//   text-decoration: none;
//   font-weight: 500;
//   text-transform: uppercase;

// //   border-bottom: 1px solid black;
//   border: 1px solid black;
//   border-radius: 5px;
//   box-shadow: 7px 7px 3px 0px rgba(0, 0, 0, 0.50);

//   :hover {
//     color: orangered;
//   }
// `;

const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

export default BackLink;