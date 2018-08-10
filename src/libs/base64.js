export const Base64 = {
    //=====================================================
    // <img>要素 → Base64形式の文字列に変換
    //   imgobj    : Image オブジェクト
    //   mime_type : string "image/png", "image/jpeg" など
    //=====================================================
    ImageToBase64: (imgobj, mime_type) => {
        // New Canvas
        let canvas = document.createElement('canvas');
        canvas.width  = imgobj.width;
        canvas.height = imgobj.height;
        
        // Draw Image
        let ctx = canvas.getContext('2d');
        ctx.drawImage(imgobj, 0, 0);
        
        // To Base64
        return canvas.toDataURL(mime_type);
    },

    //=====================================================
    // 画像ファイル（フルパス）の拡張子から、MimeTypeを返す
    // [in]
    //   fullpath: 画像ファイルのフルパス
    // [out]
    //   mime_type: MimeType
    //=====================================================
    getMimeType: (fullpath) => {
        // 拡張子を得る
        let f = fullpath.split('.');
        let ext = f[f.length - 1].toLowerCase();

        let mime_type = '';

        switch (ext) {
        case 'jpg':
        case 'jpeg':
            mime_type = 'image/jpeg';
            break;
        case 'png':
            mime_type = 'image/png';
            break;
        case 'gif':
            mime_type = 'image/gif';
            break;
        default:
            mime_type = 'unknown';    
        }

        return mime_type;
    },
};
