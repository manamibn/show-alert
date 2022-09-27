import { useState } from "react";
import Alert from "./Alert";
import Tasks from "./Tasks";
function Dashboard() {
  const [allChecked, setAllChecked] = useState(false);
  console.log("allchecked--", allChecked);
  return (
    <div>
      <Alert allChecked={allChecked} />
      <Tasks setAllChecked={setAllChecked} />
    </div>
  );
}

export default Dashboard;
