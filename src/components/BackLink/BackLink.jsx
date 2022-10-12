import { StyledLink } from "components/BackLink/BackLink.styled";
import { HiArrowLeft } from "react-icons/hi";
import PropTypes from 'prop-types';


// const BackLink = ({ to, children }) => {
const BackLink = ({ to, btnText }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {btnText && btnText}
      {/* {children} */}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  // children: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired
    
};

export default BackLink;