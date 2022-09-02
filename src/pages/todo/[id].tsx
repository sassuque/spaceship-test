import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const Todo = () => {
  const { query } = useRouter();
  const {} = trpc.useQuery(["todos.get", {}]);
  if (!query) return null;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 32,
      }}
    >
      <h1>Todo Title</h1>
      <p style={{ maxWidth: "80ch" }}>
        Todo description Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Accusamus illum harum nobis perspiciatis? Iusto perferendis,
        molestias, velit atque obcaecati qui vero placeat vitae soluta tenetur,
        autem et reprehenderit deserunt veritatis?
      </p>
    </div>
  );
};

export default Todo;
