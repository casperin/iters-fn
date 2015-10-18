import curry from './curry';

const sorted = (fn, [...it]) =>
    it.sort(fn);

export default curry(sorted);
