import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const resetCount = () => {
    setCount(0);
  };


  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h1 className="card-title text-center">Counter</h1>
        </div>
        <div className="card-body">
          <h1 className="text-center">{count}</h1>
                    <div className="text-center">
                        <button className="btn btn-danger " onClick={decreaseCount}>
                        Subtract
                        </button>
                        <button className="btn btn-success" onClick={resetCount}>
                        Reset
                        </button>
                        <button className="btn btn-primary" onClick={increaseCount}>
                        Add
                        </button>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;