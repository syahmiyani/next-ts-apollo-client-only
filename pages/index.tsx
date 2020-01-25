import withApollo from "../lib/with-apollo";
import Link from "next/link";
import { TaskStatus, useTasksQuery } from "../generated/graphql";
import { NextPage } from "next";

const Index: NextPage = () => {
  const { loading, error, data } = useTasksQuery({
    variables: { status: TaskStatus.Active }
  });

  const tasks = data?.tasks;

  if (loading) {
    return <p>loading...</p>;
  } else if (error) {
    return <p>An error occured</p>;
  }
  return (
    <>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <ul>
        {tasks ? (
          tasks.map(task => <li key={task.id}>{task.title}</li>)
        ) : (
          <p>There are no tasks</p>
        )}
      </ul>
    </>
  );
};

export default withApollo(Index);
