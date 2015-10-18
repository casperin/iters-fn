import curry from './curry';

const foldr1 = (fn, [...it]) =>
    it.reduceRight(fn);

export default curry(foldr1);


