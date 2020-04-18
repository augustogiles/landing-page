import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Main from './pages/Main'
import Loading from './components/Loading';

const App = () => {
  const [load, setLoad] = useState(false);

  const cleanUpIntervalAndLoad = (id) => {
    setLoad(false)
    clearInterval(id);
  }

  async function delay() {
    return setTimeout(() => setLoad(true), 400);
  }

  useEffect(() => {
    let id = delay();
    return cleanUpIntervalAndLoad(id);
  }, []);

  return !load ?  
      (<Loading show={!load} />)
      : <Main/>
}

ReactDOM.render(<App />, document.getElementById('root'))