import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathSymbolsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathSymbolsIcon = React.forwardRef<SVGSVGElement, TablerMathSymbolsIconProps>(
	function TablerMathSymbolsIcon(props, ref) {
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
				<path d="M3 12l18 0" />
				<path d="M12 3l0 18" />
				<path d="M16.5 4.5l3 3" />
				<path d="M19.5 4.5l-3 3" />
				<path d="M6 4l0 4" />
				<path d="M4 6l4 0" />
				<path d="M18 16l.01 0" />
				<path d="M18 20l.01 0" />
				<path d="M4 18l4 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMathSymbolsIcon.displayName = "TablerMathSymbolsIcon";
}
