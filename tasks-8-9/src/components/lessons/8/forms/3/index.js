import React from 'react';

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailRef = React.createRef();
    this.agreeRef = React.createRef();

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { emailRef, agreeRef } = this;
    const email = emailRef.current.value;
    const agreeCheckbox = agreeRef.current.checked;

    if (!email) {
      alert(`entry valid email first, please`);
    }

    if (agreeCheckbox) {
      alert(`email: ${email}`);
    } else {
      alert(`agree, please`);
    }
  };

  render() {
    const { emailRef, agreeRef } = this;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" ref={emailRef} />
        <input type="checkbox" ref={agreeRef} />
      </form>
    );
  }
}

class ControlledForm extends React.Component {
  // your code is here
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      isAgree: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    if (this.state.isAgree) {
      alert("Email was submitted: " + this.state.value);
    } else {
      alert("agree, please");
    }
  }

  handleChangeCheckbox() {
    this.setState({ isAgree: !this.state.isAgree });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          type="checkbox"
          checked={this.state.isAgree}
          onChange={this.handleChangeCheckbox}
        />
      </form>
    );
  }
}

const Task = () => {
  return (
    <div>
      <UncontrolledForm/>
      <ControlledForm/>
    </div>
  );
};

export default Task;
