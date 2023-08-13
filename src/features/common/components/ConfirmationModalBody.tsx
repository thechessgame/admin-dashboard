import { useDispatch, useSelector } from "react-redux";
import globalConstantUtil from "../../../utils/globalConstantUtil";
import { deleteUser } from "../../users/UserSlice";
import { showNotification } from "../headerSlice";

function ConfirmationModalBody({
  extraObject,
  closeModal,
}: {
  extraObject: { message: string; type: string; _id: string; index: string };
  closeModal: () => {};
}) {
  const dispatch = useDispatch();

  const { message, type, _id, index } = extraObject;

  const proceedWithYes = async () => {
    if (type === globalConstantUtil.CONFIRMATION_MODAL_CLOSE_TYPES.USER_DELETE) {
      // positive response, call api or dispatch redux function
      dispatch(deleteUser({ index }));
      dispatch(showNotification({ message: "User Deleted!", status: 1 }));
    }
    closeModal();
  };

  return (
    <>
      <p className=" text-xl mt-8 text-center">{message}</p>

      <div className="modal-action mt-12">
        <button className="btn btn-outline   " onClick={() => closeModal()}>
          Cancel
        </button>

        <button className="btn btn-primary w-36" onClick={() => proceedWithYes()}>
          Yes
        </button>
      </div>
    </>
  );
}

export default ConfirmationModalBody;
