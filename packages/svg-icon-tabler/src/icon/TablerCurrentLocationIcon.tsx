import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCurrentLocationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCurrentLocationIcon = React.forwardRef<SVGSVGElement, TablerCurrentLocationIconProps>(
	function TablerCurrentLocationIcon(props, ref) {
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
				<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
				<path d="M12 2l0 2" />
				<path d="M12 20l0 2" />
				<path d="M20 12l2 0" />
				<path d="M2 12l2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCurrentLocationIcon.displayName = "TablerCurrentLocationIcon";
}
