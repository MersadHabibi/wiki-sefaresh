import createExperienceMutation from "@/graphql/createExperienceMutation";
import createStoreMutation from "@/graphql/createStoreMutation";
import { PrismaClient } from "@prisma/client";
import { GraphQLError } from "graphql";

const resolvers = {
  Query: {
    stores: async () => {},
  },

  Mutation: {
    createStore: createStoreMutation,
    createExperience: createExperienceMutation,
  },
};

export default resolvers;
