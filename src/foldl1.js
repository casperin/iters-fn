import curry from './curry';

const foldl1 = (fn, [...it]) =>
    it.reduce(fn);

export default curry(foldl1);

