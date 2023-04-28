import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDoorOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDoorOffIcon = React.forwardRef<SVGSVGElement, TablerDoorOffIconProps>(function TablerDoorOffIcon(
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
			<path d="M3 21h18" />
			<path d="M6 21v-15" />
			<path d="M7.18 3.175c.25 -.112 .528 -.175 .82 -.175h8a2 2 0 0 1 2 2v9" />
			<path d="M18 18v3" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDoorOffIcon.displayName = "TablerDoorOffIcon";
}
