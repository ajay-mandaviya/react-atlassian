import React from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { addShortListUser, setModal, setModalUser } from "../store";
import Button from "@atlaskit/button/standard-button";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";
import { token } from "@atlaskit/tokens";
import CrossIcon from "@atlaskit/icon/glyph/cross";
import { N500 } from "@atlaskit/theme/colors";
import { css, jsx } from "@emotion/react";
import Image from "@atlaskit/image";
import { useLocation } from "react-router-dom";

interface ModalProps {
  /**
   * if true modal is visible
   */
  visible: boolean;
  /**
   *  footer contain button
   */
  withFooter?: boolean;
}

const UserModal: React.FC<ModalProps> = ({ visible, withFooter }) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { modalVisible, selectedUser } = useAppSelector((state) => state.users);
  const { shortListUsers } = useAppSelector((state) => state.shortList);
  const closeModal = () => {
    dispatch(setModal(false));
  };

  console.log("pathname", pathname);

  const isUserShortList = shortListUsers.some(
    (user) => user?.id === selectedUser?.id
  );

  const handleClick = () => {
    if (isUserShortList) {
      alert("User already shortListed");
      dispatch(setModalUser(null));
      closeModal();
      return;
    }
    const newUser = {
      ...selectedUser,
    };
    dispatch(addShortListUser(newUser));
    dispatch(setModalUser(null));
    closeModal();
  };
  return (
    <div>
      <ModalTransition>
        {visible ? (
          <Modal onClose={closeModal}>
            <ModalHeader>
              <ModalTitle>User Info</ModalTitle>
              <Button appearance="link" onClick={closeModal}>
                <CrossIcon
                  label="Close Modal"
                  primaryColor={token("color.text.subtle", N500)}
                />
              </Button>
            </ModalHeader>
            <ModalBody>
              <div className="flex-center">
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <Image
                    src={selectedUser?.image}
                    className="image-round"
                    alt="Theming in action"
                    testId="image"
                  />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <div className="info-container">
                  <h5>
                    Name : {selectedUser?.firstName || ""}
                    {selectedUser?.lastName || ""}
                  </h5>

                  <h5>UserName : {selectedUser?.username || ""}</h5>
                  <h5>Email : {selectedUser?.email || ""}</h5>
                  <h5>Phone : {selectedUser?.phone || ""}</h5>
                  <h5>Domain : {selectedUser?.domain}</h5>
                </div>
                <div className="info-container">
                  <h5>BirthDate : {selectedUser?.birthDate || ""}</h5>
                  <h5>Age : {selectedUser?.age}</h5>
                  <h5>Gender : {selectedUser?.gender || ""}</h5>
                  <h5>BloodGroup : {selectedUser?.bloodGroup || ""}</h5>
                  <h5>University : {selectedUser?.university || ""}</h5>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <div className="info-container">
                  <h5>Working at : {selectedUser?.company?.name}</h5>
                  <h5>Jbo Title : {selectedUser?.company?.title}</h5>
                  <h5>
                    Address : {selectedUser?.address?.address}{" "}
                    {selectedUser?.address?.city}{" "}
                    {selectedUser?.address?.postalCode}
                  </h5>

                  <h5>State : {selectedUser?.address?.postalCode}</h5>
                </div>
              </div>
            </ModalBody>
            {withFooter && (
              <ModalFooter>
                <Button
                  appearance="primary"
                  isDisabled={isUserShortList}
                  onClick={handleClick}
                >
                  {isUserShortList ? "ShortListed" : "Add to ShortList"}
                </Button>
              </ModalFooter>
            )}
          </Modal>
        ) : null}
      </ModalTransition>
    </div>
  );
};

UserModal.defaultProps = {
  withFooter: true,
};

export default UserModal;
