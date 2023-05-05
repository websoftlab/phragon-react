import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGitForkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGitForkIcon = React.forwardRef<SVGSVGElement, TablerGitForkIconProps>(function TablerGitForkIcon(
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
			<path d="M15 18 A3 3 0 0 1 12 21 A3 3 0 0 1 9 18 A3 3 0 0 1 15 18" />
			<path d="M9 6 A3 3 0 0 1 6 9 A3 3 0 0 1 3 6 A3 3 0 0 1 9 6" />
			<path d="M21 6 A3 3 0 0 1 18 9 A3 3 0 0 1 15 6 A3 3 0 0 1 21 6" />
			<path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
			<path d="M12 12v3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGitForkIcon.displayName = "TablerGitForkIcon";
}
