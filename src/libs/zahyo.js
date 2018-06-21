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

import { Define } from '../define.js';

export const Grid = {
    //
    // グリッドにスナップさせた場合の座標を返す
    //
    // [IN]
    //   x: 紙面座標（SVGイメージの右上基点の座標）のX
    //   y: 紙面座標（SVGイメージの右上基点の座標）のY
    //   area_w: 紙面エリア（SVGイメージ）の幅
    //   area_h: 紙面エリア（SVGイメージ）の高さ
    //   grid_w: グリッドの幅
    //   grid_h: グリッドの高さ
    //
    // [OUT]
    //   [x, y] : スナップ後の紙面座標（SVGイメージの右上基点の座標）
    //
    snap: (x, y, area_w, area_h, grid_w, grid_h) => {
        let ru_x = x;
        let ru_y = y;

        // X座標をグリッド幅で割って、余りが0の場合は、X座標決定
        let amari, sho, minX, maxX;
        amari = ru_x % grid_w;
        if (amari == 0) {
            // X座標は決定
        } else {
            // グリッドの小さい方のX座標を求める
            sho = Math.floor(ru_x / grid_w);
            minX = sho * grid_w;
            // グリッドの大きい方のX座標を求める
            maxX = (sho + 1) * grid_w;

            // 余りが、グリッドの半分より大きければ大きい方、小さければ小さい方
            if (amari >= (grid_w / 2)) {
                ru_x = maxX;
            } else {
                ru_x = minX;
            }
        }

        // Y座標をグリッド高さで割って、余りが0の場合は、Y座標決定
        let minY, maxY;
        amari = ru_y % grid_h;
        if (amari == 0) {
            // Y座標は決定
        } else {
            // グリッドの小さい方のY座標を求める
            sho = Math.floor(ru_y / grid_h);
            minY = sho * grid_h;
            // グリッドの大きい方のX座標を求める
            maxY = (sho + 1) * grid_h;

            // 余りが、グリッドの半分より大きければ大きい方、小さければ小さい方
            if (amari >= (grid_h / 2)) {
                ru_y = maxY;
            } else {
                ru_y = minY;
            }
        }

        // スナップ後の座標が0より小さい場合は、0にする
        if (ru_x < 0) {
            ru_x = 0;
        }
        if (ru_y < 0) {
            ru_y = 0;
        }

        // スナップ後の座標がエリアの最大スナップ座標より大きければ、最大スナップ座標にする
        sho = Math.floor(area_w / grid_w);
        const areamax_x = grid_w * sho;
        if (ru_x > areamax_x) {
            ru_x = areamax_x;
        }
        sho = Math.floor(area_h / grid_h);
        const areamax_y = grid_h * sho;
        if (ru_y > areamax_y) {
            ru_y = areamax_y;
        }

        return [ru_x, ru_y];
    },

    //
    // 紙面（SVGイメージ）からはみ出している矩形を内部に収める
    //
    // [IN]
    //   x1: 紙面座標（SVGイメージの右上基点の座標）の矩形の始点X
    //   y1: 紙面座標（SVGイメージの右上基点の座標）の矩形の始点Y
    //   x2: 紙面座標（SVGイメージの右上基点の座標）の矩形の終点X
    //   y2: 紙面座標（SVGイメージの右上基点の座標）の矩形の終点Y
    //   area_w: 紙面エリア（SVGイメージ）の幅
    //   area_h: 紙面エリア（SVGイメージ）の高さ
    //   grid_w: グリッドの幅
    //   grid_h: グリッドの高さ
    //
    // [OUT]
    //   [x1, y1, x2, y2] : はみ出してない矩形の始点終点座標
    //
    changeInArea: (x1, y1, x2, y2, area_w, area_h, grid_w, grid_h) => {
        // 矩形の幅と高さを得る
        const width  = x2 - x1;
        const height = y2 - y1;

        // 始点がオーバーしていたら、範囲に収める
        if (x1 < 0) {
            x1 = 0;
        }
        if (y1 < 0) {
            y1 = 0;
        }

        // 終点をグリッドにスナップさせる
        [x1, y1] = Grid.snap(x1, y1, area_w, area_h, grid_w, grid_h);
        
        // 始点を求める
        x2 = x1 + width;
        y2 = y1 + height;

        // 終点をグリッドにスナップさせる
        [x2, y2] = Grid.snap(x2, y2, area_w, area_h, grid_w, grid_h);

        x1 = x2 - width;
        y1 = y2 - height;
        if (x1 < 0) {
            x1 = 0;
        }
        if (y1 < 0) {
            y1 = 0;
        }

        return [x1, y1, x2, y2];
    },
};
