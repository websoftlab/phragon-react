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
				<path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M11 6h5a2 2 0 0 1 2 2v8" />
				<path d="M14 9l-3 -3l3 -3" />
				<path d="M13 18h-5a2 2 0 0 1 -2 -2v-8" />
				<path d="M10 15l3 3l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGitCompareIcon.displayName = "TablerGitCompareIcon";
}
