import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAntennaBars3IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAntennaBars3Icon = React.forwardRef<SVGSVGElement, TablerAntennaBars3IconProps>(
	function TablerAntennaBars3Icon(props, ref) {
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
				<path d="M14 18l0 .01" />
				<path d="M18 18l0 .01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAntennaBars3Icon.displayName = "TablerAntennaBars3Icon";
}
