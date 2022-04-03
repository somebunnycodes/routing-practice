import {Route, Routes, useParams} from 'react-router';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

const Home = (params) => {
  return (<h1>WELCOME!</h1>);
}

const SimplePathArgument = (params) => {
  const {arg} = useParams();
  if (isNaN(arg)) {
    return (<h1>{arg}</h1>);
  } else {
    return (<h1>Number: {arg}</h1>);
  }
}

const FancyWord = (params) => {
  const {word, fontcolour, backcolour} = useParams();
  return (<h1 style={{color: fontcolour, background: backcolour}}>{word}</h1>);
}


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:arg" element={<SimplePathArgument />} />
        <Route path="/:word/:fontcolour/:backcolour" element={<FancyWord/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

