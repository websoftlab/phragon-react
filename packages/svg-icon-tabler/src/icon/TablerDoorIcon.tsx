import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDoorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDoorIcon = React.forwardRef<SVGSVGElement, TablerDoorIconProps>(function TablerDoorIcon(props, ref) {
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
			<path d="M14 12v.01" />
			<path d="M3 21h18" />
			<path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDoorIcon.displayName = "TablerDoorIcon";
}
