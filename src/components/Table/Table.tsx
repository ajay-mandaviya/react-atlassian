import React from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import {
  HeadType,
  RowType,
  StatelessProps,
} from "@atlaskit/dynamic-table/types";
import head from "../../helper/tableHead";

const Table: React.FC<StatelessProps> = ({ head, rows, ...rest }) => {
  return <DynamicTable head={head} rows={rows} {...rest} />;
};

Table.defaultProps = {
  head: head,
  rowsPerPage: 10,
};

export default Table;
