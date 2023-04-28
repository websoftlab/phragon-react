import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBorderSidesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBorderSidesIcon = React.forwardRef<SVGSVGElement, TablerBorderSidesIconProps>(
	function TablerBorderSidesIcon(props, ref) {
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
				<path d="M4 8v8" />
				<path d="M20 16v-8" />
				<path d="M8 4h8" />
				<path d="M8 20h8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBorderSidesIcon.displayName = "TablerBorderSidesIcon";
}
