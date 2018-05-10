// 座標系のライブラリ

export const Zahyo = {
    changeRect1: (x1, y1, x2, y2) => {
        let rect = {};

        rect.x = x1;
        rect.y = y1;
        rect.w = x2 - x1;
        rect.h = y2 - y1;

        return rect;
    },

    changeRect2: (x, y, w, h) => {
        let rect = {};

        rect.x1 = x;
        rect.y1 = y;
        rect.x2 = x + w;
        rect.y2 = y + h;

        return rect;
    },
};
