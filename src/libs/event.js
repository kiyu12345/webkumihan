//
// イベント系
//

export const Event = {
    //
    // イベントを発行する
    //
    // [IN]
    //   element: 発行先のエレメント
    //   event: 発行するイベント
    //
    triggerEvent: (element, event) => {
        if (document.createEvent) {
            // IE以外
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent(event, true, true); // event type, bubbling, cancelable
            return element.dispatchEvent(evt);
        } else {
            // IE
            var evt = document.createEventObject();
            return element.fireEvent("on" + event, evt)
        }
    },
}