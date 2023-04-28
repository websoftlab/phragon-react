import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandWalmartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandWalmartIcon = React.forwardRef<SVGSVGElement, TablerBrandWalmartIconProps>(
	function TablerBrandWalmartIcon(props, ref) {
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
				<path d="M12 8.04v-5.04" />
				<path d="M15.5 10l4.5 -2.5" />
				<path d="M15.5 14l4.5 2.5" />
				<path d="M12 15.96v5.04" />
				<path d="M8.5 14l-4.5 2.5" />
				<path d="M8.5 10l-4.5 -2.505" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandWalmartIcon.displayName = "TablerBrandWalmartIcon";
}
