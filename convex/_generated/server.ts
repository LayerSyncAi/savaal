import {
	queryGeneric,
	mutationGeneric,
	internalQueryGeneric,
	internalMutationGeneric,
} from "convex/server";
import type { DataModel } from "./dataModel";

export const query = queryGeneric<DataModel>();
export const mutation = mutationGeneric<DataModel>();
export const internalQuery = internalQueryGeneric<DataModel>();
export const internalMutation = internalMutationGeneric<DataModel>();
