import React from 'react';
import { useHistory } from 'react-router-dom';
const Home = () => {
  const history = useHistory();
  return (
    <div>    
      <div>Home</div>
      <button onClick={() => history.push('/contact')}>
        pindah ke contact
      </button>
      <button onClick={() => history.push('/about')}>replace about</button>
      <button onClick={() => history.goBack()}>goback</button>
      <button onClick={() => history.goForward()}>goForward</button>
      <button onClick={() => history.push("/blog/1")}>go to blog 1  </button>
    </div>
  );
};

export default Home;
