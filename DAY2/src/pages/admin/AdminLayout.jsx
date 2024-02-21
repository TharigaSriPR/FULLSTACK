import PropTypes from "react"

const AdminLayout = ({children}) => {
  return (
    <div className="admin_container">
          <aside>
            sidebar
          </aside>
          <main>
            {children}
          </main>
    </div>
  )
}
AdminLayout.propTypes = {
    children : PropTypes.node.isRequired
}
export default AdminLayout