import React from "react";
import {connect} from "react-redux";
import StatRow from "./statRow/StatRow";
import {generateRandomID} from "../../helpers/generate.random.id";

const Statistics = ({statistic}) => {
  return (
      (statistic.length) ?
          <ul>
            <StatRow header={true}/>
            {statistic.map(obj =>
                <StatRow
                    key={generateRandomID(10)}
                    obj={obj}
                />
            )}
          </ul> :
          <p>This list is empty!</p>
  )
}

const generateStats = (todos) => {
  let statistics = [];

  todos.forEach(todo => {
    let index = statistics.findIndex(s => s.category === todo.category);

    if (index > -1) {
      statistics[index].total++;
      if (todo.completed)
        statistics[index].completed++;
    } else
      statistics.push({
        category: todo.category,
        total: 1,
        completed: (todo.completed) ? 1 : 0
      });
  });

  return statistics;
}

const mapStateToProps = state => ({
  statistic: generateStats(state.todos)
})

export default connect(
    mapStateToProps,
    undefined
)(Statistics)
