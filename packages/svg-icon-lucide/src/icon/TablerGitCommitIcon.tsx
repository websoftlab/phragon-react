import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGitCommitIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGitCommitIcon = React.forwardRef<SVGSVGElement, TablerGitCommitIconProps>(
	function TablerGitCommitIcon(props, ref) {
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
				<path d="M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12" />
				<path d="M3 12 L9 12" />
				<path d="M15 12 L21 12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGitCommitIcon.displayName = "TablerGitCommitIcon";
}
