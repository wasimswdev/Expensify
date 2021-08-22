import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
    Page not found, 404! <Link to="/">Go home</Link> {/* link takes "to" props which defines the path. as defined in routes */}
    </div>
  )

export default NotFoundPage