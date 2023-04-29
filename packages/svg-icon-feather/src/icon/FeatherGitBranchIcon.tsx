import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherGitBranchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherGitBranchIcon = React.forwardRef<SVGSVGElement, FeatherGitBranchIconProps>(
	function FeatherGitBranchIcon(props, ref) {
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
				<line x1="6" y1="3" x2="6" y2="15" />
				<circle cx="18" cy="6" r="3" />
				<circle cx="6" cy="18" r="3" />
				<path d="M18 9a9 9 0 0 1-9 9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherGitBranchIcon.displayName = "FeatherGitBranchIcon";
}
