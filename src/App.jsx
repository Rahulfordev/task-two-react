import "./App.css";
import UserProfile from "./components/users/UserProfile";
import userData from "./data.json";

function App() {
  return (
    <>
      <div>
        <UserProfile userInfo={userData} />
      </div>
    </>
  );
}

export default App;
