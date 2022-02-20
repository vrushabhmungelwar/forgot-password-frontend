import { useHistory } from "react-router-dom";

export function Success() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  if (!token) {
    history.push("/login");
    alert("Need to login first")
  }
  return (
    <div>
      <h1>Successfull Login</h1>
    </div>
  );
}
