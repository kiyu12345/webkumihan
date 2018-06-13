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

    // 右上を基点とする点XYが、ボックスの内部に入っていれば true を返す
    isInBox: (x, y, box_x1, box_y1, box_x2, box_y2) => {
        if (x >= box_x1 && y >= box_y1 && x <= box_x2 && y <= box_y2) {
            return true;
        }

        return false;
    }
};

export const Cursor = {
    //
    // カーソルのページの左上起点からの相対座標を返す
    //
    // [IN]
    //   e: マウスイベント
    //
    // [OUT]
    //    [x, y]: ページ（ブラウザ表示エリア）の左上からの相対座標
    //
    curPageKiten: (e) => {
        const x = e.pageX;
        const y = e.pageY;

        return [x, y];
    },

    //
    // カーソル位置のウィンドウスクロールを考慮したページの左上起点からの相対座標を返す
    //
    // [IN]
    //   x: ページの左上からの相対座標 X
    //   y: ページの左上からの相対座標 Y
    //
    // [OUT]
    //   [x, y]: ページ（ブラウザ表示エリア）の左上からの相対座標（ページスクロールも考慮）
    //
    curPageScrollKiten: (x, y) => {
        const sx = window.pageXOffset;
        const sy = window.pageYOffset;

        return [sx + x, sy + y];
    },

    // 
    // 指定要素の左上起点が、ページの左上起点からの座標を返す
    //
    // [IN]
    //   elem: 要素（エレメント）
    //
    // [OUT]
    //   [x, y]: 指定要素の左上起点が、ページ（ブラウザ表示エリア）の左上からの相対座標
    //
    elemPageKiten: (elem) => {
        const em = elem.getBoundingClientRect();

        return [em.left, em.top];
    },

    //
    // 指定要素の左上起点が、スクロールを考慮したページの左上起点からの相対座標を返す
    //
    // [IN]
    //   elem: 要素（エレメント）
    //
    // [OUT]
    //   [x, y]: 指定要素の左上起点が、ページ（ブラウザ表示エリア）の左上からの相対座標（ページスクロールも考慮）
    //
    elemPageScrollKiten: (elem) => {
        const sx = window.pageXOffset;
        const sy = window.pageYOffset;

        const [x, y] = Cursor.elemPageKiten(elem);

        return [sx + x, sy + y];
    },

    //
    // カーソル位置の指定要素の左上起点からの相対座標を返す
    //
    // [IN]
    //   x: ページの左上からの相対座標 X
    //   y: ページの左上からの相対座標 Y
    //   elem: 要素（エレメント）
    //
    // [OUT]
    //   [x, y]: カーソル位置の指定要素の左上起点からの相対座標
    //
    curElemKiten: (x, y, elem) => {
        // 要素の左上起点を得る
        const [emx, emy] = Cursor.elemPageScrollKiten(elem);

        // カーソルの座標を得る
        const [cx, cy] = Cursor.curPageScrollKiten(x, y);

        return [cx - emx, cy - emy];
    },

    //
    // カーソルの指定要素のスクロールを考慮した左上起点からの相対座標
    //
    // [IN]
    //   x: ページの左上からの相対座標 X
    //   y: ページの左上からの相対座標 Y
    //   elem: 要素（エレメント）
    //
    // [OUT]
    //   [x, y]: カーソルの指定要素の左上起点からの相対座標（指定要素のスクロールも考慮）
    //
    curElemScrollKiten: (x, y, elem) => {
        // 要素の左上起点を得る
        const [emx, emy] = Cursor.elemPageScrollKiten(elem);

        // カーソルの座標を得る
        const [cx, cy] = Cursor.curPageScrollKiten(x, y);

        // 要素のスクロール量を得る
        const esx = elem.scrollLeft;
        const esy = elem.scrollTop;

        return [cx - emx + esx, cy - emy + esy];
    },

    //
    // カーソルの指定要素のスクロールを考慮した左上起点からの相対座標（指定要素の拡大縮小率を考慮）
    //
    // [IN]
    //   x: ページの左上からの相対座標 X
    //   y: ページの左上からの相対座標 Y
    //   elem: 要素（エレメント）
    //   scale: 要素（エレメント）の拡大縮小率（1.0 = 100%）
    //
    // [OUT]
    //   [x, y]: カーソルの指定要素の左上起点からの相対座標（指定要素のスクロール、指定要素の拡大縮小率を考慮）
    //
    curElemScaleScrollKiten: (x, y, elem, scale = 1.0) => {
        // 要素の左上起点を得る
        const [emx, emy] = Cursor.elemPageScrollKiten(elem);

        // カーソルの座標を得る
        const [cx, cy] = Cursor.curPageScrollKiten(x, y);

        // 要素のスクロール量を得る
        const esx = elem.scrollLeft / scale;
        const esy = elem.scrollTop  / scale;

        return [(cx - emx) / scale + esx, (cy - emy) / scale + esy];
    },
};