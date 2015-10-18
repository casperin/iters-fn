import all from './all';
import any from './any';
import enumerate from './enumerate';
import filter from './filter';
import flatten from './flatten';
import flattenDeep from './flattenDeep';
import map from './map';
import list from './list';
import max from './max';
import min from './min';
import random from './random';
import range from './range';
import foldl from './foldl';
import foldl1 from './foldl1';
import foldr from './foldr';
import foldr1 from './foldr1';
import reversed from './reversed';
import sorted from './sorted';
import str from './str';
import sum from './sum';
import zip from './zip';
import zipWith from './zipWith';
import reject from './reject';
import find from './find';
import take from './take';
import takeWhile from './takeWhile';
import takeUntil from './takeUntil';
import drop from './drop';
import dropWhile from './dropWhile';
import dropUntil from './dropUntil';
import slice from './slice';
import curry from './curry';
import compose from './compose';
import toArray from './toArray';

// Comparison
import eq from './eq';
import neq from './neq';
import gt from './gt';
import lt from './lt';
import gteq from './gteq';
import lteq from './lteq';

const iters = {
    all,
    any,
    enumerate,
    filter,
    flatten,
    flattenDeep,
    map,
    list,
    max,
    min,
    random,
    range,
    foldl,
    foldl1,
    foldr,
    foldr1,
    reversed,
    sorted,
    str,
    sum,
    zip,
    zipWith,
    reject,
    find,
    take,
    takeWhile,
    takeUntil,
    drop,
    dropWhile,
    dropUntil,
    slice,
    curry,
    compose,
    toArray,
    eq,
    neq,
    gt,
    lt,
    gteq,
    lteq
};

//export default iters;
window.iters = iters;
