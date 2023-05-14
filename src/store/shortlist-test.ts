import shortListReducer from "./shortlist.users";
import { addShortListUser } from "./shortlist.users";

describe("shortlistSlice", () => {
  const initialState = {
    shortListUsers: [],
  };
  it("should add a user ", () => {
    const newUser: User = {
      age: 20,
      birthDate: "10-11-12",
      bloodGroup: "A+",
      domain: "test",
      email: "new@gmail.com",
      firstName: "ajay",
      lastName: "mandaviya",
      height: 120,
      maidenName: "ajay-mandaviya",
      gender: "male",
      university: "GTU",
      company: {
        address: {
          address: "SURAT",
          city: "SURAT",
          postalCode: "edda",
          state: "Gujrat",
        },
        department: "react",
        name: "Teco",
        title: "React",
      },
      phone: "123",
      address: {
        address: "SURAT",
        city: "SURAT",
        postalCode: "edda",
        state: "Gujrat",
      },
      id: 12222,
      image: "https://",
      username: "@ajay",
      weight: 120,
    };
    const action = addShortListUser(newUser);
    const newState = shortListReducer(initialState, action);
    expect(newState.shortListUsers).toEqual([
      newState,
      ...initialState.shortListUsers,
    ]);
  });
});
