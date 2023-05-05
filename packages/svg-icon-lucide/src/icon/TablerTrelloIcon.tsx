import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrelloIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrelloIcon = React.forwardRef<SVGSVGElement, TablerTrelloIconProps>(function TablerTrelloIcon(
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
			<path d="M5 3 H19 A2 2 0 0 1 21 5 V19 A2 2 0 0 1 19 21 H5 A2 2 0 0 1 3 19 V5 A2 2 0 0 1 5 3 z" />
			<path d="M7 7 H10 V16 H7 V7 z" />
			<path d="M14 7 H17 V12 H14 V7 z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTrelloIcon.displayName = "TablerTrelloIcon";
}
