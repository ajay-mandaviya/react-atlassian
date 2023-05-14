import React from "react";
import { Header, Sidebar, Table, UserModal } from "../../components";
import "./home.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Avatar from "@atlaskit/avatar";
import Button from "@atlaskit/button";
import { setModal, setModalUser } from "../../store";
import { createKey } from "../../helper";
const Home = () => {
  const dispatch = useAppDispatch();
  const { users, loading, selectedUser, modalVisible } = useAppSelector(
    (state) => state.users
  );

  const {
    ageSort,
    gender,
    searchByUnivercity,
    selectedGloodGroup,
    searchUser,
  } = useAppSelector((state) => state.filters);

  console.log("searchUser", searchUser);

  const filterUsers = () => {
    let userWithFilter = users;
    // if (ageSort) {
    // const sortedData = [...userWithFilter];
    // sortedData.sort((a, b) => {
    //   if (ageSort === "asc") {
    //     return a.age - b.age;
    //   } else {
    //     return b.age - a.age;
    //   }
    // });
    // return (userWithFilter = sortedData);
    // }
    if (selectedGloodGroup.length) {
      userWithFilter = userWithFilter.filter((user) =>
        selectedGloodGroup.includes(user.bloodGroup)
      );
    }
    if (gender) {
      userWithFilter = userWithFilter.filter((user) => user.gender === gender);
    }
    if (searchByUnivercity) {
      userWithFilter = userWithFilter.filter((user) =>
        user.university
          .toLocaleLowerCase()
          .includes(searchByUnivercity.toLocaleLowerCase())
      );
    }
    if (searchUser) {
      userWithFilter = userWithFilter.filter((user) => {
        const userFullname = `${user?.firstName || ""} ${
          user?.lastName || ""
        }`.toLocaleLowerCase();
        console.log("userFullname", userFullname);

        const userName = user?.username.toLocaleLowerCase() || "";
        return (
          userFullname.includes(searchUser.toLocaleLowerCase()) ||
          userName.includes(searchUser.toLocaleLowerCase())
        );
      });
    }
    return userWithFilter;
  };

  const usersRow = filterUsers().map((user) => ({
    key: `${user.id}`,
    cells: [
      {
        key: createKey(user.image),
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
        key: createKey(user.firstName),
        content: user.firstName,
      },
      {
        key: createKey(user.lastName),
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
        content: `${user.bloodGroup} `,
      },
      {
        key: user.phone,
        content: user.age,
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
      <div className="home-container">
        <div>
          <Sidebar />
        </div>
        <div>
          <Table
            rows={usersRow}
            emptyView={loading ? <h1></h1> : <h1>No users Found</h1>}
            isRankable
            isLoading={loading}
          />
        </div>
      </div>
      <UserModal visible={modalVisible} />
    </>
  );
};

export default Home;
