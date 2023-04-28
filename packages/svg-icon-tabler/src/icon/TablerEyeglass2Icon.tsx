import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEyeglass2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEyeglass2Icon = React.forwardRef<SVGSVGElement, TablerEyeglass2IconProps>(
	function TablerEyeglass2Icon(props, ref) {
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
				<path d="M8 4h-2l-3 10v2.5" />
				<path d="M16 4h2l3 10v2.5" />
				<path d="M10 16l4 0" />
				<path d="M17.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
				<path d="M6.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerEyeglass2Icon.displayName = "TablerEyeglass2Icon";
}
