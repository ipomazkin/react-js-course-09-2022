import React from 'react'
import { HomePage } from "./pages/HomePage";
import { PostPage } from "./pages/PostPage";
import { PostsPage } from "./pages/PostsPage";

export const routerConfig = [
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/posts',
    element: <PostsPage />
  },
  {
    path: '/post/:id',
    element: <PostPage />
  },
]