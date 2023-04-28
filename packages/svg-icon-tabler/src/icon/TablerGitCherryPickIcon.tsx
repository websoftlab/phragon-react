import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGitCherryPickIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGitCherryPickIcon = React.forwardRef<SVGSVGElement, TablerGitCherryPickIconProps>(
	function TablerGitCherryPickIcon(props, ref) {
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
				<path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M7 3v6" />
				<path d="M7 15v6" />
				<path d="M13 7h2.5l1.5 5l-1.5 5h-2.5" />
				<path d="M17 12h3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGitCherryPickIcon.displayName = "TablerGitCherryPickIcon";
}
