import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEqualDoubleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEqualDoubleIcon = React.forwardRef<SVGSVGElement, TablerEqualDoubleIconProps>(
	function TablerEqualDoubleIcon(props, ref) {
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
				<path d="M3 10h7" />
				<path d="M3 14h7" />
				<path d="M14 10h7" />
				<path d="M14 14h7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerEqualDoubleIcon.displayName = "TablerEqualDoubleIcon";
}
