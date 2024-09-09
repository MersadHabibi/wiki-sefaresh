import createExperienceMutation from "@/graphql/server/createExperienceMutation";
import createStoreMutation from "@/graphql/server/createStoreMutation";
import { TExperience, TGraphQLContext, TStore } from "@/types";
import { GraphQLError } from "graphql";
import {
  DateTimeResolver,
  PositiveFloatResolver,
  PositiveIntResolver,
  URLResolver,
} from "graphql-scalars";

const resolvers = {
  DateTime: DateTimeResolver,
  PositiveFloat: PositiveFloatResolver,
  PositiveInt: PositiveIntResolver,
  URL: URLResolver,

  Query: {
    stores: async (_: any, __: any, ctx: TGraphQLContext) => {
      try {
        const stores = await ctx.prisma?.store.findMany({});

        return stores;
      } catch (error) {
        throw new GraphQLError("سرور با مشکل مواجه شد! لطفا بعدا امتحان کنید", {
          extensions: { code: 500 },
        });
      }
    },

    store: async (_: any, args: { id: string }, ctx: TGraphQLContext) => {
      try {
        const store = await ctx.prisma?.store.findUnique({
          where: {
            id: args.id,
          },
        });

        await ctx.prisma?.store.update({
          where: {
            id: store?.id,
          },
          data: {
            view: (store?.view ?? 0) + 1,
          },
        });

        if (!store)
          throw new GraphQLError("فروشگاه پیدا نشد!", {
            extensions: { code: 404 },
          });

        return store;
      } catch (error: any) {
        if (error?.extensions?.code == "404") throw new GraphQLError(error);

        throw new GraphQLError("سرور با مشکل مواجه شد! لطفا بعدا امتحان کنید", {
          extensions: { code: 500 },
        });
      }
    },

    popularStores: async (_: any, __: any, ctx: TGraphQLContext) => {
      try {
        const stores = await ctx.prisma?.store.findMany({});

        const popularStores = stores?.sort((a, b) => {
          return b.experiencesCount - a.experiencesCount;
        });

        return popularStores?.slice(0, 30);
      } catch (error) {
        throw new GraphQLError("سرور با مشکل مواجه شد! لطفا بعدا امتحان کنید", {
          extensions: { code: 500 },
        });
      }
    },

    experiences: async (_: any, __: any, ctx: TGraphQLContext) => {
      try {
        const experiences = await ctx.prisma?.experience.findMany({});

        return experiences;
      } catch (error) {
        throw new GraphQLError("سرور با مشکل مواجه شد! لطفا بعدا امتحان کنید", {
          extensions: { code: 500 },
        });
      }
    },

    experience: async (_: any, args: { id: string }, ctx: TGraphQLContext) => {
      try {
        const experience = await ctx.prisma?.experience.findUnique({
          where: {
            id: args.id,
          },
        });

        if (!experience)
          throw new GraphQLError("تجربه پیدا نشد!", {
            extensions: { code: 404 },
          });

        return experience;
      } catch (error: any) {
        if (error.extensions.code == "404") throw new GraphQLError(error);

        throw new GraphQLError("سرور با مشکل مواجه شد! لطفا بعدا امتحان کنید", {
          extensions: { code: 500 },
        });
      }
    },

    lastExperiences: async (_: any, __: any, ctx: TGraphQLContext) => {
      try {
        const experiences = await ctx.prisma?.experience.findMany({
          where: {},
        });

        const lastExperiences = experiences?.sort((a, b) => {
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        });

        return lastExperiences?.slice(0, 4);
      } catch (error) {
        throw new GraphQLError("سرور با مشکل مواجه شد! لطفا بعدا امتحان کنید", {
          extensions: { code: 500 },
        });
      }
    },
  },

  Mutation: {
    createStore: createStoreMutation,
    createExperience: createExperienceMutation,
  },

  Store: {
    experiences: async (store: TStore, _: any, ctx: TGraphQLContext) => {
      try {
        const experiences = await ctx.prisma?.experience.findMany({
          where: {
            storeId: store.id,
          },
        });

        return experiences;
      } catch (error) {
        throw new GraphQLError("سرور با مشکل مواجه شد! لطفا بعدا امتحان کنید", {
          extensions: { code: 500 },
        });
      }
    },
  },

  Experience: {
    Store: async (experience: TExperience, _: any, ctx: TGraphQLContext) => {
      try {
        const store = await ctx.prisma?.store.findFirst({
          where: {
            id: experience.storeId,
          },
        });

        return store;
      } catch (error) {
        throw new GraphQLError("سرور با مشکل مواجه شد! لطفا بعدا امتحان کنید", {
          extensions: { code: 500 },
        });
      }
    },
  },
};

export default resolvers;
