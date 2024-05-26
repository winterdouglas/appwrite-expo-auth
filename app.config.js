module.exports = ({ config }) => {
  return {
    ...config,
    scheme: `appwrite-callback-${process.env.EXPO_PUBLIC_PROJECT_ID}`,
  };
};
