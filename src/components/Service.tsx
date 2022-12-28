import { FC } from "react";

interface ServiceProps {
  category: string;
  description: string;
}

const Service: FC<ServiceProps> = ({ category, description }) => {
  return (
    <div>
      <div className="mb-2 text-center text-h3 md:text-left">{category}</div>
      <div className="font-medium text-justify text-[#59647B] mb-4">
        {description}
      </div>
    </div>
  );
};

export default Service;
