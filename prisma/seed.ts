import { PrismaClient } from "@prisma/client";
import { lorem } from "faker";

const main = async () => {
  return;
  const prisma = new PrismaClient();
  const count = await prisma.todo.count();
  if (count > 12) return;
  for (let i = count; i < 12; i++) {
    await prisma.todo.create({
      data: {
        title: lorem.sentence(),
        description: lorem.sentences(5),
      },
    });
  }
};

main();
