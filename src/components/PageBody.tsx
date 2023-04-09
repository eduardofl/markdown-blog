import { Container } from '@mui/material';

const PageBody = ({ children }): JSX.Element => {
  return (
    <Container disableGutters maxWidth="sm" sx={{ marginX: 'auto', py: 2 }}>
      {children}
    </Container>
  );
};

export default PageBody;
