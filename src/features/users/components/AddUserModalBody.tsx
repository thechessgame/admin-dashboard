import { useState } from "react";
import { useDispatch } from "react-redux";
import InputText from "../../../components/Input/InputText";
import ErrorText from "../../../components/Typography/ErrorText";
import { showNotification } from "../../common/headerSlice";
import { addNewUser } from "../UserSlice";

const INITIAL_USER_OBJ = {
  first_name: "",
  last_name: "",
  email: "",
};

function AddUserModalBody({ closeModal }: { closeModal: () => void }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userObj, setUserObj] = useState(INITIAL_USER_OBJ);

  const saveNewUser = () => {
    if (userObj.first_name.trim() === "") return setErrorMessage("First Name is required!");
    else if (userObj.email.trim() === "") return setErrorMessage("Email id is required!");
    else {
      let newUserObj = {
        id: 7,
        email: userObj.email,
        first_name: userObj.first_name,
        last_name: userObj.last_name,
        avatar: "https://reqres.in/img/faces/1-image.jpg",
      };
      dispatch(addNewUser({ newUserObj }));
      dispatch(showNotification({ message: "New User Added!", status: 1 }));
      closeModal();
    }
  };

  const updateFormValue = ({ updateType, value }: { updateType: string; value: string }) => {
    setErrorMessage("");
    setUserObj({ ...userObj, [updateType]: value });
  };

  return (
    <>
      <InputText
        type="text"
        defaultValue={userObj.first_name}
        updateType="first_name"
        containerStyle="mt-4"
        labelTitle="First Name"
        updateFormValue={updateFormValue}
        labelStyle=""
        placeholder=""
        name="first_name"
      />

      <InputText
        type="text"
        defaultValue={userObj.last_name}
        updateType="last_name"
        containerStyle="mt-4"
        labelTitle="Last Name"
        updateFormValue={updateFormValue}
        labelStyle=""
        placeholder=""
        name="last_name"
      />

      <InputText
        type="email"
        defaultValue={userObj.email}
        updateType="email"
        containerStyle="mt-4"
        labelTitle="Email Id"
        updateFormValue={updateFormValue}
        labelStyle=""
        placeholder=""
        name="email"
      />

      <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
      <div className="modal-action">
        <button className="btn btn-ghost" onClick={() => closeModal()}>
          Cancel
        </button>
        <button className="btn btn-primary px-6" onClick={() => saveNewUser()}>
          Save
        </button>
      </div>
    </>
  );
}

export default AddUserModalBody;
