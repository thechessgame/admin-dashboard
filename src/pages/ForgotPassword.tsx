import ForgotPassword from "../features/auth/ForgotPassword";
import { redirect } from "react-router-dom";

function ForgotPasswordPage() {
  return <ForgotPassword />;
}

export default ForgotPasswordPage;

export async function action({ request }: { request: Request }) {
  const data = await request.formData();

  let email = data.get("email");

  // make api request to send email

  return redirect("/login");
}
