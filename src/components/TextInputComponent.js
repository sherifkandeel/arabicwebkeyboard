import React , { Component } from 'react';

export default class TextInputComponent extends Component {
    constructor(props) {
        super(props);
        this.mapper = this.mapper.bind(this);
        this.state = {
            value: '',
            lastEvent: 'input'
        };
    }
    mapper(event) {
        const map = { "1":"١", "2":"٢", "3":"٣", "4":"٤", "5":"٥", "6":"٦", "7":"٧", "8":"٨", "9":"٩", "0":"٠", "q":"ض", "w":"ص", "e":"ث", "r":"ق", "t":"ف", "y":"غ", "u":"ع", "i":"ه", "o":"خ", "p":"ح", '{':'ج', '[':'ج', "}":"د", "]":"د", "a":"ش", "s":"س", "d":"ي", "f":"ب", "g":"ل", "h":"ا", "j":"ت", "k":"ن", "?":"⸮", "l":"م",  ";":"ك", "\\":"ط", "'":"ط", "z":"ئ", "x":"ء", "c":"ؤ", "v":"ر",".":"ز", "b":"لا", "n":"ى", "m":"ة", "<":"و", ",":"و", "-":"ظ", "/":"ظ", "`":"ذ", "D":"ذ", "Y":"إ","Q":"َ","W":"ً","E":"ُ","A":"ِ","S":"ٍ", "G":"لأ","H":"أ","T":"لإ","Y":"إ","B":"لآ","N":"آ","J":"ـ","K":"،", }
        const value = event.target.value;
        const lastEvent = this.state.lastEvent
        if (event.type === "paste"){
            let data = event.clipboardData.getData('Text')
            let tmpval = ''
            for (var i = 0; i < data.length; i++) {
                if (map[data[i]]){
                    tmpval += map[data[i]]
                } else {
                    tmpval += data[i]
                }
            }
            this.setState({
                value: value + tmpval
            });
        }
        else if (lastEvent === "input"){
            if (map[value[value.length-1]]) {
                this.setState({
                    value: this.state.value + map[value[value.length-1]],
                });
            } else {
                this.setState({
                    value: value
                });
            }
        }
        this.setState({
            lastEvent: event.type
        })
    }

        render() {
            return (
                <div className="textinput" >
                <textarea style={{direction: 'rtl'}} type="text" value={this.state.value} onPaste={this.mapper} onInput={this.mapper} />
                </div>
            ) 
        }
    }
