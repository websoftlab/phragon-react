import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGitPullRequestIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGitPullRequestIcon = React.forwardRef<SVGSVGElement, TablerGitPullRequestIconProps>(
	function TablerGitPullRequestIcon(props, ref) {
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
				<path d="M13 6h3a2 2 0 0 1 2 2v7" />
				<path d="M6 9 L6 21" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGitPullRequestIcon.displayName = "TablerGitPullRequestIcon";
}
