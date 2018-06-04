//
// デファイン定義
//

export const Define = {
    // ベースSVGイメージサイズ
    svgimagesize: {
        width:  842,
        height: 1192,
    },

    // グリッドサイズ
    grid: {
        width: 10,
        height: 10,
    },

    // ハンドルサイズ
    handle: {
        width: 10,
        height: 10,
    },
};

export const PresenBox = {
    A: [
        {
            id: 'box1',
            type: 'text',
            group: 'グループA',
            no: 1,
            x1: 400,
            y1: 100,
            x2: 700,
            y2: 300,
    
            text: {
                kumihoko: 'tate',
                padding_js: 10,
                padding_je: 10,
                padding_gs: 10,
                padding_ge: 10,
                size_j: 20,
                size_g: 20,
                gyokan: 5,
            },
            textgrid: [],
            textResult: [],
        },
        {
            id: 'box2',
            type: 'text',
            group: 'グループA',
            no: 2,
            x1: 400,
            y1: 350,
            x2: 700,
            y2: 550,
    
            text: {
                kumihoko: 'tate',
                padding_js: 10,
                padding_je: 10,
                padding_gs: 10,
                padding_ge: 10,
                size_j: 20,
                size_g: 20,
                gyokan: 5,
            },
            textgrid: [],
            textResult: [],
        },
        {
            id: 'box3',
            type: 'text',
            group: 'グループA',
            no: 3,
            x1: 400,
            y1: 600,
            x2: 700,
            y2: 800,
    
            text: {
                kumihoko: 'tate',
                padding_js: 10,
                padding_je: 10,
                padding_gs: 10,
                padding_ge: 10,
                size_j: 20,
                size_g: 20,
                gyokan: 5,
            },
            textgrid: [],
            textResult: [],
        },
    
        {
            id: 'box4',
            type: 'image',
            group: 'グループB',
            no: 1,
            x1: 100,
            y1: 500,
            x2: 300,
            y2: 650,
        },
    ],

    B: [

    ],
};

export const PresenLine = {
    A: [

    ],

    B: [
        {
            id: 'line001',
            type: 'rect',
            x1: 65,
            y1: 65,
            x2: 775,
            y2: 1142,
    
            width: 0.5,
            color: '#000000',
        },
    ],
};
