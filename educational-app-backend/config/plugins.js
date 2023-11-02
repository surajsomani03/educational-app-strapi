module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'dgt3c6zon',
        api_key: '276817536975763',
        api_secret: 'LIqjnvlaBBzWkNo9b2O4Ll2az6Q',
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});