import { ApolloServer } from "@apollo/server";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "@apollo/server/plugin/landingPage/default";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import resolvers from "./resolvers";
import { typeDefs as scalarTypeDefs } from "graphql-scalars";
import { PrismaClient } from "@prisma/client";
import { TGraphQLContext } from "@/types";
import { readFileSync } from "fs";

const typeDefs = readFileSync("./src/app/api/graphql/schema.graphql", "utf8");

let plugins = [];
if (process.env.NODE_ENV === "production") {
  plugins = [
    ApolloServerPluginLandingPageProductionDefault({
      embed: true,
      graphRef: "mersad.up@gmail.com",
    }),
  ];
} else {
  plugins = [ApolloServerPluginLandingPageLocalDefault({ embed: true })];
}

const server = new ApolloServer({
  typeDefs: [...scalarTypeDefs, typeDefs],
  resolvers,
  plugins,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => {
    const prisma = new PrismaClient();

    prisma.$connect();

    return {
      req,
      prisma,
    };
  },
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
