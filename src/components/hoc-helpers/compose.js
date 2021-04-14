const compose = (...functions) => (component) => {
  return functions.reduceRight((prevResult, f) => f(prevResult), component);
};

export default compose;
