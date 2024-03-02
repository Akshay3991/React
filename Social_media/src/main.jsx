import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreatePost, { createPostAction } from './components/CreatePost.jsx';
import PostList, { postLoader } from './components/PostList.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <App></App>,
    children: [
    { path: "/", element: <PostList></PostList>, loader: postLoader },
    { path: "/create-post", element: <CreatePost></CreatePost>,action: createPostAction,},
  ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
