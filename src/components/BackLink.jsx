import { StyledLink } from "components/BackLink.styled";
import { HiArrowLeft } from "react-icons/hi";
import PropTypes from 'prop-types';


const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
    to: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired,
};

export default BackLink;