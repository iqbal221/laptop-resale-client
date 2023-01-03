import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";
import BuyerAndSeller from "../BuyerAndSeller/BuyerAndSeller";
import MyOrder from "../MyOrder/MyOrder";
import MyProduct from "../MyProduct/MyProduct";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isUser, isSeller] = useAdmin(user?.email);

  return (
    <div>
      {isUser && <MyOrder></MyOrder>}
      {isAdmin && <BuyerAndSeller></BuyerAndSeller>}
      {isSeller && <MyProduct></MyProduct>}
    </div>
  );
};

export default Dashboard;
