const contentful = require("contentful");

const commonConfig = {
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
};

const apiConfig = {
  delivery: {
    accessToken:
      process.env.REACT_APP_CONTENTFUL_DELIVERY_TOKEN,
  },
  preview: {
    accessToken:
      process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN,
    host: "preview.contentful.com",
  },
};

export const createCmsClient = (api = "delivery") => {
  const config = Object.assign(
    {},
    commonConfig,
    apiConfig[api],
  );

  return contentful.createClient(config);
};
