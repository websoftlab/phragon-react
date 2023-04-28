import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowRampRight3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowRampRight3Icon = React.forwardRef<SVGSVGElement, TablerArrowRampRight3IconProps>(
	function TablerArrowRampRight3Icon(props, ref) {
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
				<path d="M6 3v6" />
				<path d="M16 16l4 -4l-4 -4" />
				<path d="M6 21v-6a3 3 0 0 1 3 -3h11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowRampRight3Icon.displayName = "TablerArrowRampRight3Icon";
}
