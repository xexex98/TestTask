import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { tableData } from "./atom";
import { Home } from "./Home";
import { RoutesDOM } from "./RoutesDOM";
import Sidebar from "./Sidebar";
import { Table } from "./Table";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
      <div className="absolute bottom-0  w-full bg-black ">
        <div className="h-26 text-white flex text-3xl gap-3 p-3 ">
          <Link className="hover:text-violet-700" to={"https://www.google.com/"}>
            Google
          </Link>
          <Link className="hover:text-violet-700" to={"https://mail.google.com/"}>
            Gmail
          </Link>
          <Link className="hover:text-violet-700" to={"https://mail.ru/"}>
            Mail
          </Link>
          <Link className="hover:text-violet-700" to={"https://dzen.ru/"}>
            Yandex
          </Link>
        </div>
      </div>
    </div>
  );
};

function App() {
  const setData = useSetRecoilState(tableData);

  useEffect(() => {
    setData([
      { name: "Пройти интервью с HR", status: "done", dateCreate: 1573222952025, dateClose: 1573222972009 },
      { name: "Выполнить тестовое задание", status: "progress", dateCreate: 1573222983361, dateClose: null },
      { name: "Трудоустроиться в Сбербанк", status: "open", dateCreate: null, dateClose: null },
      { name: "Пройти испытательный срок", status: "open", dateCreate: null, dateClose: null },
      { name: "Успешно завершить прооект", status: "open", dateCreate: null, dateClose: null },
      { name: "Получить повышение", status: "open", dateCreate: null, dateClose: null },
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Wrapper>
            <RoutesDOM />
          </Wrapper>
        }
      >
        <Route index element={<Home />} />
        <Route path="/table" element={<Table />} />
      </Route>
    </Routes>
  );
}

export default App;
