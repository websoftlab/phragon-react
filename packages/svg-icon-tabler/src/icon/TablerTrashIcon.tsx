import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrashIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrashIcon = React.forwardRef<SVGSVGElement, TablerTrashIconProps>(function TablerTrashIcon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M4 7l16 0" />
			<path d="M10 11l0 6" />
			<path d="M14 11l0 6" />
			<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
			<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTrashIcon.displayName = "TablerTrashIcon";
}
