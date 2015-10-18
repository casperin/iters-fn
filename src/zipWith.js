import zip from './zip';
import curry from './curry';

const zipWith = function* (fn, ...its) {
    for (let v of zip.apply(null, its))
        yield fn.apply(null, v);
};

export default curry(zipWith);
