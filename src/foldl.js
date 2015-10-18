import curry from './curry';

const foldl = (fn, init, [...it]) =>
    it.reduce(fn, init);

export default curry(foldl);
