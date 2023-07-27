import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import CounterComponent from './components/CounterComponent';

const App = () => {
  const [photoId, setPhotoId] = useState(1);


 return( 
  <>
  <button onClick={() => setPhotoId(photoId+1) }>Change User</button>
  <CounterComponent photoId={photoId} />
  </>
  )

}


export default App;
