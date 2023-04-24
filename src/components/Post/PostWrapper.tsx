import { useTheme } from '@mui/material';
import styled from 'styled-components';

const Wrapper = styled.div`
  p {
    margin-bottom: 25px;
  }

  a {
    color: #1976d2;
  }

  ul {
    margin-left: 1em;
    margin-bottom: 25px;
  }

  ol {
    margin-left: 1em;
    margin-bottom: 25px;
  }

  code {
    background-color: ${(props) => {
      return props.theme.palette.mode === 'light'
        ? props.theme.palette.background.paper
        : props.theme.palette.common.black;
    }};
    color: ${(props) => {
      return props.theme.palette.mode === 'light'
        ? props.theme.palette.common.black
        : props.theme.palette.common.white;
    }};
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
      border: none;
      display: block;
      padding: 0.5em;
      margin: 1em 0;
    }
  }
`;

const PostWrapper = ({ children }): JSX.Element => {
  const theme = useTheme();

  return <Wrapper theme={theme}>{children}</Wrapper>;
};

export default PostWrapper;
