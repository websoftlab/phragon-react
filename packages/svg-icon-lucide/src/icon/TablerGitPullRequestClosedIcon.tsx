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
				<path d="M21 18 A3 3 0 0 1 18 21 A3 3 0 0 1 15 18 A3 3 0 0 1 21 18" />
				<path d="M9 6 A3 3 0 0 1 6 9 A3 3 0 0 1 3 6 A3 3 0 0 1 9 6" />
				<path d="M18 11.5V15" />
				<path d="m21 3-6 6" />
				<path d="m21 9-6-6" />
				<path d="M6 9 L6 21" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGitPullRequestClosedIcon.displayName = "TablerGitPullRequestClosedIcon";
}
