import React from "react";
import CollapsibleTable from "../components/admin.js";

function AdminPanel({ userData, setUserData }) {
  return (
    <div>
      <CollapsibleTable userData={userData} setUserData={setUserData} />
    </div>
  );
}

export default AdminPanel;
