import React from 'react';

import PropTypes from "prop-types";


class VoteComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      votesNumber: 0,
    };
  }

  style = {
    padding: '8px',
    marginTop: '16px',
    border: 'solid 1px grey',
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    
    const {voteCount} = prevProps;
    if (this.state.votesNumber !== prevState.votesNumber) {
      const count = this.state.votesNumber +  (-prevState.votesNumber);
      console.log(count);
      this.props.onVote(voteCount + count);
    }
  }

  increase = () => {
    this.setState(({ votesNumber }) => ({votesNumber: votesNumber + 1}));
  }

  decrease = () => {
    this.setState(({ votesNumber }) => ({votesNumber: votesNumber - 1}));
  }

  render() {
    console.log('VoteComponent render');
    const { resolution, terminalNumber } = this.props;
    return (
      <div style={this.style} >
        <h6>Terminal number: {terminalNumber}</h6>
        <h3>Resolution: "{resolution}"</h3>
        <button onClick={this.decrease}>No</button>
        <button onClick={this.increase}>Yes</button>
      </div>
    );
  }
}

const VotingDisplay = ({ resolution, result }) => {
  return (
    <React.Fragment>
      <h1>Resolution: {resolution}</h1>
      <h2>Result: {result}</h2>
    </React.Fragment>
  );
}

class VotingSystem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votesNumber: 0,
    };
  }

  onVote = (votesNumber) => {
    this.setState({votesNumber});
  }

  render() {
    const { resolution } = this.props;
    const { votesNumber } = this.state;
    return (
      <React.Fragment>
        <VotingDisplay resolution={resolution} result={votesNumber} />
        <VoteComponent resolution={resolution} onVote={this.onVote} terminalNumber={1} voteCount={votesNumber}/>
        <VoteComponent resolution={resolution} onVote={this.onVote} terminalNumber={2} voteCount={votesNumber}/>
        <VoteComponent resolution={resolution} onVote={this.onVote} terminalNumber={3} voteCount={votesNumber}/>
      </React.Fragment>
    );
  }
}

const resolution = 'Free beer to all programmers';

const Task = () => {
  return (
    <div>
      <VotingSystem resolution={resolution} />
    </div>
  );
};

export default Task;


VoteComponent.propTypes = {
  resolution: PropTypes.string.isRequired,
  terminalNumber: PropTypes.number.isRequired,
  decrease: PropTypes.func,
  increase: PropTypes.func
};

VotingDisplay.propTypes = {
  resolution : PropTypes.string.isRequired,
  result: PropTypes.number.isRequired
}

VotingSystem.propTypes = {
  resolution : PropTypes.string.isRequired,
}
