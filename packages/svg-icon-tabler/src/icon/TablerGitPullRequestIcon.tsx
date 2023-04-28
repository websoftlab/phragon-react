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
				<path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M6 8l0 8" />
				<path d="M11 6h5a2 2 0 0 1 2 2v8" />
				<path d="M14 9l-3 -3l3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGitPullRequestIcon.displayName = "TablerGitPullRequestIcon";
}
