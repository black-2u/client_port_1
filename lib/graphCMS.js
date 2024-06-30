import { GraphQLClient } from "graphql-request";

export const graphCms = new GraphQLClient(process.env.NEXT_PUBLIC_API);
