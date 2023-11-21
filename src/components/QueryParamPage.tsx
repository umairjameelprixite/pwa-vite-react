import { useLocation } from "react-router-dom";

const QueryParamPage = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const paramValue = queryParams.get("param");

  return (
    <div>
      <h2>Query Parameter Page</h2>
      <p>
        Query parameter value: <strong>{paramValue}</strong>
      </p>
    </div>
  );
};

export default QueryParamPage;
