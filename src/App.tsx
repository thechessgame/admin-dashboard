import "./App.css";
import { RouterProvider } from "react-router-dom";

import { themeChange } from "theme-change";

import router from "./routes";

function App() {
  // useEffect(() => {
  //   themeChange(true);
  // }, []);

  // const authCtx = useContext(AuthContext);
  return <RouterProvider router={router} />;
}

export default App;
