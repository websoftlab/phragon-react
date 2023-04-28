import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMath1Divide2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMath1Divide2Icon = React.forwardRef<SVGSVGElement, TablerMath1Divide2IconProps>(
	function TablerMath1Divide2Icon(props, ref) {
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
				<path d="M5 12h14" />
				<path d="M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h3" />
				<path d="M10 5l2 -2v6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMath1Divide2Icon.displayName = "TablerMath1Divide2Icon";
}
