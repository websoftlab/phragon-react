import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathXDivideYIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathXDivideYIcon = React.forwardRef<SVGSVGElement, TablerMathXDivideYIconProps>(
	function TablerMathXDivideYIcon(props, ref) {
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
				<path d="M9 3l6 6" />
				<path d="M9 9l6 -6" />
				<path d="M9 15l3 4.5" />
				<path d="M15 15l-4.5 7" />
				<path d="M5 12h14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMathXDivideYIcon.displayName = "TablerMathXDivideYIcon";
}
