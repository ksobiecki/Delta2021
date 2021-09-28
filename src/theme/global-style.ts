import { createGlobalStyle } from 'styled-components';

import 'sanitize.css';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: OpenSans;
  }

  a {
    text-decoration: none;
  }

  .image-gallery {
    margin: 10vh 0 0 0;
    width: 40vw;

    @media only screen and (max-width: 768px) {
      margin: 13vh 0 0 0;
      width: 90vw;
    }
  }

  .image-gallery-svg, .image-gallery-icon {
    &:hover {
      color: #7168ad;
    }
  }

  .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover {
    border: 4px solid #7168ad;
  }

  .image-gallery-thumbnail:hover {
    cursor: pointer;
  }

  .image-gallery-content {
    &.fullscreen {
      @media only screen and (max-width: 768px) {
        margin: 25vh 0 0 0;
      }
    }
  }
`;
