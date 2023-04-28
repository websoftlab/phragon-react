import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrashXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrashXIcon = React.forwardRef<SVGSVGElement, TablerTrashXIconProps>(function TablerTrashXIcon(
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
			<path d="M4 7h16" />
			<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
			<path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
			<path d="M10 12l4 4m0 -4l-4 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTrashXIcon.displayName = "TablerTrashXIcon";
}
