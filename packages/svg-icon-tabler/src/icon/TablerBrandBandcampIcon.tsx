import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandBandcampIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandBandcampIcon = React.forwardRef<SVGSVGElement, TablerBrandBandcampIconProps>(
	function TablerBrandBandcampIcon(props, ref) {
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
				<path d="M8.5 6h13.5l-7 12h-13z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandBandcampIcon.displayName = "TablerBrandBandcampIcon";
}
