import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Plus, ChevronDown, Squirrel, Shirt, Gamepad2 } from "lucide-react";
import "../styles/Sidebar.css";

const Sidebar = ({ onFilter }) => {
  const { search } = useLocation();
  const hasInit = useRef(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (hasInit.current) return;
    hasInit.current = true;

    const params = new URLSearchParams(search);
    const filterKey = params.get("filter");

    if (filterKey) {
      const map = {
        animalGood: ["animalGood"],
        animalBad: ["animalBad"],
        top: ["clothes", "tshirt"],
        bottom: ["pant", "skirt"],
        game: ["game"],
        accessory: ["accessory"],
      };
      const matched = map[filterKey];
      if (matched && onFilter) {
        onFilter(matched);
      }
    }
  }, [search, onFilter]);

  return (
    <div className="sidebar">
      <h2>商品分類</h2>
      <aside>
        <ul className="sidebar_content">
          <SidebarItem
            icon={<Squirrel />}
            title="動物"
            links={[
              {
                name: "無差別動物",
                filterId: ["animalBad", "animalGood"],
              },
              {
                name: "凶猛動物",
                filterId: ["animalBad"],
              },
              {
                name: "溫和動物",
                filterId: ["animalGood"],
              },
            ]}
            onFilter={onFilter}
          />

          <SidebarItem
            icon={<Shirt />}
            title="服飾"
            links={[
              {
                name: "衣物",
                filterId: ["clothes", "pant", "skirt", "tshirt"],
              },
              {
                name: "上半身",
                filterId: ["clothes", "tshirt"],
              },
              {
                name: "下半身",
                filterId: ["pant", "skirt"],
              },
              {
                name: "飾品",
                filterId: ["accessory"],
              },
            ]}
            onFilter={onFilter}
          />

          <SidebarItem
            icon={<Gamepad2 />}
            title="雜貨"
            links={[
              {
                name: "硬體設備",
                filterId: ["gameHard"],
              },
              {
                name: "遊戲",
                filterId: ["game"],
              },
            ]}
            onFilter={onFilter}
          />
        </ul>
      </aside>
    </div>
  );
};

const SidebarItem = ({ icon, title, links, onFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="sidebar_list">
      <button className="sidebar_btn" onClick={() => setIsOpen(!isOpen)}>
        {icon}
        {title}
        {isOpen ? <ChevronDown size={20} /> : <Plus size={20} />}
      </button>
      {isOpen && links.length > 0 && (
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <button
                className="sidebar_link_btn"
                onClick={() => {
                  if (onFilter) onFilter(link.filterId);
                }}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Sidebar;
