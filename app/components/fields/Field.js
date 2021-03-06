import styled from 'styled-components';

const Field = styled.div`
  display: ${(props) => props.nested ? 'inline-block' : 'block'};
  padding: ${(props) => props.nested ? '0' : '20px 0'};
`;

export default Field;
