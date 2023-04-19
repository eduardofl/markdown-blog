import { useTheme } from '@mui/material';
import styled from 'styled-components';

const PostWrapper = ({ children }): JSX.Element => {
  const theme = useTheme();

  const Wrapper = styled.div`
    p {
      margin-bottom: 25px;
    }

    a {
      color: #1976d2;
    }

    code {
      background-color: ${theme.palette.background.paper};
      color: ${theme.palette.text.secondary};
      border: 1px solid #ccc;
      border-radius: 4px;
      font-family: Consolas, monospace;
      font-size: 14px;
      line-height: 1.4;
      display: inline-block;
      padding: 0.1em 0.3em;
    }

    pre {
      code {
        background-color: #000;
        color: #fff;
        border: none;
        display: block;
        padding: 0.5em;
        margin: 1em 0;
      }
    }
  `;

  return <Wrapper>{children}</Wrapper>;
};

export default PostWrapper;
