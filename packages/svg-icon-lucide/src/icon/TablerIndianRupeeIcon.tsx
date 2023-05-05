import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIndianRupeeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIndianRupeeIcon = React.forwardRef<SVGSVGElement, TablerIndianRupeeIconProps>(
	function TablerIndianRupeeIcon(props, ref) {
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
				<path d="M6 3h12" />
				<path d="M6 8h12" />
				<path d="m6 13 8.5 8" />
				<path d="M6 13h3" />
				<path d="M9 13c6.667 0 6.667-10 0-10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerIndianRupeeIcon.displayName = "TablerIndianRupeeIcon";
}
