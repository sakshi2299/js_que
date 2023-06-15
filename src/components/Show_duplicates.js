import React from "react";
import { Employee } from "./Array_of_object";
const DuplicateData = () => {
  const duplicateIds = Employee.map((item) => item.id).filter(
    (id, i, allId) => allId.indexOf(id) !== i
  );
  const DuplicateData = Employee.filter((item) =>
    duplicateIds.includes(item.id)
  );
  return (
    <>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>date</th>
        </tr>
        {DuplicateData.map((item) => {
          return (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.date}</th>
            </tr>
          );
        })}
      </table>
    </>
  );
};
export default DuplicateData;
