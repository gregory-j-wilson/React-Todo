import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import todo from './todo.jpg'


let todoTasks = [
  {
    task: 'Finish my project',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Clean the kitchen',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Eat dinner',
    id: 1528817084359,
    completed: false
  },
  {
    task: 'Go to park',
    id: 1528817084360,
    completed: false
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoTasks: todoTasks
    };
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  toggleItem = id => {
    this.setState({
      todoTasks: this.state.todoTasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }


  addItem = itemText => {
    const newItem = {
      task: itemText,
      id: Date.now(),
      completed: false
    };

    console.log(newItem)

    this.setState({
      todoTasks: [...this.state.todoTasks, newItem]
    });
  };

componentDidUpdate (pp, ps) {
    console.log(this.state)
}

clearItems = (e) => {
  console.log('clearing items')
  e.preventDefault()

  this.setState({...this.state, todoTasks: this.state.todoTasks.filter(item => {
    if (!item.completed) {
      return item
    }
  }) })
}




  render() {
    return (
      <div className="app">
        <h1>My To-Do App</h1>
        <TodoList toggleItem={this.toggleItem} todoTasks={this.state.todoTasks}/>
        <TodoForm addItem={this.addItem} clearItems={this.clearItems}/>
        <div className='img'><img src={todo} alt="Todo Postits" /></div>
      </div>
    );
  }
}

export default App;
