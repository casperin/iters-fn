import curry from './curry';

const filter = function* (fn, it) {
    for (let v of it)
        if (fn(v)) yield v;
};

export default curry(filter);
