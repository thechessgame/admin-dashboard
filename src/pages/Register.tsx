import Register from "../features/user/Register";
import { redirect } from "react-router-dom";

function RegisterPage() {
  return <Register />;
}

export default RegisterPage;

export async function action({ request }: { request: Request }) {
  const data = await request.formData();

  let email = data.get("email");
  let password = data.get("password");

  // make api request to authenticate

  return redirect("/login");
}
