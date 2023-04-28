import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathXMinusXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathXMinusXIcon = React.forwardRef<SVGSVGElement, TablerMathXMinusXIconProps>(
	function TablerMathXMinusXIcon(props, ref) {
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
				<path d="M16 9l6 6" />
				<path d="M16 15l6 -6" />
				<path d="M10 12h4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMathXMinusXIcon.displayName = "TablerMathXMinusXIcon";
}
