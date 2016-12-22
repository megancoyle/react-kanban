import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import Card from './Card';
import constants from '../constants';
import CardActionCreators from '../actions/CardActionCreators';

const listTargetSpec = {
  hover(props, monitor) {
    const dragged = monitor.getItem();
    CardActionCreators.updateCardStatus(dragged.id, props.id);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class List extends Component {
  render() {
    const { connectDropTarget } = this.props;

    let cards = this.props.cards.map((card) => {
      return <Card key={card.id}
                  taskCallbacks={this.props.taskCallbacks}
                  cardCallbacks={this.props.cardCallbacks}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  color={card.color}
                  tasks={card.tasks} />
    });

    return connectDropTarget(
      <div className="list">
        <h1>{this.props.title}</h1>
        {cards}
      </div>
    );
  }
}

List.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(React.PropTypes.object),
  connectDropTarget: PropTypes.func.isRequired
};

export default DropTarget(constants.CARD, listTargetSpec, collect)(List);
