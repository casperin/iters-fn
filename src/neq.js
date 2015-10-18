import curry from './curry';

const neq = (x, y) => x !== y;

export default curry(neq);

