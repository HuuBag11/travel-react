import React from "react"
import { Link } from "react-router-dom"

import "./CateDestinations.scss"

const cateDest = [
    {
        "name": "Beach",
        "image": "https://images.unsplash.com/photo-1441839438427-ad31d742a202?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "name": "Nature",
        "image": "https://images.unsplash.com/photo-1633984904221-29bb70dffef8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "name": "Recommend",
        "image": "https://images.unsplash.com/photo-1598249892865-56a0f2c00677?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "name": "Mountain",
        "image": "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

export const CateDestination = () => {
    return(
        <div className="category-dest container">
            <h3>Category of help</h3>

            <ul>
                {
                    cateDest.map((item, index) => {
                        return(
                            <li key={index}>
                                <div className="cate-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <Link to={`/destination/${item.name.toLowerCase()}`}>{item.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}