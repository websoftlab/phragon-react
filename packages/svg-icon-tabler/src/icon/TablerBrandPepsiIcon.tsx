import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandPepsiIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandPepsiIcon = React.forwardRef<SVGSVGElement, TablerBrandPepsiIconProps>(
	function TablerBrandPepsiIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M4 16c5.713 -2.973 11 -3.5 13.449 -11.162" />
				<path d="M5 17.5c5.118 -2.859 15 0 14 -11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandPepsiIcon.displayName = "TablerBrandPepsiIcon";
}
