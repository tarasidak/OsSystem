import React from 'react';

const friends = [
  'Mikenzi',
  'Cash',
  'Steven',
  'Kimmy',
  'Doug'
];

const List = ({ friends }) => {
  // Render a list using the "friends" being passed in.
  return (
    <ul>
      {friends.map(item => (
        <li key={item.toString()}>{item}</li>
      ))}
    </ul>
  );
};

const Task = () => {
  return (
    <div>
      <List friends={friends} />
    </div>
  );
};

export default Task;
