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
			<path d="M12 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
			<path d="M12 12l0 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGitForkIcon.displayName = "TablerGitForkIcon";
}
