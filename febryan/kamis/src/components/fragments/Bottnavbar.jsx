import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCalendarDay, faCamera, faCogs, faGamepad } from "@fortawesome/free-solid-svg-icons";
import "./style.css"
import { Link } from "react-router-dom";

const Navigation = () => {
    const Menus = [
        { name: "Home", icon: faHome, dis: "translate-x-0", route: "/" },
        { name: "Profile", icon: faGamepad, dis: "translate-x-16", route: "/form" },
        { name: "Absen", icon: faCalendarDay, dis: "translate-x-32", route: "/absen" },
    ];

    const [active, setActive] = useState(0);

    return (
        <div className="bg-white max-h-[5.5rem] px-3 rounded-t-xl ">
            <ul className="flex relative justify-center">
                <Link to={Menus[active].route}>
                    <span
                        className={`bg-rose-600 duration-300 ${Menus[active].dis} border-4 border-gray-900 h-16 w-16 absolute
                        -top-5 rounded-full transition-all flex items-center justify-center`}
                    >
                        {active !== null && <FontAwesomeIcon icon={Menus[active].icon} size="lg" />}
                        <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] shadow-myShadow1"></span>
                        <span className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] shadow-myShadow2"></span>
                    </span>
                </Link>
                {Menus.map((menu, i) => (
                    <li key={i} className="w-16">
                        <Link
                            to={menu.route}
                            className="flex flex-col text-center pt-6"
                            onClick={() => setActive(i)}
                        >
                            <span
                                className={`text-xl cursor-pointer duration-500 ${i === active && "-mt-6 text-white"
                                    } transition-all`}
                            >
                                <FontAwesomeIcon icon={menu.icon} size={i === active ? "1x" : "1x"} />
                            </span>
                            <span
                                className={` ${active === i
                                    ? "translate-y-4 duration-700 opacity-100"
                                    : "opacity-0 translate-y-10"
                                    } transition-all`}
                            >
                                {menu.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;