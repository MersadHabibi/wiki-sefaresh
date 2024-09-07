import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { NextRequest } from "next/server";

export type TGraphQLContext = {
  req?: NextRequest;
  prisma?: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
};
