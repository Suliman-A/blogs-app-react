// import useState and useEffect
//import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFech";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

  // conditional rendering
  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
    </div>
  );
} 


export default Home;