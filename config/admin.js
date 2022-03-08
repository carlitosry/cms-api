module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4224129394d661f4f74f1fdc17cee6dd'),
  },
});
