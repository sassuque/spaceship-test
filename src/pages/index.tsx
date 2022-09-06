import { TrashIcon } from "@heroicons/react/24/solid";
import dayjs from "dayjs";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { trpc } from "../utils/trpc";
import z from "zod";

const todoValidator = z.object({
  title: z.string(),
  description: z.string(),
});

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["todos.getAll"]);
  const { mutate } = trpc.useMutation("todos.create");
  const { handleSubmit, register } = useForm();
  return (
    <>
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          padding: "28px 0",
        }}
      >
        <h1 style={{ textAlign: "center", margin: 0 }}>Todos list app</h1>
      </div>
      <div
        style={{
          display: "flex",
          padding: "0 36px 36px",
        }}
      >
        <div
          style={{
            flexGrow: 1,
            borderRight: "1px solid grey",
            position: "relative",
          }}
        >
          <div style={{ position: "sticky", top: 20, paddingRight: 12 }}>
            <h2>Create Todo</h2>
            <form
              onSubmit={handleSubmit((val) => {
                const todo = todoValidator.parse(val);
                // Should Create a Todo
                mutate(todo);
              })}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="title">
                  <span>Title</span>
                </label>
                <input
                  type="text"
                  {...register("title", {
                    required: true,
                  })}
                />
                <label htmlFor="description">
                  <span>Description</span>
                </label>
                <input
                  type="text"
                  {...register("description", {
                    required: true,
                  })}
                />
              </div>
              {/* Criar campo necessário */}
              <button type="submit" >Create</button>
            </form>
          </div>
        </div>
        <div
          style={{
            flexGrow: 2,
            padding: "0 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {isLoading && <div>Loading...</div>}
            {!isLoading && data && (
              <>
                {data.length === 0 && <h2>No todos yet! Create one</h2>}
                {data.map((todo) => {
                  return (
                    <div
                      key={todo.id}
                      style={{
                        border: "1px solid grey",
                        padding: 16,
                        borderRadius: 6,
                        position: "relative",
                        paddingRight: 66,
                        flex: 1,
                      }}
                    >
                      <Link href={`/todo/${todo.id}`}>
                        <a>
                          <h3
                            style={{
                              margin: 0,
                              fontWeight: 500,
                              width: "30ch",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {todo.title}
                          </h3>
                          <small>
                            Criado:{" "}
                            {dayjs(todo.createdAt).format("DD/MM HH:mm")}
                          </small>
                        </a>
                      </Link>
                      <div
                        style={{
                          position: "absolute",
                          right: 8,
                          top: 0,
                          bottom: 0,
                          color: "red",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <TrashIcon
                          style={{
                            height: 46,
                            width: 46,
                            padding: 6,
                            border: "2px solid red",
                            borderRadius: 6,
                            cursor: "pointer",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
