import React from "react";
import "./sidebar.css";
import PageHeader from "@atlaskit/page-header";
import Textfield from "@atlaskit/textfield";
import Range from "@atlaskit/range";
import { Radio } from "@atlaskit/radio";
import DropdownMenu, { DropdownItemGroup } from "@atlaskit/dropdown-menu";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { Checkbox } from "@atlaskit/checkbox";
import Button from "@atlaskit/button";

import {
  addBloodGroup,
  setAge,
  setGender,
  resetFilters,
  setUniversity,
  searchUser,
} from "../../store";
const FilterSidebar = () => {
  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const { ageSort, gender, searchByUnivercity, selectedGloodGroup } =
    useAppSelector((state) => state.filters);
  const prev: string[] = [];
  const listbloodGroup = users.reduce((prev, current) => {
    return prev.includes(current.bloodGroup)
      ? [...prev]
      : [...prev, current.bloodGroup].sort();
  }, prev);

  const [text, setText] = React.useState("");
  const [userText, setUserText] = React.useState("");
  const timerId = React.useRef<NodeJS.Timeout | undefined>(undefined);
  const userTimeId = React.useRef<NodeJS.Timeout | undefined>(undefined);
  React.useEffect(() => {
    if (timerId?.current) {
      clearTimeout(timerId?.current);
    }
    timerId.current = setTimeout(() => {
      dispatch(setUniversity(text));
    }, 500);
  }, [text]);

  React.useEffect(() => {
    if (userTimeId?.current) {
      clearTimeout(userTimeId?.current);
    }
    timerId.current = setTimeout(() => {
      dispatch(searchUser(userText));
    }, 500);
  }, [userText]);

  const handleReset = () => {
    dispatch(resetFilters());
    setText("");
    setUserText("");
  };

  return (
    <div className="filter-container">
      <PageHeader>Filter Users</PageHeader>
      <div>
        <div>
          <h5>Serch User</h5>
        </div>
        <div>
          <Textfield
            placeholder="Search User"
            value={userText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserText(e.target.value)
            }
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: "10px" }}>
          <h5>Serch by University</h5>
        </div>
        <Textfield
          placeholder="Enter University"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
      </div>
      <h5>Gender</h5>
      <div
        style={{
          display: "flex",
        }}
      >
        <Radio
          value="Male"
          label="Male"
          name="male"
          isChecked={gender === "male"}
          onChange={() => {
            dispatch(setGender("male"));
          }}
        />
        <Radio
          value="Female"
          label="Female"
          name="femal"
          testId="radio-disabled"
          isChecked={gender === "female"}
          onChange={() => dispatch(setGender("female"))}
        />
      </div>
      <div className="info-container" style={{ padding: 0 }}>
        <h5>User age</h5>
        <div>
          <Radio
            value="Male"
            label="Age-Low to High"
            name="radio-default"
            isChecked={ageSort === "asc"}
            onChange={() => dispatch(setAge("asc"))}
          />
          <Radio
            value="Female"
            label="Age-High to Low"
            name="Age-High to Low"
            isChecked={ageSort === "desc"}
            onChange={() => dispatch(setAge("desc"))}
          />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <DropdownMenu trigger={"Blood Group"}>
          {listbloodGroup.map((blood, _index) => (
            <DropdownItemGroup key={`${blood}-${_index}`}>
              <Checkbox
                value={blood}
                label={blood}
                isChecked={selectedGloodGroup.includes(blood)}
                name={blood}
                onChange={(e) => {
                  dispatch(addBloodGroup(blood));
                }}
              />
            </DropdownItemGroup>
          ))}
        </DropdownMenu>
      </div>
      <div>
        <Button
          appearance="primary"
          style={{ width: "100%" }}
          onClick={handleReset}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
