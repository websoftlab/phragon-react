import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsDoubleNwSeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsDoubleNwSeIcon = React.forwardRef<SVGSVGElement, TablerArrowsDoubleNwSeIconProps>(
	function TablerArrowsDoubleNwSeIcon(props, ref) {
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
				<path d="M14 21l-11 -11" />
				<path d="M3 14v-4h4" />
				<path d="M17 14h4v-4" />
				<path d="M10 3l11 11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsDoubleNwSeIcon.displayName = "TablerArrowsDoubleNwSeIcon";
}
