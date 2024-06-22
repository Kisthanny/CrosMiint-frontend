import { FunctionComponent, ReactNode } from "react";
import { FeaturedNFT } from "../Filter";

interface StockProps {
  stock: FeaturedNFT["stock"];
  className?: HTMLBaseElement["className"];
}

const Stock: FunctionComponent<StockProps> = ({ stock, className }) => {
  return (
    <div className={`grey-600 text-xs ${className}`}>{stock} in stock</div>
  );
};

export default Stock;
