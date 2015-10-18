import drop from './drop';
import take from './take';
import curry from './curry';

const slice = (n, m, it) => take(m-n, drop(n, it));

export default curry(slice);
