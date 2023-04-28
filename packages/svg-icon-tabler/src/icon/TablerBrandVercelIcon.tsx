import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandVercelIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandVercelIcon = React.forwardRef<SVGSVGElement, TablerBrandVercelIconProps>(
	function TablerBrandVercelIcon(props, ref) {
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
				<path d="M3 19h18l-9 -15z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandVercelIcon.displayName = "TablerBrandVercelIcon";
}
