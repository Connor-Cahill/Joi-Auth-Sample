// eslint-disable-next-line
module.exports = (fn) => {
  return (req, res, next) => {
    console.log('Checking');
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
