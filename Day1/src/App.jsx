import {Routes,Route,Navigate} from "react-router-dom"
import {lazy} from "react"
import LazyLayout from "./components/ui/LazyLayout"
import UserLayout from "./pages/user/UserLayout"
const LazyLogin = lazy(() => import ("./pages/auth/Login"))
const LazyRegister = lazy(() => import ("./pages/auth/Register"))
const LazyHome = lazy(() => import ("./pages/user/Home"))
const LazyAbout = lazy(() => import ("./pages/user/About"))
const LazyDashboard = lazy(() => import ("./pages/admin/Dashboard"))
const LazyUserInfo = lazy(() => import ("./pages/admin/UserInfo"))
const UserRoutes =() => {
  return (
    <UserLayout>
     <Routes>
     <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
     <Route path="/about" element={<LazyLayout component={LazyAbout}/>}/>
     </Routes>
     </UserLayout>
  )
}

const AdminRoutes =() => {
  return(
    <Routes>
      <Route path="/dashboard" element={<LazyLayout component={LazyDashboard}/>}/>
      <Route path="/dashboard" element={<LazyLayout component={LazyUserInfo}/>}/>
    </Routes>
  )
}
function App() {


  return (
 <Routes>
    <Route path="/" element={<Navigate to="/MYAPP/login"/>} />
    <Route path="/MYAPP/login" element={<LazyLayout component={LazyLogin} />} />
    <Route path="/MYAPP/register" element={<LazyLayout component={LazyRegister} />} />
    <Route path="/MYAPP/user/*" element={<UserRoutes />}/>
   <Route path="/MYAPP/admin/*" element={<AdminRoutes />}/>
 </Routes>
  )
}

export default App
