import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathXMinusYIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathXMinusYIcon = React.forwardRef<SVGSVGElement, TablerMathXMinusYIconProps>(
	function TablerMathXMinusYIcon(props, ref) {
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
				<path d="M2 9l6 6" />
				<path d="M2 15l6 -6" />
				<path d="M16 9l3 5.063" />
				<path d="M22 9l-4.8 9" />
				<path d="M10 12h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMathXMinusYIcon.displayName = "TablerMathXMinusYIcon";
}
