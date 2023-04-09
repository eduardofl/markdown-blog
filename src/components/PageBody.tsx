import { Container } from '@mui/material';

const PageBody = ({ children }): JSX.Element => {
  return (
    <Container disableGutters maxWidth="sm" sx={{ marginX: 'auto' }}>
      {children}
    </Container>
  );
};

export default PageBody;
