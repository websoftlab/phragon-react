import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMathXDivideY2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMathXDivideY2Icon = React.forwardRef<SVGSVGElement, TablerMathXDivideY2IconProps>(
	function TablerMathXDivideY2Icon(props, ref) {
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
				<path d="M3 21l18 -18" />
				<path d="M15 14l3 4.5" />
				<path d="M21 14l-4.5 7" />
				<path d="M3 4l6 6" />
				<path d="M3 10l6 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMathXDivideY2Icon.displayName = "TablerMathXDivideY2Icon";
}
