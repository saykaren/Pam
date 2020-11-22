import React, { useState } from 'react';
import useInterval from 'react-useinterval';

const LogoState = () => {
  const workStates = {
    0: '...Sew me a quilt',
    1: '...Write me a novel',
    2: '...Sew me a dress',
    3: '...Bake me a cheesecake',
    4: '...Cater my event',
    5: '...Sew me a blanket',
    6: '...Teach me to sew',
  };

  const [greeting, setGreeting] = useState(workStates[0]);

  const handleChange = () => {
    //Filter function to an Object
    Object.filter = (obj, predicate) =>
      Object.keys(obj)
        .filter((key) => predicate(obj[key]))
        .reduce((res, key) => ((res[key] = obj[key]), res), {});

    // Determine last variable item so I move back to first object in workStates
    let comparing = Object.filter(
      workStates,
      (x) => x === '...Teach me to sew',
    );
    //Variable to determine the last item to know when to change it back to 0 in the object workStates
    let lastItem = Object.values(comparing).toString();

    //greeting and CurrentValue is a string originally "...Build a React website" string to be concise
    let currentValue = Object.filter(workStates, (x) => x === greeting); //  {0: "...Build me a website"} object
    let currentKey = Object.keys(currentValue); // pulls the key of that currentValue

    let workingOn = currentKey[0]; // string
    let currentKeyValue = parseInt(workingOn);

    if (greeting !== lastItem) {
      let finalResultAdded = currentKeyValue + 1;
      setGreeting(workStates[finalResultAdded]);
    } else {
      setGreeting(workStates[0]);
    }
  };

  useInterval(handleChange, 1000, 5);

  return (
    <div>
      <div value={greeting}>{greeting}</div>
      <section id="inputState"></section>
    </div>
  );
};

export default LogoState;
