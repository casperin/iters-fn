import curry from './curry';

const gteq = (x, y) => x <= y;

export default curry(gteq);

