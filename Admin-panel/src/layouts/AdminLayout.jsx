import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">

      <Sidebar />

      <div className="main-content">

        <Topbar />

        <div className="page-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;