import { Loading, Table } from '@nextui-org/react';
import { useGetLogsQuery } from '../../../app/services/logs';

const LogsPage = () => {
  const { data: logs, isFetching } = useGetLogsQuery();

  if (!logs && !isFetching) {
    return null;
  }

  if (isFetching) {
    return <Loading size='xl' />;
  }

  return (
    <Table>
      <Table.Header>
        <Table.Column>IP</Table.Column>
        <Table.Column>Date</Table.Column>
        <Table.Column>Method</Table.Column>
      </Table.Header>
      <Table.Body>
        {(logs || []).map((log) => (
          <Table.Row key={log._id}>
            <Table.Cell>{log.ip}</Table.Cell>
            <Table.Cell>{new Date(log.datetime).toLocaleString()}</Table.Cell>
            <Table.Cell>{log.method}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default LogsPage;
