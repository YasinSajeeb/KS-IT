import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';
import Statistics from './Components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Header></Header>},
    { path: 'statistics', element: <Statistics></Statistics>},
    { path: 'blog', element: <Blog></Blog>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
