import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  text-transform: uppercase;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;

export default StyledButton;

