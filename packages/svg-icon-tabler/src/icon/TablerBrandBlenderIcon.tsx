import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandBlenderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandBlenderIcon = React.forwardRef<SVGSVGElement, TablerBrandBlenderIconProps>(
	function TablerBrandBlenderIcon(props, ref) {
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
				<path d="M15 14m-6 0a6 5 0 1 0 12 0a6 5 0 1 0 -12 0" />
				<path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M3 16l9 -6.5" />
				<path d="M6 9h9" />
				<path d="M13 5l5.65 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandBlenderIcon.displayName = "TablerBrandBlenderIcon";
}
