import React, {userState} from 'react';

function useIncrement(addAmount) {
  const [count, setCont] = userState(0);

  const increase = () => {
    setCont(count + addAmount);
  }

  return [count, increase];

  function Counter1() {
    const [count, increase] = userState(1);

    return(
      <div>
        <h2>
          Count: {count}
          <button onClick={increase}>add 1</button>
        </h2>
      </div>
    )
  }

  function Counter2() {
    const [count, increase] = userState(2);

    return(
      <div>
        <h2> Count : {count}</h2>
        <button onClick={increase}></button>
      </div>
    ) 
  }

}

export default useIncrement;