// 座標系のライブラリ

export const Zahyo = {
    // ウィンドウサイズ（幅、高さ）を返す
    windowArea: () => {
        let ret;

        ret = {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight,
        };

        return ret;
    },

    // 左上を基点とする座標Xが、右上を基点とした場合いくつになるかを返す
    luToruX: (x, kw) => {
        return kw - x;
    },

    // 左上を基点とする座標Yが、右上を基点とした場合いくつになるかを返す
    luToruY: (y, kh) => {
        return y;
    },

    // 右上を基点とする座標Xが、左上を基点とした場合いくつになるかを返す
    ruToluX: (x, kw) => {
        return kw - x;
    },

    // 右上を基点とする座標Yが、左上を基点とした場合いくつになるかを返す
    ruToluY: (y, kh) => {
        return y;
    },

    // 左上座標と右下座標（左上基点の場合）または右上座標と左下座標（右上基点の場合）
    // を、基点XYと幅・高さに変換して返す
    changeRectToArea: (x1, y1, x2, y2) => {
        let rect = {};

        rect.x = x1;
        rect.y = y1;
        rect.w = x2 - x1;
        rect.h = y2 - y1;

        return rect;
    },

    // 左上座標（左上基点の場合）または右上座標（右上基点の場合）と幅・高さ
    // を、左上座標と右下座標（左上基点の場合）または右上座標と左下座標（右上基点の場合）に
    // 変換して返す
    changeAreaToRect: (x, y, w, h) => {
        let rect = {};

        rect.x1 = x;
        rect.y1 = y;
        rect.x2 = x + w;
        rect.y2 = y + h;

        return rect;
    },

    // 左上を基点とする左上座標と右下座標を、右上を基点とする右上座標と左下座標に変換する
    luToruRect: (x1, y1, x2, y2, kw, kh) => {
        let rect = {}

        rect.x1 = Zahyo.luToruX(x2, kw);
        rect.y1 = Zahyo.luToruY(y1, kh);
        rect.x2 = Zahyo.luToruX(x1, kw);
        rect.y2 = Zahyo.luToruX(y2, kh);

        return rect;
    },

    // 右上を基点とする右上座標と左下座標を、左上基点とする左上座標と右下座標に変換する
    ruToluRect: (x1, y1, x2, y2, kw, kh) => {
        let rect = {};

        rect.x1 = Zahyo.ruToluX(x2, kw);
        rect.y1 = Zahyo.ruToluY(y1, kh);
        rect.x2 = Zahyo.ruToluX(x1, kw);
        rect.y2 = Zahyo.ruToluY(y2, kh);

        return rect;
    },

    // 左上を基点とする左上座標と幅・高さを、右上を基点とする右上座標と幅・高さに変換する
    luToruArea: (x, y, w, h, kw, kh) => {
        let area = {};

        area.x = Zahyo.luToruX(x + w, kw);
        area.y = Zahyo.luToruY(y, kh);
        area.w = w;
        area.h = h;

        return area;
    },

    // 右上を基点とする右上座標と幅・高さを、左上を基点とする左上座標と幅・高さに変換する
    ruToluArea: (x, y, w, h, kw, kh) => {
        let area = {};

        area.x = Zahyo.ruToluX(x + w, kw);
        area.y = Zahyo.ruToluY(y, kh);
        area.w = w;
        area.h = h;

        return area;
    },

    // 左上を基点とする左上座標と右下座標を、右上を基点とする右上座標と幅・高さに変換する
    luToruRectToArea: (x1, y1, x2, y2, kw, kh) => {
        let area = {};

        area.x = Zahyo.luToruX(x2, kw);
        area.y = Zahyo.luToruY(y1, kh);
        area.w = x2 - x1;
        area.h = y2 - y1;

        return area;
    },

    // 右上を基点とする右上座標と左下座標を、左上を基点とする左上座標と幅・高さに変換する
    ruToluRectToArea: (x1, y1, x2, y2, kw, kh) => {
        let area = {};

        area.x = Zahyo.ruToluX(x2, kw);
        area.y = Zahyo.ruToluY(y1, kh);
        area.w = x2 - x1;
        area.h = y2 - y1;

        return area;
    },

    // 左上を基点とする左上座標と幅・高さを、右上を基点とする右上座標と左下座標に変換する
    luToruAreaToRect: (x, y, w, h, kw, kh) => {
        let rect = {};

        rect.x1 = Zahyo.luToruX(x + w, kw);
        rect.y1 = Zahyo.luToruY(y, kh);
        rect.x2 = Zahyo.luToruX(x, kw);
        rect.y2 = Zahyo.luToruY(y + h, kh);

        return rect;
    },

    // 右上を基点とする右上座標と幅・高さを、左上を基点とする左上座標と右下座標に変換する
    ruToluAreaToRect: (x, y, w, h, kw, kh) => {
        let rect = {};

        rect.x1 = Zahyo.ruToluX(x + w, kw);
        rect.y1 = Zahyo.ruToluY(y, kh);
        rect.x2 = Zahyo.ruToluX(x, kw);
        rect.y2 = Zahyo.ruToluY(y + h, kh);

        return rect;
    },
};
