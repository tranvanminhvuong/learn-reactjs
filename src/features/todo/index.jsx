import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

TodoFeatures.propTypes = {

};

function TodoFeatures(props) {
    const todoList = [
        {
            id: 1,
            title: "Eat",
            status: 'new',
        },
        {
            id: 2,
            title: "Code",
            status: 'complite',
        },
        {
            id: 3,
            title: "Drink",
            status: 'new',
        },
    ]
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoFeatures;