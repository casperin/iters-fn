import curry from './curry';

const map = function* (fn, it) {
    for (let v of it)
        yield fn(v);
};

export default curry(map);
