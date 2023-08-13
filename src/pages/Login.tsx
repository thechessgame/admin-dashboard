import { redirect } from "react-router-dom";
import Login from "../features/auth/Login";

function LoginPage() {
  return <Login />;
}

export default LoginPage;

export async function action({ request }: { request: Request }) {
  const data = await request.formData();

  let email = data.get("email");
  let password = data.get("password");

  // make api request to authenticate

  return redirect("/app");
}
