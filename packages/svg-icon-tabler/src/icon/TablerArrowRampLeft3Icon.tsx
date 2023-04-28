import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRampLeft3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRampLeft3Icon = React.forwardRef<SVGSVGElement, TablerArrowRampLeft3IconProps>(
	function TablerArrowRampLeft3Icon(props, ref) {
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
				<path d="M18 3v6" />
				<path d="M8 16l-4 -4l4 -4" />
				<path d="M18 21v-6a3 3 0 0 0 -3 -3h-11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRampLeft3Icon.displayName = "TablerArrowRampLeft3Icon";
}
