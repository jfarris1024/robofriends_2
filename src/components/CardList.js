import React from 'react';
import Card from './Card';

//CardList receives robots from index.js so we pass {robots} in props
const CardList = ({ robots }) => {
  //testing ErrorBoundry
  // if (true) {
  //   throw new Error('ERROR!')
  // }
  // we want to create a card for each user.
  // with loops, give unique key to minimize DOM manip
  return (
    <div>
      {
        robots.map((user, i) => {
          return <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        })
      }
    </div>
  );
}

export default CardList;


