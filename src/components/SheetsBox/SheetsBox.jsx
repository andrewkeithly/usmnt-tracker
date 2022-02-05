import { useCallback, useEffect, useState } from "react";
import { Box } from "grommet";
import { getSheet } from "../../api/GoogleAPI";

// type Props = {};

const SheetsBox = () => {
  const [sheet, setSheet] = useState([]);

  const fetchData = useCallback(() => {
    Promise.all(
      [getSheet()]
    ).then((values) => {
      setSheet(values?.data?.item);
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <Box>{JSON.stringify(sheet)}</Box>;
};

export default SheetsBox;
