import React from "react";
import { Header, Table, UserModal } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Avatar from "@atlaskit/avatar";

import { createKey } from "../../helper";
import { setModal, setModalUser } from "../../store";
import Button from "@atlaskit/button";
const ShortList = () => {
  const { shortListUsers } = useAppSelector((state) => state.shortList);
  const dispatch = useAppDispatch();
  const { modalVisible } = useAppSelector((state) => state.users);
  const shortListRow = shortListUsers.map((user: any) => ({
    key: `${user.id}`,
    cells: [
      {
        key: "Profile",
        content: (
          <Avatar
            appearance="circle"
            src={user.image}
            size="large"
            name={user.firstName || ""}
          />
        ),
      },
      {
        key: createKey(user?.firstName),
        content: user.firstName,
      },
      {
        key: createKey(user?.lastName),
        content: user.lastName,
      },

      {
        key: user.email,
        content: user.email,
      },
      {
        key: user.company?.name,
        content: user.company?.name,
      },
      {
        key: user.bloodGroup,
        content: user.bloodGroup,
      },
      {
        key: user.phone,
        content: user.phone,
      },
      {
        key: "More",
        content: (
          <Button
            onClick={() => {
              dispatch(setModalUser(user));
              dispatch(setModal(true));
            }}
          >
            More
          </Button>
        ),
      },
    ],
  }));

  return (
    <>
      <Header />
      <div style={{ width: "90vw", margin: "auto", marginTop: "2rem" }}>
        <Table rows={shortListRow} />
      </div>
      <UserModal visible={modalVisible}  withFooter = {false} />
    </>
  );
};

export default ShortList;
