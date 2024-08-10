
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Movie from './pages/moviedetail/moviedetail';
import MovieList from './components/movielist/movieList';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Header/>
      <Routes>
          <Route index element={<Home/>} />
          <Route path="/movie/:id" element={<Movie/>} />
          <Route path="/movies/:type" element={<MovieList/>} />
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
