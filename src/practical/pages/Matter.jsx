import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Matter = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Matter</h1>

      <h3>{id}</h3>
    </div>
  );
};

export default Matter;
