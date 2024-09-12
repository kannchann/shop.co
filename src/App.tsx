import Navbar from "./components/Navbar";
import Login from "./pages/auth/login";

const App = () => {
  return (
    <div className="text-5xl">
      <Navbar />
      <Login />
    </div>
  );
};

export default App;
