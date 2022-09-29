import React from 'react'
import SVGContainer from "../../todoList/todo/container/SVGContainer";
import DataContainer from "../../todoList/todo/container/DataContainer";

const StatRow = ({obj, header}) => {
  if (!header)
    return (
        <li>
          <SVGContainer data={obj.category}/>
          <DataContainer className={'text'} data={obj.category}
                         primary={true}/>
          <DataContainer className={'number'} data={obj.total}/>
          <DataContainer className={'number'} data={obj.completed}/>
          <DataContainer className={'number'} data={obj.total - obj.completed}/>
        </li>
    )
  else
    return (
        <li style={{
          fontWeight: 'bold',
          backgroundColor: 'lightgrey'
        }}>
          <SVGContainer/>
          <DataContainer className={'text'} data={'Category'}
                         primary={true}/>
          <DataContainer className={'number'} data={'Total'}/>
          <DataContainer className={'number'} data={'Completed'}/>
          <DataContainer className={'number'} data={'Uncompleted'}/>
        </li>
    )
}

export default StatRow
