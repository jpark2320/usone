declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";

declare module "*.css";
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "react-redux";
declare module "react-router-dom";
declare module "react-router-redux";
