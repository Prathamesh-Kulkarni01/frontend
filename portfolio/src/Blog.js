import React from 'react'
import BlogItem from './components/BlogItem'
import ExtraInfo from './components/ExtraInfo'
import TopImg from './components/TopImg'

const Blog = () => {

  return (
    <div>
         <div className="page_body">
           <TopImg img="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"></TopImg>
                <h1 className="name">Blogs !</h1>
               <ExtraInfo></ExtraInfo>
                <div className="page_body" >
                <BlogItem></BlogItem>
                <BlogItem></BlogItem>
                <BlogItem></BlogItem>
                <BlogItem></BlogItem>
         
          </div>
    
        </div>
      </div>


  )
}

export default Blog