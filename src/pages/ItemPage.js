import { useCallback, useState } from "react";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import UseGoogleSheets from "../components/UseGoogleSheets";
import * as pic from "../pic";
import "../styles/ItemPage.css";
import { LoadingMouse } from "../components/LoadingMouse";

const ItemPage = () => {
  const [filteredIds, setFilteredIds] = useState(null);

  const { data, loading } = UseGoogleSheets(
    "1YedVL1LdSOLlm1DDmJkqVhCHCddB7Gy15n0w0r8IDN4"
  );

  const handleFilter = useCallback((ids) => {
    setFilteredIds(ids?.length ? ids : null);
  }, []);

  const formattedData = data.map((item) => ({
    ...item,
    category: item.category.split(",").map((c) => c.trim()),
  }));

  const filteredData = filteredIds
    ? formattedData.filter((i) =>
        i.category.some((p) => filteredIds.includes(p))
      )
    : formattedData;

  if (loading) {
    return (
      <div>
        <LoadingMouse />
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page_content">
        <div className="side_bar">
          <Sidebar onFilter={handleFilter} />
        </div>
        <div>
          <div className="topside_text">
            <p>{filteredData.length}件商品</p>
          </div>
          <div className="page_container">
            {filteredData.map((i) => (
              <Product key={i.itemId} {...i} src={pic[i.src]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
