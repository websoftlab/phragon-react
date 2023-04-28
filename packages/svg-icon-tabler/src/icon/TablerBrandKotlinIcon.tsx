import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandKotlinIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandKotlinIcon = React.forwardRef<SVGSVGElement, TablerBrandKotlinIconProps>(
	function TablerBrandKotlinIcon(props, ref) {
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
				<path d="M20 20h-16v-16h16" />
				<path d="M4 20l16 -16" />
				<path d="M4 12l8 -8" />
				<path d="M12 12l8 8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandKotlinIcon.displayName = "TablerBrandKotlinIcon";
}
