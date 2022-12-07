import { useState, useEffect } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://laptop-sells-server.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem("AN_IT", data.access_token);
            setToken(data.access_token);
          }
          // setLoading(false);
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
