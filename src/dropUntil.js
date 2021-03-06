import curry from './curry';

const dropUntil = function* (fn, it) {
    let drop = true;
    for (let v of it) {
        if (drop)
            drop = !fn(v);
        else
            yield v;
    }
};

export default curry(dropUntil);
