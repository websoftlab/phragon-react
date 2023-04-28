import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandBingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandBingIcon = React.forwardRef<SVGSVGElement, TablerBrandBingIconProps>(
	function TablerBrandBingIcon(props, ref) {
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
				<path d="M5 3l4 1.5v12l6 -2.5l-2 -1l-1 -4l7 2.5v4.5l-10 5l-4 -2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandBingIcon.displayName = "TablerBrandBingIcon";
}
