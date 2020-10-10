let levels = [
    // lvl: 1
    {
        start: {
            c: 13,
            r: 0
        },
        finish: {
            c: 14,
            r: 6
        },
        field: [
            ['C', 'B', 'A', 'B', '8', '7', '0', 'B', 'A', '5', 'C', 'B', '8', '7', '8'],
            ['D', '0', 'B', '8', 'D', '0', '9', '6', 'B', '0', '1', '8', 'D', 'A', '9'],
            ['2', 'D', '8', 'D', '8', 'D', '0', 'B', '4', 'D', '8', 'D', 'A', 'B', '8'],
            ['D', 'A', '9', 'C', '9', '2', 'D', 'A', 'B', 'A', '9', '6', 'B', '0', '9'],
            ['C', 'B', 'A', '1', '0', '9', 'C', 'B', 'A', 'B', 'A', 'B', '8', 'D', '8'],
            ['D', 'A', 'B', '8', 'D', 'A', '9', 'C', 'B', 'A', '5', 'C', '1', '8', '3'],
            ['C', '5', 'C', '9', 'C', 'B', '0', '9', 'C', 'B', 'A', '9', 'C', '9', '2'],
            ['D', 'A', '1', 'A', '9', '6', '9', '6', '9', '6', 'B', 'A', '1', 'A', '9']
        ]
    },
    // lvl: 2
    {
        start: {
            c: 11,
            r: 2
        },
        finish: {
            c: 7,
            r: 7
        },
        field: [
            ['C', 'B', 'A', 'B', '0', 'B', '0', 'B', 'A', 'B', '0', '5', 'C', 'B', '8'],
            ['D', '0', '5', 'C', '9', '6', '9', 'C', 'B', '8', 'D', '8', 'D', '8', '3'],
            ['C', '9', 'C', '9', 'C', 'B', 'A', '1', '4', 'D', '8', '3', 'C', '1', '8'],
            ['D', '8', 'D', '8', 'D', 'A', 'B', 'A', 'B', '8', 'D', 'A', '9', 'C', '9'],
            ['C', '9', 'C', '1', 'A', '5', 'C', 'B', 'A', '9', 'C', 'B', '8', 'D', '8'],
            ['D', '8', '3', 'C', 'B', 'A', '1', 'A', '5', 'C', '9', '6', '9', 'C', '9'],
            ['C', '9', 'C', '9', 'C', 'B', '0', 'B', 'A', '9', 'C', 'B', 'A', '1', '8'],
            ['D', 'A', '1', 'A', '9', '6', '9', '6', 'B', 'A', '9', '6', 'B', 'A', '9']
        ]
    },
    // lvl: 3
    {
        start: {
            c: 7,
            r: 7
        },
        finish: {
            c: 14,
            r: 2
        },
        field: [
            ['C', 'B', '0', 'B', 'A', 'B', 'A', '5', 'C', 'B', '0', '5', 'C', 'B', '8'],
            ['D', '8', 'D', 'A', 'B', 'A', 'B', '0', '1', '8', 'D', '8', 'D', '8', '3'],
            ['C', '9', 'C', 'B', '8', '7', 'A', '9', '2', 'D', '8', 'D', 'A', '9', '2'],
            ['D', '8', 'D', '8', 'D', 'A', 'B', '8', 'D', '0', '9', 'C', 'B', 'A', '9'],
            ['C', '9', 'C', '9', 'C', 'B', 'A', '9', 'C', '1', '8', 'D', '0', 'B', '8'],
            ['D', 'A', '9', 'C', '9', '6', 'B', '0', '9', '6', '1', '8', '3', 'C', '9'],
            ['C', 'B', 'A', '9', '6', 'B', 'A', '9', 'C', 'B', 'A', '9', '6', '1', '8'],
            ['D', 'A', 'B', 'A', 'B', 'A', 'B', '4', 'D', 'A', 'B', 'A', 'B', 'A', '9']
        ]
    },
    // lvl: 4
    {
        start: {
            c: 10,
            r: 6
        },
        finish: {
            c: 1,
            r: 4
        },
        field: [
            ['C', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', '0', '5', 'C', 'B', '8'],
            ['D', 'A', 'B', 'A', '5', 'C', 'B', '0', '5', 'C', '9', '6', '1', '8', '3'],
            ['C', '5', 'C', 'B', 'A', '9', 'C', '9', '2', 'D', 'A', 'B', '8', 'D', '8'],
            ['D', 'A', '1', '0', 'B', '8', 'D', '8', 'D', '0', 'B', '0', '1', '0', '9'],
            ['C', '5', 'C', '1', '8', 'D', '8', 'D', 'A', '9', 'C', '9', '2', 'D', '8'],
            ['D', '8', 'D', '8', '3', 'C', '9', 'C', 'B', '8', 'D', '8', 'D', 'A', '9'],
            ['C', '1', '0', '9', 'C', '9', '6', '1', '8', 'D', '4', 'D', 'A', 'B', '8'],
            ['D', '4', 'D', '4', 'D', 'A', 'B', '4', 'D', 'A', 'B', 'A', 'B', 'A', '9']
        ]
    },
    // lvl: 5
    {
        start: {
            c: 6,
            r: 7
        },
        finish: {
            c: 10,
            r: 3
        },
        field: [
            ['C', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', '0', 'B', '8'],
            ['D', 'A', 'B', 'A', 'B', '0', '5', 'C', 'B', 'A', 'B', '8', '3', 'C', '9'],
            ['C', 'B', '0', 'B', 'A', '9', 'C', '9', 'C', 'B', '8', 'D', '4', 'D', '8'],
            ['3', 'C', '9', 'C', 'B', 'A', '9', '2', 'D', '8', '3', 'C', 'B', 'A', '9'],
            ['C', '1', 'A', '1', 'A', 'B', 'A', '1', 'A', '9', 'C', '1', '8', '7', '8'],
            ['D', 'A', '5', 'C', 'B', 'A', 'B', 'A', 'B', '0', '9', 'C', '1', 'A', '9'],
            ['C', 'B', 'A', '9', 'C', 'B', 'A', 'B', '8', 'D', '8', 'D', '8', '7', '8'],
            ['D', 'A', 'B', 'A', '1', '4', '7', 'A', '9', '6', '1', '4', 'D', 'A', '9']
        ]
    },
    // lvl: 6
    {
        start: {
            c: 0,
            r: 0
        },
        finish: {
            c: 1,
            r: 1
        },
        field: [
            ['0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0'],
            ['1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1'],
            ['0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0'],
            ['1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1'],
            ['0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0'],
            ['1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1'],
            ['0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0'],
            ['1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1']
        ]
    },
    // lvl: next
    {
        start: {
            c: 0,
            r: 0
        },
        finish: {
            c: 1,
            r: 1
        },
        field: [
            ['0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0'],
            ['1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1'],
            ['0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0'],
            ['1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1'],
            ['0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0'],
            ['1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1'],
            ['0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0'],
            ['1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1', '0', '1']
        ]
    }
];