import { Link } from "react-router-dom"

function LinkComponent({ to, content, styles, ...rest }){
  const data = rest.children
  return (
    <Link to={to} className={`cursor-none flex gap-3 ${styles}`}>
      {content}

      {Array.isArray(data) && data.map(e => e.props && <div key={e.props.className} className={e.props.className}>{e.props.children}</div>)}
    </Link>
  )
}

export default LinkComponent