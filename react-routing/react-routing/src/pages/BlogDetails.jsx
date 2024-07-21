import React from 'react'
import Header from '../common/Header'
import { useLocation } from 'react-router-dom'
import { blogs } from '../Data/blogs';

export default function BlogDetails() {
    let uselocation = useLocation();
    let currentId = uselocation.pathname.split('/')[2];
    let currentData = blogs.filter((v)=> v.id == currentId)[0]
   
  return (
    <div>
        <Header></Header>

        <h1>{currentData.userId}</h1>
        <h1>{currentData.title}</h1>
        <h4>{currentData.body}</h4>
        <h3>{currentData.tags}</h3>
        <h3>{currentData.reactions}</h3>
    </div>
  )
}
