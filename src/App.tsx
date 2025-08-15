import { Outlet } from "react-router";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1>This is app Component</h1>
      <Button>Click Me</Button>

      <Outlet></Outlet>
    </>
  );
}

export default App;
