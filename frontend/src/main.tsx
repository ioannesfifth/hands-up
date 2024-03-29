import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/globals.css'
import Main from './page/Main'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
)
