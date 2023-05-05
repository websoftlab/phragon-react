import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWorkflowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWorkflowIcon = React.forwardRef<SVGSVGElement, TablerWorkflowIconProps>(function TablerWorkflowIcon(
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
			<path d="M5 3 H9 A2 2 0 0 1 11 5 V9 A2 2 0 0 1 9 11 H5 A2 2 0 0 1 3 9 V5 A2 2 0 0 1 5 3 z" />
			<path d="M7 11v4a2 2 0 0 0 2 2h4" />
			<path d="M15 13 H19 A2 2 0 0 1 21 15 V19 A2 2 0 0 1 19 21 H15 A2 2 0 0 1 13 19 V15 A2 2 0 0 1 15 13 z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWorkflowIcon.displayName = "TablerWorkflowIcon";
}
