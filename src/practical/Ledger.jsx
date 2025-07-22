import Case from "./Case";
import dummyCase from "/data/dummyCase.json";
import { useState } from "react";

const Ledger = () => {
  const [data, setData] = useState(dummyCase);

  const deleteCase = (id, newData) => {
    const cleanData = data?.filter((item) => item.id !== id);

    setData(newData);
    setData(cleanData);

    console.log("Delete ID:", id);
    console.log("Outside Parent:", data.length);
  };

  return (
    <div>
      <h1>Case Ledger</h1>

      <Case filterData={data} deleteCase={deleteCase} />
      {/* <Case data={data} />; */}
    </div>
  );
};

export default Ledger;
