import React, {memo} from 'react'
import PropTypes from 'prop-types'
import {setFormVisible} from "../../../actions";
import {connect} from "react-redux";
import './Todo.css';
import SVGContainer from "./container/SVGContainer";
import DataContainer from "./container/DataContainer";

const Todo = memo(({setFormVisible, toggleTodo, deleteTodo, todo, header}) => {
  if (!header)
    return (
        <li style={{
          textDecoration: todo.completed ? 'line-through' : 'none'
        }}>
          <SVGContainer data={todo.category}
                        primary={true}/>
          <DataContainer className={'name'} data={todo.name}/>
          <DataContainer className={'category'} data={todo.category}
                         secondary={true}/>
          <DataContainer className={'dateOfCreation'} data={todo.dateOfCreation.toLocaleDateString()}
                         tertiary={true}/>
          <DataContainer className={'text'} data={todo.text}/>
          <DataContainer className={'datesFromText'} data={todo.datesFromText.join(', ')}
                         tertiary={true}/>
          <SVGContainer data={'edit'} clickHandler={setFormVisible}/>
          <SVGContainer data={(todo.completed) ? 'complete' : ''} clickHandler={toggleTodo}/>
          <SVGContainer data={'delete'} clickHandler={deleteTodo}/>
        </li>
    )
  else
    return (
        <li style={{
          fontWeight: 'bold',
          backgroundColor: 'lightgrey'
        }}>
          <SVGContainer primary={true}/>
          <DataContainer className={'name'} data={'Name'}/>
          <DataContainer className={'category'} data={'Category'}
                         secondary={true}/>
          <DataContainer className={'dateOfCreation'} data={'Created'}
                         tertiary={true}/>
          <DataContainer className={'text'} data={'Text'}/>
          <DataContainer className={'datesFromText'} data={'Dates'}
                         tertiary={true}/>
          <SVGContainer/>
          <SVGContainer/>
          <SVGContainer/>
        </li>
    )
})

Todo.propTypes = {
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func
}

const mapStateToProps = (state, ownProps) => ({
  todo: ownProps.todo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFormVisible: () => dispatch(setFormVisible(ownProps.todo)),
  toggleTodo: ownProps.toggleTodo,
  deleteTodo: ownProps.deleteTodo
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)
