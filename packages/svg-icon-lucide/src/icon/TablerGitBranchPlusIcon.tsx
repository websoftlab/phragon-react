import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGitBranchPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGitBranchPlusIcon = React.forwardRef<SVGSVGElement, TablerGitBranchPlusIconProps>(
	function TablerGitBranchPlusIcon(props, ref) {
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
				<path d="M6 3v12" />
				<path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
				<path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
				<path d="M15 6a9 9 0 0 0-9 9" />
				<path d="M18 15v6" />
				<path d="M21 18h-6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGitBranchPlusIcon.displayName = "TablerGitBranchPlusIcon";
}
