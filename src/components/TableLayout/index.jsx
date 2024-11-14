import React from "react";
import { Button } from "react-bootstrap";

// css
import styles from "./Table.module.scss";

// image

const TableLayout = ({ column, data }) => {
  return (
    <>
      <div className="table-responsive">
        <table className={`${styles.table} table`}>
          <thead>
            <tr className="">
              {column &&
                column.length > 0 &&
                column.map((item, key) => (
                  <>
                    <th className="text-dark fw-bold border-0">{item.head}</th>
                  </>
                ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.length > 0 &&
              data.map((data, columnkey) => {
                return (
                  <tr>
                    {column &&
                      column.length > 0 &&
                      column.map((item, key) => {
                        if (item.component) {
                          return (
                            <td className="border-bottom fw-sbold">
                              {item.component(data, columnkey, data)}
                            </td>
                          );
                        }

                        return (
                          <td className="border-bottom fw-sbold">
                            {data[item?.accessor]}
                          </td>
                        );
                      })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableLayout;
