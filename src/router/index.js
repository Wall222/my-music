import React from 'react'
import Discover from "@/pages/discover"
import Mine from "@/pages/mine"
import Friend from "@/pages/friend"
import { Redirect } from "react-router-dom"
import Recommend from '@/pages/discover/c-pages/recommend'

const routes = [
  {
    path:"/",
    exact: true,
    render: () => {
      <Redirect to="/discover"/>
    }
  },
  {
    path:"/discover",
    component: Discover,
    routes: [
      {
        path:"/discover",
        exact: true,
        render: () => {
          <Redirect to="/discover/recommend"/>
        }
      },
      {
        path: "/discover/recommend",
        component: Recommend,
      }
    ]
  },
  {
    path:"/mine",
    component: Mine
  },
  {
    path: "/friend",
    component: Friend
  }
]

export default routes