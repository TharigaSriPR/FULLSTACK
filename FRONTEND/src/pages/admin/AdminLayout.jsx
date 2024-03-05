import PropTypes from "prop-types"
import AdminNavbar from "./AdminNavbar"

const AdminLayout = ({children}) => {
  return (
    <div className="admin_container">
          <aside>
            <AdminNavbar/>
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