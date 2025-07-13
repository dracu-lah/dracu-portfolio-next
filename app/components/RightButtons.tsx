const RightButtons = () => {
  const navItems = [
    { id: "", href: "#", label: "1" },
    { id: "about", href: "#about", label: "2" },
    { id: "skills", href: "#skills", label: "3" },
    { id: "portfolio", href: "#portfolio", label: "4" },
    { id: "contact", href: "#contact", label: "5" },
  ];

  return (
    <div className="fixed top-[50vh]  right-10 z-50">
      <div className=" flex gap-2   flex-col  ">
        {navItems.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            className={`right-nav  p-2 size-8 flex  bg-gray-900 text-white hover:bg-white hover:text-black  justify-center items-center border-2 font-semibold duration-300`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default RightButtons;
