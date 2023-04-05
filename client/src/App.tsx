import { Route, Routes } from 'react-router-dom';
import PostPage from './pages/Post/PostPage';
import PostsPage from './pages/Posts/PostsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostsPage />} />
      <Route path="/posts/:id" element={<PostPage />} />
    </Routes>
  );
}

export default App;
