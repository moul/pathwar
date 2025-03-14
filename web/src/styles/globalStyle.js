import { css } from "@emotion/core";
import islandInternalBg from "../images/island-light-mode-illustration-big.svg";

const normalize =
  "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}";

export const globalStyle = ({ colors, font, type }, _bodyBg) => {
  const isDark = type === "dark";

  return css`
    ${normalize}
    body,
    html {
      background-color: ${colors.body};
      background-position: -15rem 0;
      background-repeat: no-repeat;
      font-family: ${font.family.body};
      font-size: ${font.size.base};
      font-weight: 500;
      color: ${colors.secondary};
      margin: 0;
      padding: 0;
      ${_bodyBg && `background-image: url(${islandInternalBg});`}
    }

    h1 {
      color: ${isDark ? colors.light : colors.primary};
      font-size: 3.125rem;
      font-family: ${font.family.h1};
    }

    h2 {
      font-size: 1.25rem;
      font-weight: bold;
    }

    h3 {
      font-size: 1.125rem;
      font-weight: bold;
    }

    .custom-button {
      border: none;
      background: ${isDark ? colors.tertiary : colors.primary};
      border-radius: 31px;
      font-size: 1.25rem;
      color: #ffffff;
      text-align: center;
      font-weight: bold;
      padding: 1rem 3rem;
      cursor: pointer;
      transition: all 0.3s linear;

      &.outline {
        color: ${colors.primary};
        background-color: transparent;
        font-size: 1rem;
        border: 2px solid ${colors.primary};
        border-radius: 31px;
        padding: 1rem 2rem;
      }

      &:hover {
        opacity: 0.7;
      }
    }

    .siteContainer {
      padding: 0 50px;
      width: auto;
    }

    .dimmer {
      margin-top: 100px;
      .loader {
        position: relative;
      }
    }

    .dimmerSmall {
      width: 20px;
    }

    .img-responsive {
      max-width: 100%;
      height: auto;
      display: block;
    }

    @media (max-width: 700px) {
      .page-content {
        margin: 160px 0 0;
      }
    }

    @media (max-width: 991px) {
      h1 {
        font-size: 1.562rem;
      }

      h2 {
        font-size: 1.125rem;
        font-weight: normal;
        margin: 0;
      }

      .custom-button {
        font-size: 1.125rem;
        padding: 0.4rem 1rem;

        &.outline {
          padding: 0.4rem 1rem;
        }
      }

      .siteContainer {
        padding: 0 22px;
        display: flex;
        flex-direction: column;
        width: 100%;
      }
    }
  `;
};
