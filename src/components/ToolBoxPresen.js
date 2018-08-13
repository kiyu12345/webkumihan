import React from 'react';

const styles = {
    container: {
        textAlign: 'left',
    },
    button: {
        marginTop: '2px',
        width: '38px',
        height: '14px',
        textAlign: 'center',
        fontSize: '12px',
        lineHeight: '14px',
        border: '1px solid #333',
        borderRadius: '2px',
        backgroundColor: 'lightblue',
        userSelect: 'none',
        cursor: 'pointer',
    },

    button2: {
        marginTop: '2px',
        width: '38px',
        height: '14px',
        textAlign: 'center',
        fontSize: '12px',
        lineHeight: '14px',
        border: '1px solid #333',
        borderRadius: '2px',
        backgroundColor: 'lightgreen',
        userSelect: 'none',
        cursor: 'pointer',
    },
};


export default class ToolBoxPresen extends React.Component {
    download() {
        let content = document.getElementById('viewbox').innerHTML;
        content = '<?xml version="1.0" encoding="utf-8"?>' + content;
        let blob = new Blob([content], {type: 'text/plain'});
        let a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.target = '_blank';
        a.download = 'shimen.svg';
        a.click();
    }

    importJSON(){
        let f = document.createElement('input');
        f.addEventListener('change', (e) => {
            let file = e.target.files[0];
            console.log(file);
            let reader = new FileReader();
            reader.onload = () => {
                let json = reader.result;
                if(this.isJSON(json)) {
                    json = JSON.parse(json);
                    console.log(json);
                    this.props.onImportLayout({json: json});
                } else {
                    alert('jsonファイルを選択してください。');
                }
            };

            reader.readAsText(file);
        });

        f.type = 'file';
        f.click();
    }

    exportJSON() {
        let expboxs = JSON.stringify(this.props.boxs);
        console.log(expboxs);

        let jsonblob = new Blob([expboxs], {type: 'text/plain'});
        let filename = "WEB組版_EXPORT_" + this.dateFormat(new Date(), "YYYYMMDD-hhmmss") + ".json";
        if(navigator.msSaveBlob) {
            navigator.msSaveOrOpenBlob(jsonblob,filename);
        } else {
            let a = document.createElement('a');
            a.href = window.URL.createObjectURL(jsonblob);
            a.setAttribute('download', filename);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }

    }

    dateFormat(d, format){
        if (!format) format = 'YYYYMMDD-hhmmss';
        format = format.replace(/YYYY/g, d.getFullYear());
        format = format.replace(/MM/g, ('0' + (d.getMonth() + 1)).slice(-2));
        format = format.replace(/DD/g, ('0' + d.getDate()).slice(-2));
        format = format.replace(/hh/g, ('0' + d.getHours()).slice(-2));
        format = format.replace(/mm/g, ('0' + d.getMinutes()).slice(-2));
        format = format.replace(/ss/g, ('0' + d.getSeconds()).slice(-2));
        return format;
    }

    isJSON(arg) {
        arg = (typeof arg === "function") ? arg() : arg;
        if (typeof arg  !== "string") {
            return false;
        }
        try {
            arg = (!JSON) ? eval("(" + arg + ")") : JSON.parse(arg);
            return true;
        } catch (e) {
            return false;
        }
    }

    render() {
        return (
            <div
                style={styles.container}
            >
                <div
                    style={{
                        ...styles.button,
                        float: 'left',
                    }}
                    onClick={() => this.props.onCallLayout({pattern: 'A'})}
                >
                    Lay A
                </div>
                <div
                    style={{
                        ...styles.button,
                        float: 'left',
                        marginLeft: '5px',
                    }}
                    onClick={() => this.props.onCallLayout({pattern: 'B'})}
                >
                    Lay B
                </div>
                <div
                    style={{
                        ...styles.button,
                        float: 'left',
                        marginLeft: '5px',
                    }}
                    onClick={() => this.props.onCallLayout({pattern: 'C'})}
                >
                    Lay C
                </div>

                <div
                    style={{
                        ...styles.button,
                        float: 'right',
                        marginRight: '0px',
                    }}
                    onClick={() => this.props.onEditOnClick()}
                >
                    E On
                </div>
                <div style={{clear: 'both'}}></div>


                <div
                    style={{
                        ...styles.button2,
                        float: 'left',
                    }}
                    onClick={() => this.props.onCallSozai({pattern: 'A'})}
                >
                    Soz A
                </div>
                <div
                    style={{
                        ...styles.button2,
                        float: 'left',
                        marginLeft: '5px',
                    }}
                    onClick={() => this.props.onCallSozai({pattern: 'B'})}
                >
                    Soz B
                </div>
                <div
                    style={{
                        ...styles.button2,
                        float: 'left',
                        marginLeft: '5px',
                    }}
                    onClick={() => this.props.onCallSozai({pattern: 'C'})}
                >
                    Soz C
                </div>

                <div
                    style={{
                        ...styles.button,
                        float: 'right',
                        marginRight: '0px',
                    }}
                    onClick={() => this.props.onEditOffClick()}
                >
                    E Off
                </div>
                <div style={{clear: 'both'}}></div>

                <div
                    style={{
                        ...styles.button2,
                        float: 'left',
                        marginLeft: '45px',
                        backgroundColor: 'lightyellow',
                    }}
                    onClick={() => this.props.onCallLink({pattern: 'B'})}
                >
                    Lnk B
                </div>
                <div
                    style={{
                        ...styles.button2,
                        float: 'left',
                        marginLeft: '5px',
                        backgroundColor: 'lightyellow',
                    }}
                    onClick={() => this.props.onCallLink({pattern: 'C'})}
                >
                    Lnk C
                </div>
                <div style={{clear: 'both'}}></div>

                <div
                    style={{
                        ...styles.button2,
                        float: 'right',
                        marginRight: '0px',
                        backgroundColor: 'orange',
                    }}
                    onClick={() => this.download()}
                >DL
                </div>
 
                <div
                    style={{
                        ...styles.button2,
                        float: 'right',
                        marginRight: '8px',
                        backgroundColor: 'springgreen',
                    }}
                onClick={() => this.exportJSON()}
                >EXP
                </div>

                <div
                    style={{
                        ...styles.button2,
                        float: 'right',
                        marginRight: '5px',
                        backgroundColor: 'deepskyblue',
                    }}
                onClick={() => this.importJSON()}
                >IMP
                </div>

               { /* }
                <div
                    style={{
                        ...styles.button2,
                        float: 'right',
                        marginRight: '0px',
                        backgroundColor: 'orange',
                    }}
                    onClick={() => this.test()}
                >TES
                </div>
                { */ }
            </div>
        )
    }
}