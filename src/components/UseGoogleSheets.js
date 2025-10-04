import { useEffect, useState } from "react";

export default function UseGoogleSheets(sheetId) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch(
        `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`
      );
      const text = await res.text();
      const json = JSON.parse(text.replace(/^[^{]+/, "").replace(/[^}]+$/, ""));

      const cols = json.table.cols.map((c) => c.label);
      const rows = json.table.rows.map((r) => {
        let obj = {};
        r.c.forEach((c, i) => {
          obj[cols[i]] = c ? c.v : null;
        });
        return obj;
      });
      setData(rows);
      setLoading(false);
    }
    fetchData();
  }, [sheetId]);
  return { data, loading };
}
