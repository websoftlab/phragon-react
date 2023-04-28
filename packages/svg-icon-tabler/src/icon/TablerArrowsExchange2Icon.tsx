import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowsExchange2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowsExchange2Icon = React.forwardRef<SVGSVGElement, TablerArrowsExchange2IconProps>(
	function TablerArrowsExchange2Icon(props, ref) {
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
				<path d="M17 10h-14l4 -4" />
				<path d="M7 14h14l-4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowsExchange2Icon.displayName = "TablerArrowsExchange2Icon";
}
