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
    }
};
