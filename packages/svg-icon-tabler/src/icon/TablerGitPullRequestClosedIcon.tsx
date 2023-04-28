import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGitPullRequestClosedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGitPullRequestClosedIcon = React.forwardRef<SVGSVGElement, TablerGitPullRequestClosedIconProps>(
	function TablerGitPullRequestClosedIcon(props, ref) {
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
				<path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M6 8v8" />
				<path d="M18 11v5" />
				<path d="M16 4l4 4m0 -4l-4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGitPullRequestClosedIcon.displayName = "TablerGitPullRequestClosedIcon";
}
