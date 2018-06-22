//
// 文字列系
//

export const String = {
    toNumeric: (value) => {
        if (value == '') {
            return '';
        }

        let num = parseInt(value, 10);
        if (isNaN(num)) {
            return '';
        }

        return num;
    },

    toFloat: (value) => {
        if (value == '') {
            return '';
        }

        let ret = '';

        for (let i = 0; i < value.length; i++) {
            let moji = value.slice(i, i + 1);

            if ((moji >= '0' && moji <= '9') || (moji === '.')) {
                ret += moji;
            } else {
                break;
            }
        }

        return ret;
    },
}