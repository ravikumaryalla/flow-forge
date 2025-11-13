import { z } from "zod";

import { baseProcedure, creteTRPCRouter } from "../init";
import prisma from "@/lib/db";
export const appRouter = creteTRPCRouter({
  getUsers: baseProcedure.query(() => {
    return prisma.user.findMany();
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
