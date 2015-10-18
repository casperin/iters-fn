import curry from './curry';

const foldr = (fn, init, [...it]) =>
    it.reduceRight(fn, init);

export default curry(foldr);

