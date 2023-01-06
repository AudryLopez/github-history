import { Table, useAsyncList } from "@nextui-org/react";
import { Commit } from "../../types/api_response";
import { commits } from "../../seeds/commits";

interface prop{
  commits?: Commit[]
}

export default function GitTable() {
  const columns = [
    { name: "Commit", uid: "commit" },
    { name: "Message", uid: "message" },
    { name: "Author", uid: "author" },
    { name: "Authored Date", uid: "authored" },
  ];

  async function load() {
    return {
      items: commits.entries(),
      cursor: commits.entries(),
    };
  }
  const list = useAsyncList({ load });

  return (
    <Table
      bordered
      shadow={true}
      aria-label="Table display commits from API"
      css={{ minWidth: "90%", height: "calc($space$14 * 10)" }}
      color="secondary"
      
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.uid}>{column.name}</Table.Column>
        )}
      </Table.Header>
      <Table.Body
        items={commits}
        loadingState={list.loadingState}
        onLoadMore={list.loadMore}
      >
        {
          (commits: any) => (
            <Table.Row key={commits.sha} >
              <Table.Cell>{commits.sha}</Table.Cell>
              <Table.Cell>{commits.commit.message}</Table.Cell>
              <Table.Cell>{commits.commit.author.name}</Table.Cell>
              <Table.Cell>{commits.commit.author.date}</Table.Cell>
            </Table.Row>
          )
        }
        {/* {(item: any) => (
          <Table.Row key={item.name}>
            {(key) => <Table.Cell>{item[key]}</Table.Cell>}
          </Table.Row>
        )} */}
      </Table.Body>
    </Table>
  );
}
