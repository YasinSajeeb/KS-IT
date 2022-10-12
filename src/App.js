import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Cards from './Components/Cards/Cards';
import Statistics from './Components/Statistics/Statistics';
import Main from './Layouts/Main';

function App() {
  const router = createBrowserRouter([
    { path: '/', 
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: ()=> fetch('cards.json'),
        element: <Cards></Cards>
      },
    { path: '/statistics', 
    element: <Statistics></Statistics>
  },
    { path: '/blog', 
    element: <Blog></Blog>
  }   
    ]
  },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      {/* <div className='banner bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-10'>
            <div className='banner-img'>
             
            </div>
        </div> */}
    </div>
  );
}

export default App;
