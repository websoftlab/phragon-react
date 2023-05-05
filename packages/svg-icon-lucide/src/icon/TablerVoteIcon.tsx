import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVoteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVoteIcon = React.forwardRef<SVGSVGElement, TablerVoteIconProps>(function TablerVoteIcon(props, ref) {
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
			<path d="m9 12 2 2 4-4" />
			<path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
			<path d="M22 19H2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVoteIcon.displayName = "TablerVoteIcon";
}
