import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div className="App">
      <main>
        <h1>Posts</h1>
        <br />
        {posts.length > 0
          ? posts.map((post) => {
              return (
                <div key={post.id}>
                  <h3>{post.title}</h3>
                </div>
              );
            })
          : 'Loading...'}
      </main>
    </div>
  );
}

export default App;
