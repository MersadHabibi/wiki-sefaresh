import { GraphQLError } from "graphql";

import { PrismaClient } from "@prisma/client";
import { TGraphQLContext } from "@/types";

type createExperienceInput = {
  title: string;
  description: string;
  product: string;
  orderDate: Date;
  score: number;
  storeId: string;
};

export default async function createExperienceMutation(
  _: any,
  {
    input,
  }: {
    input: createExperienceInput;
  },
  ctx: TGraphQLContext,
) {
  try {
    const experience = await ctx.prisma?.experience.create({
      data: {
        ...input,
      },
    });

    return experience;
  } catch (error) {
    console.log(error);
    throw new GraphQLError(
      "ثبت تجربه با مشکل مواجه شد! لطفا بعدا امتحان کنید",
      { extensions: { code: 500 } },
    );
  }
}
