import React from "react";
import { useRecoilState } from "recoil";
import { tableData } from "./atom";

export const Cell = ({ name, status, dateCreate, dateClose, index }) => {
  const [data, setData] = useRecoilState(tableData);

  const handeleDeleteRow = (index) => {
    const arr = data.filter((_, i) => index !== i);
    setData(arr);
  };

  const getDate = (date) => {
    if (date) {
      let dateObj = new Date(date);
      let dateNorm = dateObj.getUTCDate() < 10 ? "0" + dateObj.getUTCDate() : dateObj.getUTCDate();
      let monthsNorm = dateObj.getUTCMonth() + 1 < 10 ? "0" + (dateObj.getUTCMonth() + 1) : dateObj.getUTCMonth() + 1;
      return dateNorm + "." + monthsNorm + "." + dateObj.getUTCFullYear();
    } else {
      return "------";
    }
  };

  return (
    <>
      <td className="border border-slate-700 w-[250px]">{name}</td>
      <td className="border border-slate-700 w-[100px]">{status}</td>
      <td className="border border-slate-700 text-center w-[100px]">{getDate(dateCreate)}</td>
      <td className="border border-slate-700 text-center w-[100px]">{getDate(dateClose)}</td>
      <td className="border border-slate-700 text-center w-[30px]">
        <button type="button" className="hover:bg-cyan-500 w-6 text-red-600" onClick={() => handeleDeleteRow(index)}>
          X
        </button>
      </td>
    </>
  );
};
