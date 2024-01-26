import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";

type Props = {
  data: IEmployee;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [post, setPost] = useState(data.post); // Fix: Use the correct variable name

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };

  const onLastNameChangeHnd = (e: any) => {
    setLastName(e.target.value);
  };

  const onPostChangeHnd = (e: any) => {
    setPost(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      post: post,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Edit Blog Form</h3> {/* Fix: Change the heading */}
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>First Name : </label>
          <input
            type="text"
            value={firstName}
            onChange={onFirstNameChangeHnd}
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input type="text" value={lastName} onChange={onLastNameChangeHnd} />
        </div>
        <div>
          <label>Post Add. : </label>
          <input type="text" value={post} onChange={onPostChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Update Post" />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
