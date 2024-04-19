import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError(); // Hook
  console.log(err);

  return (
    <div className="error-page">
      <img src="https://i.imgur.com/qIufhof.png" />
      <br />
      <h2>{err.statusText}</h2>
      <p>{err.data}</p>
      <h2>{err.status}</h2>
    </div>
  );
};
export default Error;
