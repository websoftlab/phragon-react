import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDiamondOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDiamondOffIcon = React.forwardRef<SVGSVGElement, TablerDiamondOffIconProps>(
	function TablerDiamondOffIcon(props, ref) {
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
				<path d="M9 5h9l3 5l-3.308 3.697m-1.883 2.104l-3.309 3.699a.7 .7 0 0 1 -1 0l-8.5 -9.5l2.62 -4.368" />
				<path d="M10 12l-2 -2.2l.6 -1" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDiamondOffIcon.displayName = "TablerDiamondOffIcon";
}
