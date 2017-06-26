var React = require('react');
var Note = require('./Note.jsx');
var NoteForm = require('./NoteForm.jsx');

var List = React.createClass({
    add(text) {
        this.state.mang.push(text);
        this.setState(this.mang);
    },
    del(index) {
        this.state.mang.splice(index, 1);
        this.setState(this.state);
    },
    getInitialState() {
        return { mang: ["Android", "IOS", "NodeJs"] }
    },
    render() {
        return (
            <div>
                <NoteForm addNode={this.add} />
                {
                    this.state.mang.map((e, i) => {
                        return <Note key={i} remove={this.del} index={i}>{e}</Note>
                    })
                }
            </div>
        );
    }
});

module.exports = List;