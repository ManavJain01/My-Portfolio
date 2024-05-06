import {Link} from 'react-router-dom'

function Page404(){
  return(
    <>
        <div className="flex flex-col space-y-6 text-center mt-32">
        <h1 className="text-5xl text-gray-600">404</h1>
        <span className="text-7xl text-gray-500">Page Not Found</span>
        <span className="text-lg text-gray-500">The Page you are looking for doesn't exist or an error occurred.
        Go back !</span>
        <Link to="/" className="text-blue-700 hover:text-blue-800">Go To React Projects Page.</Link>

        <h2>Fun Facts</h2>
        <p></p>
      </div>
    </>
  )
}

export default Page404;