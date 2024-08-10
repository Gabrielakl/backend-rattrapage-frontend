import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { Table as AntTable, Tag, Space } from 'antd';
import React, { useState, useEffect, FC } from 'react';
import { tableColumns, tableData } from '../misc';

interface TableProps {
}

const Table: FC<TableProps> = (prop) => {
  const [data, setData] = useState<any>();

  return <div>
      <AntTable
        columns={tableColumns}
        dataSource={tableData}
        onChange={() => {}}
        showSorterTooltip={{
          target: 'sorter-icon',
        }}
      />
    </div>
}

export default Table 