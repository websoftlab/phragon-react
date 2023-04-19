import type { ModalManagerProps } from "./types";
import { ModalStore } from "./ModalStore";
import React from "react";
import { ModalManagerSafe } from "./ModalManagerSafe";
import { addModalActions } from "./action";
import { useActionService } from "@phragon-react/action-service";

export function ModalManager(props: ModalManagerProps) {
	const { options = {}, ...rest } = props;
	const store: ModalStore = React.useMemo(() => new ModalStore(options), []);
	const service = useActionService();

	React.useEffect(() => addModalActions(service, store), [service, store]);

	return <ModalManagerSafe store={store} {...rest} />;
}
