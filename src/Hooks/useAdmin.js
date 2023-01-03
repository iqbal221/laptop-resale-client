import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isSeller, setIsSeller] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(`https://laptop-sells-server.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data?.isAdmin) {
            setIsAdmin(data.isAdmin);
          }

          if (data?.isUser) {
            setIsUser(data.isUser);
          }

          if (data?.isSeller) {
            setIsSeller(data.isSeller);
          }
        });
    }
  }, [email]);

  return [isAdmin, isUser, isSeller];
};

export default useAdmin;
