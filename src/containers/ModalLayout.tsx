import { useEffect } from "react";
import globalConstantUtil from "../utils/globalConstantUtil";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/common/modalSlice";
import AddUserModalBody from "../features/users/components/AddUserModalBody";
import ConfirmationModalBody from "../features/common/components/ConfirmationModalBody";

function ModalLayout() {
  const {
    isOpen,
    bodyType,
    size,
    extraObject,
    title,
  }: { isOpen: any; bodyType: any; size: any; extraObject: any; title: any } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

  const close = (e: React.MouseEvent) => {
    dispatch(closeModal(e));
  };

  return (
    <>
      <div className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className={`modal-box  ${size === "lg" ? "max-w-5xl" : ""}`}>
          <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={close}>
            ✕
          </button>
          <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>
          {
            {
              [globalConstantUtil.MODAL_BODY_TYPES.USER_ADD_NEW]: <AddUserModalBody closeModal={() => close} />,
              [globalConstantUtil.MODAL_BODY_TYPES.CONFIRMATION]: (
                <ConfirmationModalBody extraObject={extraObject} closeModal={() => close} />
              ),
              [globalConstantUtil.MODAL_BODY_TYPES.DEFAULT]: <div></div>,
            }[bodyType]
          }
        </div>
      </div>
    </>
  );
}

export default ModalLayout;
