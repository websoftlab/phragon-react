import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAntennaOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAntennaOffIcon = React.forwardRef<SVGSVGElement, TablerAntennaOffIconProps>(
	function TablerAntennaOffIcon(props, ref) {
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
				<path d="M20 4v8" />
				<path d="M16 4.5v7" />
				<path d="M12 5v3m0 4v9" />
				<path d="M8 8v2.5" />
				<path d="M4 6v4" />
				<path d="M20 8h-8m-4 0h-4" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAntennaOffIcon.displayName = "TablerAntennaOffIcon";
}
