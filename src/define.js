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

export const Font = {
    fontface: `
        @font-face {
            font-family: "maiSMHWeb";
            src: url(font/maiSMHWeb.eot) format("eot"), url(font/maiSMHWeb.woff) format("woff");
        }
        @font-face {
            font-family: "maiSMBWeb";
            src: url(font/maiSMBWeb.eot) format("eot"), url(font/maiSMBWeb.woff) format("woff");
        }
        @font-face {
            font-family: "maiSGHWeb";
            src: url(font/maiSGHWeb.eot) format("eot"), url(font/maiSGHWeb.woff) format("woff");
        }
        @font-face {
            font-family: "maiSGBWeb";
            src: url(font/maiSGBWeb.eot) format("eot"), url(font/maiSGBWeb.woff) format("woff");
        }
    `,
    font: [
        'maiSMHWeb',
        'maiSMBWeb',
        'maiSGHWeb',
        'maiSGBWeb'
    ],
}

export const Line = [
    {},
    {
        type: 'solid',
        pattern: '',
    },
    {
        type: 'dash',
        pattern: '2 2',
    },
    {
        type: 'dash',
        pattern: '4 2',
    },
    {
        type: 'dash',
        pattern: '4 2 2 2'
    },
];

export const PresenBox = {
    A: [
        {
            box_id: 1,
            group_id: 'テキストテスト',
            group_no: 1,
            type: 'text',
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
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        {
            box_id: 2,
            group_id: 'テキストテスト',
            group_no: 2,
            type: 'text',
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
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        {
            box_id: 3,
            group_id: 'テキストテスト',
            group_no: 3,
            type: 'text',
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
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
    
        {
            box_id: 4,
            group_id: '画像テスト',
            group_no: 1,
            type: 'image',
            x1: 100,
            y1: 100,
            x2: 350,
            y2: 300,

            image: {
                url: '',
            },
        },
    ],

    B: [
        { // アマゾンジャパン
            box_id: 1,
            group_id: 'K01タイトル',
            group_no: 1,
            type: 'text',
            x1: 70,
            y1: 70,
            x2: 150,
            y2: 100,
    
            text: {
                kumihoko: 'yoko',
                padding_js: 4,
                padding_je: 4,
                padding_gs: 10,
                padding_ge: 10,
                size_j: 9,
                size_g: 9,
                gyokan: 5,
                font: 4,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 1000人の新規採用 
            box_id: 2,
            group_id: 'K01タイトル',
            group_no: 2,
            type: 'text',
            x1: 70,
            y1: 100,
            x2: 120,
            y2: 370,
    
            text: {
                kumihoko: 'tate',
                padding_js: 0,
                padding_je: 15,
                padding_gs: 10,
                padding_ge: 10,
                size_j: 25,
                size_g: 28,
                gyokan: 5,
                font: 2,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 有料会員増加やサービス拡張で 
            box_id: 3,
            group_id: 'K01タイトル',
            group_no: 3,
            type: 'text',
            x1: 120,
            y1: 100,
            x2: 150,
            y2: 370,
    
            text: {
                kumihoko: 'tate',
                padding_js: 20,
                padding_je: 5,
                padding_gs: 0,
                padding_ge: 10,
                size_j: 17,
                size_g: 17,
                gyokan: 5,
                font: 2,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事01 の本文01 
            box_id: 4,
            group_id: 'K01本文',
            group_no: 1,
            type: 'text',
            x1: 150,
            y1: 70,
            x2: 250,
            y2: 170,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 5,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事01 の本文02 
            box_id: 5,
            group_id: 'K01本文',
            group_no: 2,
            type: 'text',
            x1: 150,
            y1: 170,
            x2: 250,
            y2: 270,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 5,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事01 の本文03 
            box_id: 6,
            group_id: 'K01本文',
            group_no: 3,
            type: 'text',
            x1: 150,
            y1: 270,
            x2: 340,
            y2: 370,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 5,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事01 の本文04 
            box_id: 7,
            group_id: 'K01本文',
            group_no: 4,
            type: 'text',
            x1: 70,
            y1: 370,
            x2: 340,
            y2: 470,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 10,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事01 の本文05 
            box_id: 8,
            group_id: 'K01本文',
            group_no: 5,
            type: 'text',
            x1: 70,
            y1: 470,
            x2: 130,
            y2: 570,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 10,
                padding_ge: 0,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事01 の本文06 
            box_id: 9,
            group_id: 'K01本文',
            group_no: 6,
            type: 'text',
            x1: 70,
            y1: 570,
            x2: 130,
            y2: 670,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 10,
                padding_ge: 0,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事01 の画像 
            box_id: 10,
            group_id: 'K01画像',
            group_no: 1,
            type: 'image',
            x1: 255,
            y1: 75,
            x2: 395,
            y2: 265,
    
            image: {
                url: '',
            },
        },
        { // 記事01 のキャプション 
            box_id: 11,
            group_id: 'K01絵解き',
            group_no: 1,
            type: 'text',
            x1: 400,
            y1: 70,
            x2: 440,
            y2: 270,
    
            text: {
                kumihoko: 'tate',
                padding_js: 15,
                padding_je: 15,
                padding_gs: 7,
                padding_ge: 0,
                size_j: 10,
                size_g: 10,
                gyokan: 5,
                font: 3,

                textgrid: [],
                textResult: [],
                afure: 0,
            },
        },
        { // 記事02 の見出し01 オイシックス・ラ・大地  経営統合へに新社名変更
            box_id: 12,
            group_id: 'K02タイトル',
            group_no: 1,
            type: 'text',
            x1: 140,
            y1: 470,
            x2: 190,
            y2: 570,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 10,
                padding_ge: 0,
                size_j: 8,
                size_g: 12,
                gyokan: 8,
                font: 4,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事02 の見出し01 オイシックスドット大地
            box_id: 13,
            group_id: 'K02タイトル',
            group_no: 2,
            type: 'text',
            x1: 190,
            y1: 470,
            x2: 200,
            y2: 570,
    
            text: {
                kumihoko: 'tate',
                padding_js: 17,
                padding_je: 5,
                padding_gs: 0,
                padding_ge: 0,
                size_j: 7,
                size_g: 7,
                gyokan: 10,
                font: 4,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事02 の本文01
            box_id: 14,
            group_id: 'K02本文',
            group_no: 1,
            type: 'text',
            x1: 200,
            y1: 470,
            x2: 340,
            y2: 570,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 15,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                textgrid: [],
                textResult: [],
                afure: 0,
            },
        },
        { // 記事02 の本文01
            box_id: 15,
            group_id: 'K02本文',
            group_no: 2,
            type: 'text',
            x1: 140,
            y1: 570,
            x2: 250,
            y2: 670,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 15,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                textgrid: [],
                textResult: [],
                afure: 0,
            },
        },
        { // 記事03 の見出し01  楽天
            box_id: 16,
            group_id: 'K03タイトル',
            group_no: 1,
            type: 'text',
            x1: 460,
            y1: 70,
            x2: 640,
            y2: 100,
    
            text: {
                kumihoko: 'yoko',
                padding_js: 55,
                padding_je: 55,
                padding_gs: 8,
                padding_ge: 8,
                size_j: 14,
                size_g: 14,
                gyokan: 5,
                font: 3,

                textgrid: [],
                textResult: [],
                afure: 0,
            },
        },
        { // 記事03 の見出し01  「楽天アイリス」を開発
            box_id: 17,
            group_id: 'K03タイトル',
            group_no: 2,
            type: 'text',
            x1: 460,
            y1: 100,
            x2: 640,
            y2: 140,
    
            text: {
                kumihoko: 'yoko',
                padding_js: 0,
                padding_je: 0,
                padding_gs: 5,
                padding_ge: 15,
                size_j: 16,
                size_g: 20,
                gyokan: 5,
                font: 2,

                textgrid: [],
                textResult: [],
                afure: 0,
            },
        },
        { // 記事03 の見出し01  ビッグデータを分析活用
            box_id: 18,
            group_id: 'K03タイトル',
            group_no: 3,
            type: 'text',
            x1: 460,
            y1: 140,
            x2: 640,
            y2: 170,
    
            text: {
                kumihoko: 'yoko',
                padding_js: 7,
                padding_je: 8,
                padding_gs: 0,
                padding_ge: 15,
                size_j: 15,
                size_g: 15,
                gyokan: 5,
                font: 1,

                textgrid: [],
                textResult: [],
                afure: 0,
            },
        },
        { // 記事03 の本文01
            box_id: 19,
            group_id: 'K03本文',
            group_no: 1,
            type: 'text',
            x1: 640,
            y1: 70,
            x2: 770,
            y2: 170,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 10,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事03 の本文01
            box_id: 20,
            group_id: 'K03本文',
            group_no: 2,
            type: 'text',
            x1: 450,
            y1: 170,
            x2: 770,
            y2: 270,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 5,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事03 の本文01
            box_id: 21,
            group_id: 'K03本文',
            group_no: 3,
            type: 'text',
            x1: 450,
            y1: 270,
            x2: 770,
            y2: 370,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 5,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事04 の見出し01 オルビス
            box_id: 22,
            group_id: 'K04タイトル',
            group_no: 1,
            type: 'text',
            x1: 350,
            y1: 270,
            x2: 420,
            y2: 290,
    
            text: {
                kumihoko: 'yoko',
                padding_js: 15,
                padding_je: 15,
                padding_gs: 5,
                padding_ge: 5,
                size_j: 10,
                size_g: 10,
                gyokan: 5,
                font: 4,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事04 の見出し01 新スマホアプリ配信
            box_id: 23,
            group_id: 'K04タイトル',
            group_no: 2,
            type: 'text',
            x1: 350,
            y1: 290,
            x2: 390,
            y2: 470,
    
            text: {
                kumihoko: 'tate',
                padding_js: 9,
                padding_je: 9,
                padding_gs: 10,
                padding_ge: 10,
                size_j: 18,
                size_g: 20,
                gyokan: 5,
                font: 2,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事04 の見出し01 配送確認やコンビニ支払いも
            box_id: 24,
            group_id: 'K04タイトル',
            group_no: 3,
            type: 'text',
            x1: 390,
            y1: 290,
            x2: 420,
            y2: 470,
    
            text: {
                kumihoko: 'tate',
                padding_js: 15,
                padding_je: 9,
                padding_gs: 9,
                padding_ge: 9,
                size_j: 12,
                size_g: 12,
                gyokan: 5,
                font: 4,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事04 の本文01
            box_id: 25,
            group_id: 'K04本文',
            group_no: 1,
            type: 'text',
            x1: 420,
            y1: 270,
            x2: 440,
            y2: 370,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 5,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事04 の本文01
            box_id: 26,
            group_id: 'K04本文',
            group_no: 2,
            type: 'text',
            x1: 420,
            y1: 370,
            x2: 770,
            y2: 470,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 5,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事04 の本文01
            box_id: 27,
            group_id: 'K04本文',
            no: 3,
            type: 'text',
            x1: 350,
            y1: 470,
            x2: 770,
            y2: 570,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 0,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                textgrid: [],
                textResult: [],
                afure: 0,
            },
        },
        { // 記事05 の見出し01  ベネフィットワン向け
            box_id: 28,
            group_id: 'K05タイトル',
            group_no: 1,
            type: 'text',
            x1: 260,
            y1: 570,
            x2: 280,
            y2: 670,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 3,
                padding_ge: 3,
                size_j: 9,
                size_g: 14,
                gyokan: 5,
                font: 4,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事05 の見出し01  犬用おやつを販売開始
            box_id: 29,
            group_id: 'K05タイトル',
            group_no: 2,
            type: 'text',
            x1: 280,
            y1: 570,
            x2: 300,
            y2: 670,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 3,
                padding_ge: 3,
                size_j: 9,
                size_g: 14,
                gyokan: 5,
                font: 4,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事05 の見出し01  ＥＣホールディングス
            box_id: 30,
            group_id: 'K05タイトル',
            group_no: 3,
            type: 'text',
            x1: 300,
            y1: 570,
            x2: 320,
            y2: 670,
    
            text: {
                kumihoko: 'tate',
                padding_js: 15,
                padding_je: 5,
                padding_gs: 6,
                padding_ge: 6,
                size_j: 8,
                size_g: 8,
                gyokan: 5,
                font: 3,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事05 の本文01
            box_id: 31,
            group_id: 'K05本文',
            group_no: 1,
            type: 'text',
            x1: 320,
            y1: 570,
            x2: 360,
            y2: 670,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 0,
                padding_ge: 0,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事05 本文
            box_id: 32,
            group_id: 'K05本文',
            group_no: 2,
            type: 'text',
            x1: 70,
            y1: 670,
            x2: 360,
            y2: 770,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 10,
                padding_ge: 0,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事05 本文
            box_id: 33,
            group_id: 'K05本文',
            group_no: 3,
            type: 'text',
            x1: 360,
            y1: 720,
            x2: 590,
            y2: 770,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 5,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事05 画像 
            box_id: 34,
            group_id: 'K05画像',
            group_no: 1,
            type: 'image',
            x1: 365,
            y1: 575,
            x2: 520,
            y2: 715,
    
            image: {
                url: '',
            },
        },
        { // 記事05 絵解き
            box_id: 35,
            group_id: 'K05絵解き',
            group_no: 1,
            type: 'text',
            x1: 520,
            y1: 570,
            x2: 590,
            y2: 720,
    
            text: {
                kumihoko: 'tate',
                padding_js: 9,
                padding_je: 9,
                padding_gs: 5,
                padding_ge: 6,
                size_j: 11,
                size_g: 11,
                gyokan: 5,
                font: 3,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事06 画像（カット） 
            box_id: 36,
            group_id: 'K06画像',
            group_no: 1,
            type: 'image',
            x1: 70,
            y1: 770,
            x2: 110,
            y2: 870,
    
            image: {
                url: '',
            },
        },
        { // 記事06 タイトル  期末配当金は５円
            box_id: 37,
            group_id: 'K06タイトル',
            group_no: 1,
            type: 'text',
            x1: 110,
            y1: 770,
            x2: 130,
            y2: 870,
    
            text: {
                kumihoko: 'tate',
                padding_js: 6,
                padding_je: 6,
                padding_gs: 8,
                padding_ge: 0,
                size_j: 11,
                size_g: 12,
                gyokan: 5,
                font: 2,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事06 本文
            box_id: 38,
            group_id: 'K06本文',
            group_no: 1,
            type: 'text',
            x1: 130,
            y1: 770,
            x2: 340,
            y2: 870,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 10,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事07 タイトル  シリカサプリ刷新
            box_id: 39,
            group_id: 'K07タイトル',
            group_no: 1,
            type: 'text',
            x1: 340,
            y1: 770,
            x2: 360,
            y2: 870,
    
            text: {
                kumihoko: 'tate',
                padding_js: 6,
                padding_je: 6,
                padding_gs: 4,
                padding_ge: 4,
                size_j: 11,
                size_g: 12,
                gyokan: 5,
                font: 2,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事07 本文
            box_id: 40,
            group_id: 'K07本文',
            group_no: 1,
            type: 'text',
            x1: 360,
            y1: 770,
            x2: 590,
            y2: 870,
    
            text: {
                kumihoko: 'tate',
                padding_js: 5,
                padding_je: 5,
                padding_gs: 5,
                padding_ge: 5,
                size_j: 9,
                size_g: 10,
                gyokan: 5,
                font: 1,

                grid: [],
                result: [],
                afure: 0,
            },
        },
        { // 記事08 画像（表） 
            box_id: 41,
            group_id: 'K08画像',
            group_no: 1,
            type: 'image',
            x1: 600,
            y1: 570,
            x2: 770,
            y2: 870,
    
            image: {
                url: '',
            },
        },
        { // 記事09 画像（広告） 
            box_id: 42,
            group_id: 'K09画像',
            group_no: 1,
            type: 'image',
            x1: 70,
            y1: 875,
            x2: 770,
            y2: 1130,
    
            image: {
                url: '',
            },
        },
    ],
};

export const PresenSozai = {
    A: [
        {
            sozai_id: '本文テスト用',
            type: 'text',
            text: '　生産年齢人口の減少や第４次産業革命への対応など、建設業は大きな転換期を迎えている。３月に設立７０周年を迎えた全国建設業協会の近藤晴貞会長は、地域建設業が役割を果たし続けるために、「働き方改革と生産性向上に果敢に挑戦しなければならない」とし、「自ら改革を進めていくことも重要になる」と強調する。７０周年を契機に策定した「地域建設業将来展望」には、転換期を変革の好機に変えるためのキーワードを盛り込んだ。地域建設業の進化を後押しするため、全建は今後も各建設業協会の活躍を強力に推進するエンジンであり続ける。\n　近藤会長は、地域建設業に求められる役割について、「安全・安心の確保だけではなく、住民の利便性向上や地域経済の活性化など多岐にわたる」とした上で、「安全・安心の確保という切り口だけでなく、将来の地域建設業のあるべき姿を議論していかなければならない」と指摘する。\n　将来展望では、強みである「地域建設企業力」を生かした新時代の構築を打ち出し、インフラ老朽化対策での川上段階からの参画など、積極的な事業提案への取り組みを１つの方向性として示している。\n　視線の先にあるのは、地域建設業の持続的な発展であり、近藤会長は「若者が先を見通すことができる環境づくりの基盤を、年配の方々がつくる」という考えがベースになっていると説明する。\n　とはいえ、さまざまな施策が立案されても、経営の健全化がなければ実現は難しい。働き方改革や生産性向上の原資となる「健全な経営の継続」のためには、「仕事があり、仕事をこなす人がいて、利潤が出るという仕組みづくりをしなければならない」と強調する。\n　公共事業予算は下げ止まりの傾向が見られているが、今後も必要な仕事量を確保できるかどうかが地域ごとに異なる状況下で、「システムなどのサポートがなければできない部分もあるが、自ら仕事量を確保していくという取り組みも考えていく必要がある」と、積極果敢なチャレンジを生き残りの重要な要素に挙げる。\n　地域建設業が新時代を切り開くためには、公共事業予算の持続的・安定的な確保が重要な役割を果たすが、「予算の配分が一番大きな課題になる」とし、地域建設業、中小企業向けの予算確保に向けた活動を引き続き展開する。\n　働き方改革では、会員が現行の休日実績を１日増やす「休日月１＋（ツキイチプラス）」運動を展開するほか、「単価引き上げ分アップ宣言」に基づき、公共工事設計労務単価の改定分を下請に反映するための取り組みも徹底する。\n　建設キャリアアップシステムに対しては、「技能者の保有資格や就労実績を蓄積することで処遇の改善、技能の研さんにつながる。働き方改革、中長期的な担い手確保の面で、良い仕組みだと思う」と期待を寄せる。\n　新たな一歩を踏み出した全建の今後の役割として近藤会長は、各建協と会員企業が活動しやすい環境づくりや、地域建設業の魅力発信などを挙げる。「各建協単独では取り組みが難しいテーマや課題も、全建で集約すれば全国の声として発信することができる」とし、引き続き「地域建設業の地位向上と発展に寄与し続けていきたい」と力を込める。',
            mojiObjAry: [],
            imageUrl: '',
    
            select: '',
        },
        {
            sozai_id: '画像テスト用',
            type: 'image',
            text: '',
            mojiObjAry: [],
            imageUrl: 'image/layoutA.jpg',
        },
    ],

    B: [
        {
            sozai_id: 'K01タイトル',
            type: 'text',
            text: 'アマゾンジャパン\n１０００人の新規採用\n有料会員増加やサービス拡張で',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K01本文',
            type: 'text',
            text: '　アマゾンジャパンは５月２日、コーポレート職や技術職などの職種について、全国で１０００人規模の新規採用を行うと発表した。Ａｍａｚｏｎの有料会員であるプライム会員の増加や、自動音声サービス「Ａｌｅｘａ（アレクサ）」などのサービスの拡張などを背景に、対応する人員の確保に乗り出す。採用の強化に伴い、東京・目黒の駅前ビル内に、オフィスを新設する。\n　新規採用は、１９年にかけて行う。中途採用のほか、大学卒や専門学校卒を対象とした新卒採用も行う。採用するのは、クラウドコンピューティングなどに通じた技術職や、マーケティング・財務を担う職種が対象だ。\n　東京・目黒に新設するオフィスでは、その日の業務内容に合わせて働く場所を選択できるようにする。機密性の高い商談なども行えるよう、プライベートブースも設ける。オールジェンダー向けのトイレやシャワールーム、礼拝室も備える予定。多様な人材を対象に採用を進めるとみられる。\n　アマゾンジャパンのジャスパー・チャン社長は、「日本はＡｍａｚｏｎにとって世界でも戦略的に重要な国の一つ。生産性の向上や働き方改革、ダイバーシティーの推進に取り組んでいく」としている。',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K01画像',
            type: 'image',
            text: '',
            mojiObjAry: [],
            imageUrl: 'image/K1I1.jpg',
        },
        {
            sozai_id: 'K01絵解き',
            type: 'text',
            text: '新オフィスが入居する目黒セントラルスクエア',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K02タイトル',
            type: 'text',
            text: 'オイシックス・ラ・大地\n経営統合へに新社名変更\nオイシックスドット大地',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K02本文',
            type: 'text',
            text: '　オイシックスドット大地は、１０月に予定しているらでぃっしゅぼーや（本社東京都、高島宏平社長）との経営統合へ向け、新社名を「オイシックス・ラ・大地株式会社」にすることを決めた。\n　経営統合に先駆けて７月１日付で社名を変更。１０月９日にらでぃっしゅぼーや社員はオイシックス・ラ・大地の本社（品川区大崎）に転籍する。',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K03タイトル',
            type: 'text',
            text: '楽　　　天\n「楽天アイリス」を開発\nビッグデータを分析活用',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K03本文',
            type: 'text',
            text: '　楽天はこのほど、ビッグデータを分析して消費行動を理解し、マーケティングソリューションに活用するＡＩエージェント「Ｒａｋｕｔｅｎ　ＡＩｒｉｓ（楽天アイリス）」を開発した。\n　「楽天アイリス」は、約９７００万の楽天ＩＤとそれに基づく消費行動分析データをマーケティングソリューションに活用するため、楽天技術研究所（所在地東京都、森正弥代表）や、楽天のデータサイエンス部、広告事業ディビジョンが共同で開発したシステム。\n　「アイリス」は「ＡＩ」（人工知能）と、英語で「虹彩」を意味する「Ｉｒｉｓ」を組み合わせた造語。機械学習を用いた独自のアルゴリズムで消費行動を解析することで、購買の見込みがあるユーザーを抽出することができる独自機能を有している。\n　対象商品の購買実績があるユーザー層の属性データや購買傾向、価格傾向、楽天グループサービス利用傾向など９２０項目に上るデータを分析してスコア化。\n　マッピングすることで、購買実績のないユーザーでも「購買見込みユーザー」として予測し、広告配信において精度の高い拡張ターゲティングを行うことができる。',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K04タイトル',
            type: 'text',
            text: 'オルビス\n新スマホアプリ配信\n配送確認やコンビニ支払いも',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K04本文',
            type: 'text',
            text: '　化粧品通販のオルビス（本社東京都、小林琢磨社長）は６月１日、新たなスマホアプリを無料で配信する。従来のアプリで使えるポイント蓄積・利用機能に加え、通販で購入した配送状況の確認や、コンビニ支払いができる機能を搭載した。購入に便利な機能を加えることで、顧客の利便性を高め、売り上げ向上を図りたい考えだ。\n　「ＯＲＢＩＳアプリ」は、配送状況の確認や再配達が依頼できるアプリ「ウケトル」と、コンビニ支払いができるアプリ「ＰＡＹＳＬＥ（ペイスル）」のサービスを搭載している。\n　スマホで商品の配送状況が確認でき、商品代金の支払いが行える。注文した商品をコンビニで受け取る場合、電子バーコードをスマホに表示して、コンビニ店頭で決済できる。\n　コンビニ決済ができるのは６月１日からで、国内の「ミニストップ」（４月末現在で２２４７店）、「セイコーマート」（同１１９５店）で先行してサービスを開始する。その他大手コンビニへも導入する予定としている。\n　アプリではこのほか、商品を探して簡単なステップで注文したり、美容特集記事を閲覧することも可能。従来のアプリと同様、オルビルのポイントをためたり、使用したりすることもできる。',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K05タイトル',
            type: 'text',
            text: 'ベネフィットワン向け\n犬用おやつを販売開始\nＥＣホールディングス',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K05本文',
            type: 'text',
            text: '　ＥＣ運営、運営支援を行うＥＣホールディングス（本社東京都、井関貴博社長）は５月１０日、ベネフィット・ワンが運営する会員制優待サービス「ベネフィット・ステーション」の会員向けＥＣサイト「ベネ通販」で、犬用おやつ・サプリメントブランド「Ｃｈｅｒｉ　ＷＡＮ」の商品の販売を始めた。\n　原材料や国産、無添加にこだわった犬用菓子づくりとサプリメントとなっている。\n　販売商品は「Ｃｈｅｒｉ　ＷＡＮ　ＰＬＡＣＥＮＴＡ　ＷＡＮ３種＆米粉パンケーキミックスセット」で、鶏ササミやタラなど３種に加えて米粉パンケーキミックスがセットで、価格は３１４０円（税抜）。会員価格２５２８円（税抜）。',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K05画像',
            type: 'image',
            text: '',
            mojiObjAry: [],
            imageUrl: 'image/K5I1.jpg',
        },
        {
            sozai_id: 'K05絵解き',
            type: 'text',
            text: '「Ｃｈｅｒｉ　ＷＡＮ　ＰＬＡＣＥＭＴＡ　ＷＡＮ３種＆米粉パンケーキミックスセット」',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K06画像',
            type: 'image',
            text: '',
            mojiObjAry: [],
            imageUrl: 'image/K6I1.gif',
        },
        {
            sozai_id: 'K06タイトル',
            type: 'text',
            text: '期末配当金は５円',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K06本文',
            type: 'text',
            text: '■ＪＡＬＵＸは５月１６日、２０１８年３月期の期末配当金につき、年５円増配し、１株５５円を配当すると発表した。６月１５日開催の株主総会に付議する予定。インバウンドの増加を背景に、先ごろ公表した１８年３月期の業績が増収増益と好調だったことから増配に踏み切った。なお、従来の配当は５０円。',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K07タイトル',
            type: 'text',
            text: 'シリカサプリ刷新',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K07本文',
            type: 'text',
            text: '■自然食品のＥＣサイト「ハッピーナチュラル」などを運営するナカヤマは６月１日、シリカ（ケイ素）を用いたサプリ「ハッピーシリカ」をリニューアル発売する。木村式農法米のもみ殻から取れるシリカを使用している。７５種類の植物酵素を同時に摂取できるジュレタイプに仕上げた。価格は５グラム×１４包入りが３本で税別１万２０００円。',
            mojiObjAry: [],
            imageUrl: '',
        },
        {
            sozai_id: 'K08画像',
            type: 'image',
            text: '',
            mojiObjAry: [],
            imageUrl: 'image/K8I1.jpg',
        },
        {
            sozai_id: 'K09画像',
            type: 'image',
            text: '',
            mojiObjAry: [],
            imageUrl: 'image/K9I1.jpg',
        },
    ],
};

export const PresenLine = {
    A: [

    ],

    B: [
        { // 枠
            id: 'line001',
            type: 'rect',
            x1: 65,
            y1: 65,
            x2: 775,
            y2: 1142,
    
            width: 0.5,
            color: '#000000',
        },
        { // ここから縦線
            id: 'line002',
            type: 'line',
            x1: 445,
            y1: 80,
            x2: 445,
            y2: 360,
    
            width: 1,
            color: '#000000',
        },
        {
            id: 'line003',
            type: 'line',
            x1: 340,
            y1: 280,
            x2: 340,
            y2: 560,
    
            width: 1,
            color: '#000000',
        },
        {
            id: 'line004',
            type: 'line',
            x1: 135,
            y1: 480,
            x2: 135,
            y2: 660,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line005',
            type: 'line',
            x1: 250,
            y1: 580,
            x2: 250,
            y2: 660,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line006',
            type: 'line',
            x1: 590,
            y1: 580,
            x2: 590,
            y2: 860,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line007',
            type: 'line',
            x1: 593,
            y1: 580,
            x2: 593,
            y2: 860,
    
            width: 0.5,
            color: '#000000',
        },
        { // ここから横線
            id: 'line008',
            type: 'line',
            x1: 155,
            y1: 170,
            x2: 240,
            y2: 170,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line009',
            type: 'line',
            x1: 455,
            y1: 170,
            x2: 765,
            y2: 170,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line010',
            type: 'line',
            x1: 155,
            y1: 270,
            x2: 435,
            y2: 270,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line011',
            type: 'line',
            x1: 455,
            y1: 270,
            x2: 765,
            y2: 270,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line012',
            type: 'line',
            x1: 80,
            y1: 370,
            x2: 330,
            y2: 370,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line013',
            type: 'line',
            x1: 425,
            y1: 370,
            x2: 765,
            y2: 370,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line014',
            type: 'line',
            x1: 80,
            y1: 470,
            x2: 330,
            y2: 470,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line015',
            type: 'line',
            x1: 350,
            y1: 470,
            x2: 765,
            y2: 470,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line016',
            type: 'line',
            x1: 80,
            y1: 570,
            x2: 120,
            y2: 570,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line017',
            type: 'line',
            x1: 150,
            y1: 570,
            x2: 765,
            y2: 570,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line018',
            type: 'line',
            x1: 80,
            y1: 670,
            x2: 360,
            y2: 670,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line019',
            type: 'line',
            x1: 80,
            y1: 770,
            x2: 585,
            y2: 770,
    
            width: 0.5,
            color: '#000000',
        },
        {
            id: 'line020',
            type: 'line',
            x1: 80,
            y1: 870,
            x2: 765,
            y2: 870,
    
            width: 0.5,
            color: '#000000',
        },
    ],
};

export const PresenLink = {
    B: [
        {
            group_id: 'K01タイトル',
            sozai_id: 'K01タイトル',
        },
        {
            group_id: 'K01本文',
            sozai_id: 'K01本文',
        },
        {
            group_id: 'K01画像',
            sozai_id: 'K01画像',
        },
        {
            group_id: 'K01絵解き',
            sozai_id: 'K01絵解き',
        },

        {
            group_id: 'K02タイトル',
            sozai_id: 'K02タイトル',
        },
        {
            group_id: 'K02本文',
            sozai_id: 'K02本文',
        },
        {
            group_id: 'K02画像',
            sozai_id: 'K02画像',
        },
        {
            group_id: 'K02絵解き',
            sozai_id: 'K02絵解き',
        },

        {
            group_id: 'K03タイトル',
            sozai_id: 'K03タイトル',
        },
        {
            group_id: 'K03本文',
            sozai_id: 'K03本文',
        },
        {
            group_id: 'K03画像',
            sozai_id: 'K03画像',
        },
        {
            group_id: 'K03絵解き',
            sozai_id: 'K03絵解き',
        },

        {
            group_id: 'K04タイトル',
            sozai_id: 'K04タイトル',
        },
        {
            group_id: 'K04本文',
            sozai_id: 'K04本文',
        },
        {
            group_id: 'K04画像',
            sozai_id: 'K04画像',
        },
        {
            group_id: 'K04絵解き',
            sozai_id: 'K04絵解き',
        },

        {
            group_id: 'K05タイトル',
            sozai_id: 'K05タイトル',
        },
        {
            group_id: 'K05本文',
            sozai_id: 'K05本文',
        },
        {
            group_id: 'K05画像',
            sozai_id: 'K05画像',
        },
        {
            group_id: 'K05絵解き',
            sozai_id: 'K05絵解き',
        },

        {
            group_id: 'K06タイトル',
            sozai_id: 'K06タイトル',
        },
        {
            group_id: 'K06本文',
            sozai_id: 'K06本文',
        },
        {
            group_id: 'K06画像',
            sozai_id: 'K06画像',
        },
        {
            group_id: 'K06絵解き',
            sozai_id: 'K06絵解き',
        },

        {
            group_id: 'K07タイトル',
            sozai_id: 'K07タイトル',
        },
        {
            group_id: 'K07本文',
            sozai_id: 'K07本文',
        },
        {
            group_id: 'K07画像',
            sozai_id: 'K07画像',
        },
        {
            group_id: 'K07絵解き',
            sozai_id: 'K07絵解き',
        },

        {
            group_id: 'K08タイトル',
            sozai_id: 'K08タイトル',
        },
        {
            group_id: 'K08本文',
            sozai_id: 'K08本文',
        },
        {
            group_id: 'K08画像',
            sozai_id: 'K08画像',
        },
        {
            group_id: 'K08絵解き',
            sozai_id: 'K08絵解き',
        },

        {
            group_id: 'K09タイトル',
            sozai_id: 'K09タイトル',
        },
        {
            group_id: 'K09本文',
            sozai_id: 'K09本文',
        },
        {
            group_id: 'K09画像',
            sozai_id: 'K09画像',
        },
        {
            group_id: 'K09絵解き',
            sozai_id: 'K09絵解き',
        },

    ],
};
