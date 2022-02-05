import { useCallback, useEffect, useState } from "react";
import { Box } from "grommet";
import { getSheetAxios } from "../../api/GoogleAPI";

const SheetsBox = () => {
  const [sheet, setSheet] = useState([]);

  const fetchData = useCallback(() => {
    Promise.all([getSheetAxios()].map((p) => p.catch((e) => e))).then(
      (values) => {
        setSheet(values[0]?.data?.values);
      }
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <Box>{JSON.stringify(sheet)}</Box>;
};

export default SheetsBox;
