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
}