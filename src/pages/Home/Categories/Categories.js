import { useQuery } from "@tanstack/react-query";
import React from "react";

import CategoryCard from "./CategoryCard";

const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://laptop-sells-server.vercel.app/categories"
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return;
  }

  return (
    <div>
      <h2 className="lg:text-4xl md:text-2xl text-xl text-primary text-center lg:mt-40 md:mt-24 mt-14 font-bold">
        Choose Your Best Choice
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:mt-32 md:mt-14 mt-8">
        {categories?.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
