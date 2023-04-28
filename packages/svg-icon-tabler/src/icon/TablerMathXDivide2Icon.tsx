import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathXDivide2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathXDivide2Icon = React.forwardRef<SVGSVGElement, TablerMathXDivide2IconProps>(
	function TablerMathXDivide2Icon(props, ref) {
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
				<path d="M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h3" />
				<path d="M5 12h14" />
				<path d="M9 3l6 6" />
				<path d="M9 9l6 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMathXDivide2Icon.displayName = "TablerMathXDivide2Icon";
}
