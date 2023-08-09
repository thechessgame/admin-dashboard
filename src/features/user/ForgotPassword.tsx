import { useState, useRef, useEffect } from "react";
import { Link, useActionData, useNavigation, Form } from "react-router-dom";
import LandingIntro from "./LandingIntro";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";
import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";

function ForgotPassword() {
  const INITIAL_USER_OBJ = {
    emailId: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [linkSent, setLinkSent] = useState(false);
  const [userObj, setUserObj] = useState(INITIAL_USER_OBJ);

  let navigation = useNavigation();
  let isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (isSubmitting) setLoading(true);
    else setLoading(false);

    if (isSubmitting) setLinkSent(true);
    else setLinkSent(false);
  }, [isSubmitting]);

  let data = useActionData();
  console.log("data", data);

  const updateFormValue = ({ updateType, value }: { updateType: string; value: string }) => {
    setErrorMessage("");
    setUserObj({ ...userObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">Forgot Password</h2>

            {linkSent && (
              <>
                <div className="text-center mt-8">
                  <CheckCircleIcon className="inline-block w-32 text-success" />
                </div>
                <p className="my-4 text-xl font-bold text-center">Link Sent</p>
                <p className="mt-4 mb-8 font-semibold text-center">Check your email to reset password</p>
                <div className="text-center mt-4">
                  <Link to="/login">
                    <button className="btn btn-block btn-primary ">Login</button>
                  </Link>
                </div>
              </>
            )}

            {!linkSent && (
              <>
                <p className="my-8 font-semibold text-center">We will send password reset link on your email Id</p>
                <Form method="post">
                  <div className="mb-4">
                    <InputText
                      type="emailId"
                      defaultValue={userObj.emailId}
                      updateType="emailId"
                      containerStyle="mt-4"
                      labelTitle="Email Id"
                      updateFormValue={updateFormValue}
                      labelStyle=""
                      placeholder=""
                      name="email"
                    />
                  </div>

                  <ErrorText styleClass="mt-12">{errorMessage}</ErrorText>
                  <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>
                    Send Reset Link
                  </button>

                  <div className="text-center mt-4">
                    Don't have an account yet?{" "}
                    <Link to="/register">
                      <button className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                        Register
                      </button>
                    </Link>
                  </div>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
