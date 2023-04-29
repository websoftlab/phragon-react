import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherGitPullRequestIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherGitPullRequestIcon = React.forwardRef<SVGSVGElement, FeatherGitPullRequestIconProps>(
	function FeatherGitPullRequestIcon(props, ref) {
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
				<circle cx="18" cy="18" r="3" />
				<circle cx="6" cy="6" r="3" />
				<path d="M13 6h3a2 2 0 0 1 2 2v7" />
				<line x1="6" y1="9" x2="6" y2="21" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherGitPullRequestIcon.displayName = "FeatherGitPullRequestIcon";
}
