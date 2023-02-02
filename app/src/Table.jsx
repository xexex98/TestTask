import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { tableData } from "./atom";
import { Cell } from "./Cell";

export const Table = () => {
  const data = useRecoilValue(tableData);

  return (
    <>
      {(data && data.length > 0 && (
        <table className="table-fixed border  m-auto mt-24 min-w-[750px] max-w-[750px]">
          <thead>
            <tr>
              <th className="border border-slate-600 ...">Name</th>
              <th className="border border-slate-600 ...">Status</th>
              <th className="border border-slate-600 ...">Open</th>
              <th className="border border-slate-600 ...">Close</th>
              <th className="border border-slate-600 ..."></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>{<Cell index={index} {...item} />}</tr>
            ))}
          </tbody>
        </table>
      )) || (
        <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
          <p className="text-6xl font-extrabold text-center pt-36 text-red-900">
            Можно кликнуть, <br /> но лучше не надо
          </p>
        </Link>
      )}
    </>
  );
};
