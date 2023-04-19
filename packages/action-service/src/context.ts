import type { ActionService } from "@phragon-util/action-service";
import { createContext } from "react";

export const ActionServiceContext = createContext<null | ActionService>(null);
