import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGitPullRequestDraftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGitPullRequestDraftIcon = React.forwardRef<SVGSVGElement, TablerGitPullRequestDraftIconProps>(
	function TablerGitPullRequestDraftIcon(props, ref) {
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
				<path d="M18 6V5" />
				<path d="M18 11v-1" />
				<path d="M6 9 L6 21" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGitPullRequestDraftIcon.displayName = "TablerGitPullRequestDraftIcon";
}
