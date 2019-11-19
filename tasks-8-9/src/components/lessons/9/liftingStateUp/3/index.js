import React from "react";
import PropTypes from "prop-types";

const buttons = ["first", "nano", "bob", "tomato"];

class Index extends React.Component {
  state = { activeButtonName: "" };

  clickHandler = name => {
    this.setState({ activeButtonName: name });
  };

  render() {
    const { activeButtonName } = this.state;
    return (
      <div>
        {buttons.map((i, index) => (
          <Button
            clickHandler={this.clickHandler}
            key={index}
            name={i}
            isActive={i === this.state.activeButtonName}
          />
        ))}
        <Details name={activeButtonName} />
      </div>
    );
  }
}

class Button extends React.Component {
  state = { active: false };

  clickHandler = () => {
    this.setState(({ active }) => ({ active: !active }));
    this.props.clickHandler(this.props.name);
  };

  render() {
    const { name, isActive } = this.props;
    
    return (
      <button
        onClick={this.clickHandler}
        style={{ color: isActive ? "red" : "blue" }}
      >
        {name}
      </button>
    );
  }
}

function Details({ name }) {
  return <div>{name}</div>;
}

const Task = () => {
  return <Index />;
};

export default Task;

Index.propTypes = {
  activeButtonName: PropTypes.string
}

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
};

Details.propTypes = {
  name: PropTypes.string.isRequired,
};

