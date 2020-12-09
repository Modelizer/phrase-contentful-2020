const contentful = require("contentful");

const commonConfig = {
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
};

const envConfig = {
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

export const createCmsClient = (env = "delivery") => {
  const config = Object.assign(
    {},
    commonConfig,
    envConfig[env],
  );

  return contentful.createClient(config);
};
