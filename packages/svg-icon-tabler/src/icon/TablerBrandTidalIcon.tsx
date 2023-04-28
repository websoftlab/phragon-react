import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandTidalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandTidalIcon = React.forwardRef<SVGSVGElement, TablerBrandTidalIconProps>(
	function TablerBrandTidalIcon(props, ref) {
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
				<path d="M5.333 6l3.334 3.25l3.333 -3.25l3.333 3.25l3.334 -3.25l3.333 3.25l-3.333 3.25l-3.334 -3.25l-3.333 3.25l3.333 3.25l-3.333 3.25l-3.333 -3.25l3.333 -3.25l-3.333 -3.25l-3.334 3.25l-3.333 -3.25z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandTidalIcon.displayName = "TablerBrandTidalIcon";
}
