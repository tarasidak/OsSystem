import React, { Component } from "react";

function sendEmail(name, mail, message) {
  const params = { name, mail, message };
  let alertText = "Email sending request in process.\nEmail params:\n";
  alertText += Object.keys(params)
    .map(i => `${i}: ${params[i]}`)
    .join("\n");
  alert(alertText);
}

class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameRef = React.createRef();
    this.mailRef = React.createRef();
    // change code below this line
    this.messageRef = React.createRef();
    // change code above this line
  }

  handleSubmit = e => {
    // change code below this line
    e.preventDefault();
    console.log(this.nameRef.value);
    console.log(this.mailRef.value);
    console.log(this.messageRef.value);
    sendEmail(this.nameRef.value, this.mailRef.value, this.messageRef.value);
    // change code above this line
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label for="name">Name:</label>
          <input
            ref={refEl => (this.nameRef = refEl)}
            type="text"
            id="name"
            name="user_name"
          />
        </div>
        <div>
          <label for="mail">E-mail:</label>
          <input
            ref={refEl => (this.mailRef = refEl)}
            type="email"
            id="mail"
            name="user_mail"
          />
        </div>
        <div>
          <label for="msg">Message:</label>
          <textarea
            ref={refEl => (this.messageRef = refEl)}
            id="msg"
            name="user_message"
          />
        </div>
        <button type="submit">Submit!</button>
      </form>
    );
  }
}

const Task = () => {
  return (
    <div>
      <UncontrolledForm />
    </div>
  );
};

export default Task;
