import React from 'react'
import Header from '../common/Header'
import { blogs } from '../Data/blogs'
import { Link } from 'react-router-dom'
export default function Blog() {
    let allblogs = blogs.map((v, i) => {
        return (
            <div className="blogItems" key={i}>
                <h2>{v.title}</h2>
                <p>
                    {v.body}
                </p>
                <h3>{v.tags} </h3>
                <h3>{v.reactions} reactions</h3>
                <button><Link to={`/blog/${v.id}`}>Read More...</Link></button>
            </div>
        )
    })
    return (
        <div>
            <Header></Header>
            <h1>Blog Page</h1>
            <div className="container">
                {allblogs}
            </div>

        </div>
    )
}
