import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAntennaBars4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAntennaBars4Icon = React.forwardRef<SVGSVGElement, TablerAntennaBars4IconProps>(
	function TablerAntennaBars4Icon(props, ref) {
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
				<path d="M6 18l0 -3" />
				<path d="M10 18l0 -6" />
				<path d="M14 18l0 -9" />
				<path d="M18 18l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAntennaBars4Icon.displayName = "TablerAntennaBars4Icon";
}
