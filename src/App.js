import React, { useState, useEffect } from 'react'
import Post from './components/Post/Post'
import './App.css'
import Spinner from './components/Spinner/Spinner'

const App = () => {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const POST_COUNT = 12

  const getPosts = async () => {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=${POST_COUNT}`)
    const data = await res.json()
    setPosts(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="app">
      <header className="appHeader">
        <nav>
          <h1>Spacestagram</h1>
          <img className="profileAvatar" src="images/defaultAvatar.png" alt="Default Avatar" />
        </nav>
      </header>

      <main>
        {isLoading ? 
          <section className="spinnerWrapper">
            <Spinner />
          </section>
          :
          <section className="postsWrapper">
            {posts.map((post, idx) => (
              <Post 
                key={idx} 
                title={post.title} 
                date={post.date}
                description={post.explanation}
                url={post.url}
                type={post.media_type}
              />
            ))}
          </section>  
        }
      </main>
    </div>
  );
}

export default App;
