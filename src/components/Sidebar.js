import React, { useState } from "react";
import { Plus, ChevronDown, Squirrel, Shirt, Gamepad2 } from "lucide-react";
import "../styles/Sidebar.css";

const Sidebar = ({ onFilter }) => {
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
                filterId: [
                  "animal01",
                  "animal02",
                  "animal03",
                  "animal04",
                  "animal05",
                  "animal06",
                  "animal07",
                  "animal08",
                  "animal10",
                  "animal11",
                  "animal12",
                  "animal13",
                  "animal14",
                  "animal15",
                  "animal16",
                  "animal17",
                  "animal18",
                ],
              },
              {
                name: "凶猛動物",
                filterId: [
                  "animal01",
                  "animal02",
                  "animal03",
                  "animal11",
                  "animal18",
                ],
              },
              {
                name: "溫和動物",
                filterId: [
                  "animal04",
                  "animal05",
                  "animal06",
                  "animal07",
                  "animal08",
                  "animal10",
                  "animal12",
                  "animal13",
                  "animal14",
                  "animal15",
                  "animal16",
                  "animal17",
                  "animal18",
                ],
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
                filterId: [
                  "clothes01",
                  "clothes02",
                  "pant01",
                  "pant02",
                  "pant03",
                  "skirt01",
                  "skirt02",
                  "skirt03",
                  "skirt04",
                  "skirt05",
                  "tshirt01",
                  "tshirt02",
                  "tshirt03",
                  "tshirt04",
                ],
              },
              {
                name: "上半身",
                filterId: [
                  "clothes01",
                  "clothes02",
                  "tshirt01",
                  "tshirt02",
                  "tshirt03",
                  "tshirt04",
                ],
              },
              {
                name: "下半身",
                filterId: [
                  "pant01",
                  "pant02",
                  "pant03",
                  "skirt01",
                  "skirt02",
                  "skirt03",
                  "skirt04",
                  "skirt05",
                  "tshirt01",
                  "tshirt02",
                  "tshirt03",
                  "tshirt04",
                ],
              },
              {
                name: "飾品",
                filterId: [
                  "accessory01",
                  "accessory02",
                  "accessory03",
                  "accessory04",
                  "accessory05",
                  "accessory06",
                  "accessory07",
                  "accessory08",
                  "accessory09",
                  "accessory10",
                ],
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
                filterId: [
                  "game01",
                  "game02",
                  "game03",
                  "game04",
                  "game05",
                  "game08",
                ],
              },
              {
                name: "遊戲",
                filterId: ["game06", "game07", "game09"],
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
