import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPercentageIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPercentageIcon = React.forwardRef<SVGSVGElement, TablerPercentageIconProps>(
	function TablerPercentageIcon(props, ref) {
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
				<path d="M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M6 18l12 -12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPercentageIcon.displayName = "TablerPercentageIcon";
}
