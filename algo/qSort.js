let qSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    }
    let p = arr[0];
    let l = arr.filter((el, edx) => edx && el <= p);
    let g = arr.filter((el, edx) => edx && el > p);
    return qSort(l).concat(p, qSort(g));
};

let qSort = function (arr) {
    return (arr.length < 2) ? arr : qSort(arr.filter((el, edx) => edx && el <= arr[0])).concat(arr[0], qSort(arr.filter((el, edx) => edx && el > arr[0])));
};