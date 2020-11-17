import styled from 'styled-components';
import spinnerGif from 'src/assets/images/spinner.gif';

const Spinner = styled.img`
  width: 200px;
  margin: auto;
  display: block;
`;

Spinner.defaultProps = {
  src: spinnerGif,
  alt: 'Loading ...',
};

export { Spinner };
