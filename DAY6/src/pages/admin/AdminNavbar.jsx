import { useEffect } from "react";
import "../../assets/css/AdminNavbar.css";

import {
  FaTable,
  FaEdit,
  FaChartLine,
  FaRegClock,
  FaHome,
  FaSignOutAlt,
} from "react-icons/fa";

function AdminNavBar() {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu>
      <img
        src="data:image/jpeg;base64,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"
        alt=""
      />

<ul id="mainMenu">
      <Icon icon={<FaHome />} href="/MYAPP/admin/dashboard" />
      <Icon icon={<FaTable />} href="/MYAPP/admin/OrdersPlaced" />
      <Icon icon={<FaEdit />} href="/MYAPP/admin/Crud" />
      <Icon icon={<FaRegClock />} href="/MYAPP/admin/OrdersStatus" />
    </ul>

    <ul className="lastMenu">
      <Icon icon={<FaSignOutAlt />} href="/MYAPP/login" />
    </ul>
    </menu>
  );
}

const Icon = ({ icon, href }) => (
  <li>
    <a href={href}>{icon}</a>
  </li>
);

export default AdminNavBar;
