import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGitBranchDeletedIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGitBranchDeletedIcon = React.forwardRef<SVGSVGElement, TablerGitBranchDeletedIconProps>(
	function TablerGitBranchDeletedIcon(props, ref) {
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
				<path d="M7 8v8" />
				<path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
				<path d="M14 14l3 -3l3 3" />
				<path d="M15 4l4 4" />
				<path d="M15 8l4 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGitBranchDeletedIcon.displayName = "TablerGitBranchDeletedIcon";
}
