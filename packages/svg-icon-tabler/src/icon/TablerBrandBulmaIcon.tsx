import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandBulmaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandBulmaIcon = React.forwardRef<SVGSVGElement, TablerBrandBulmaIconProps>(
	function TablerBrandBulmaIcon(props, ref) {
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
				<path d="M5 16l1 -9l5 -5l6.5 6l-3.5 4l5 5l-8 5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandBulmaIcon.displayName = "TablerBrandBulmaIcon";
}
