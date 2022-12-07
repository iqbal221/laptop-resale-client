import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`https://laptop-sells-server.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.isAdmin) {
            setIsAdmin(data.isAdmin);
          }

          if (data.isUser) {
            setIsUser(data.isUser);
          }
          if (data.isSeller) {
            setIsSeller(data.isSeller);
          }

          setIsAdminLoading(false);
        });
    }
  }, [email]);

  return [isAdminLoading, isAdmin, isUser, isSeller];
};

export default useAdmin;
