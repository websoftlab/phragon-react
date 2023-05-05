import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGitBranchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGitBranchIcon = React.forwardRef<SVGSVGElement, TablerGitBranchIconProps>(
	function TablerGitBranchIcon(props, ref) {
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
				<path d="M6 3 L6 15" />
				<path d="M21 6 A3 3 0 0 1 18 9 A3 3 0 0 1 15 6 A3 3 0 0 1 21 6" />
				<path d="M9 18 A3 3 0 0 1 6 21 A3 3 0 0 1 3 18 A3 3 0 0 1 9 18" />
				<path d="M18 9a9 9 0 0 1-9 9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGitBranchIcon.displayName = "TablerGitBranchIcon";
}
