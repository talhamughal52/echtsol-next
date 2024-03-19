"use client";
import { usePathname } from "next/navigation";
const CustomLayout = ({ children }) => {
  const pathname = usePathname();
  if (pathname === "/portfolio") {
    return (
      <div
        data-testid="wrapper"
        className="MyLoader_wrapper css-79elbk sc-74ea07a8-2 ebcMNJ portfolio"
      >
        <div className="sc-70b23d60-0 jULmni">{children}</div>
      </div>
    );
  }
  if (pathname === "/blog") {
    return (
      <div
        data-testid="wrapper"
        className="MyLoader_wrapper css-79elbk sc-74ea07a8-2 ebcMNJ"
      >
        {children}
      </div>
    );
  }
  return <>{children}</>;
};

export default CustomLayout;
