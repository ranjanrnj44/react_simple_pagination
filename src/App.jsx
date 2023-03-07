import React, { useEffect, useState } from 'react'
import './App.css';
//axios
import axios from 'axios';
//components
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  //pagination
  //currentPage, setCurrentPage => we define the initial page and keep increasing it as we go > or <
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10); // post visible per page is 10 only

  //effect for api call
  useEffect(() => { // please don't use async/await in useEffect, instead write a function and use inside it
    let fetchPosts = async () => {
      setLoading(true);
      let res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  //getting currentPosts, indexOfLastPosts, indexOfFirstPosts
  let indexOfLastPosts = currentPage * postPerPage; // (while current page is 1 == 1*10, if 2 then, 2*10)
  let indexOfFirstPosts = indexOfLastPosts - postPerPage; // (in case of 1, 10-10 = 0, if 2 then, 20-10 = 10)
  let currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts); // here we will get the exact data we need

  //change paginate - getting data from child to parent
  //how to get data from child to parent? (by passing function as an args)
  let paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary'>Pagination! with 100 datas</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  )
}

export default App
