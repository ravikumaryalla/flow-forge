import { trpc } from "@/trpc/server";

const page = async () => {
  const data = await trpc.getUsers();
  console.log(data, "======");

  return (
    <div className="bg-amber-100">
      <h1>{`${data}`}</h1>
    </div>
  );
};

export default page;
