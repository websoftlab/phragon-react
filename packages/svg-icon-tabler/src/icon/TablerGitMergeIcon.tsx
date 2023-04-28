import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGitMergeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGitMergeIcon = React.forwardRef<SVGSVGElement, TablerGitMergeIconProps>(function TablerGitMergeIcon(
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
			<path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M7 8l0 8" />
			<path d="M7 8a4 4 0 0 0 4 4h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGitMergeIcon.displayName = "TablerGitMergeIcon";
}
