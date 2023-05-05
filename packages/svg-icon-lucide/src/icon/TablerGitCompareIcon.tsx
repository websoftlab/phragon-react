import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGitCompareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGitCompareIcon = React.forwardRef<SVGSVGElement, TablerGitCompareIconProps>(
	function TablerGitCompareIcon(props, ref) {
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
				<path d="M11 18H8a2 2 0 0 1-2-2V9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGitCompareIcon.displayName = "TablerGitCompareIcon";
}
