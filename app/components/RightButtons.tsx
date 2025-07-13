import { Button } from "./ui/button";

const RightButtons = () => {
  const navItems = [
    { id: "", href: "#", label: "/" },
    { id: "about", href: "#about", label: "About" },
    { id: "skills", href: "#skills", label: "Skills" },
    { id: "portfolio", href: "#portfolio", label: "Portfolio" },
    { id: "contact", href: "#contact", label: "Contact" },
  ];

  return (
    <div className=" fixed top-[50vh]  right-10 z-50">
      <div className="hidden md:flex gap-2   flex-col  ">
        {navItems.map((item, idx) => (
          <a key={item.label} href={item.href}>
            <Button className="text-xs w-full ">
              <span className=""> {item.label}</span>
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RightButtons;
