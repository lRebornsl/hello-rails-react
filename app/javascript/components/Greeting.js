import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/app/appSlice';

const Greeting = () => {
  const greeting = useSelector(state => state.appSlice.greetings);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  if (greeting && greeting.greeting) {
    return (
      <div>
        <h1>{greeting.greeting}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>No greeting available</h1>
      </div>
    );
  }
}

export default Greeting;
