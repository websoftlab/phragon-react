import { useContext } from "react";
import { ActionServiceContext } from "./context";
import { invariant } from "@phragon-util/proof";

export function useActionService() {
	const ctx = useContext(ActionServiceContext);
	invariant(ctx, "ActionService context is not defined");
	return ctx;
}
