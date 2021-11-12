let binarySearch = function (val, arr) {
    let l = 0;
    let h = arr.length - 1;
    let ret = -1;
    while (l <= h) {
        let m = parseInt((l + h) / 2);
        let cur = arr[m];
        if (val === cur) {
            ret = m;
        }
        if (cur > val) {
            h = m - 1;
        }
        else {
            l = m + 1;
        }
    }
    return ret;
};