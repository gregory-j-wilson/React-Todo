import React from 'react'

class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            itemText: ''
        }
    }

    handleChange = e => {
        this.setState({ itemText: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        // call addItem prop
        this.props.addItem(this.state.itemText);
        console.log(this.state.itemText)
        this.setState({
          itemText: ""
        });
      };

    render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.itemText}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="What do you have to do?"
                />

                <button type="submit">Add To-Do</button>
                <button onClick={this.props.clearItems}>Clear Completed</button>
                
            </form>
        </div>
    )
}

}


export default TodoForm 