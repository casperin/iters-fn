import curry from './curry';

const lteq = (x, y) => x >= y;

export default curry(lteq);

