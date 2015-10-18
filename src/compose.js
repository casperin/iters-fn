const compose = (...args) => {
    const start = args.length - 1;

    return function (...a) {
        let i = start,
            result = args[start].apply(this, a);

        while (i--)
            result = args[i].call(this, result);

        return result;
    };
};

export default compose;
