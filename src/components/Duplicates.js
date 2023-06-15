import React from "react";
import { Employee } from "./Array_of_object";
export const DuplicateList = () => {
  const uniqueIds = [...new Set(Employee.map((item) => item.id))];
  const uniqueData = uniqueIds.map((id) =>
    Employee.find((item) => item.id === id)
  );
  return (
    <>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>date</th>
        </tr>
        <th>
          {uniqueData.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th>{item.date}</th>
            </tr>
          ))}
        </th>
      </table>
    </>
  );
};
