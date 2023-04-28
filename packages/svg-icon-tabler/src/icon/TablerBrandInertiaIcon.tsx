import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandInertiaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandInertiaIcon = React.forwardRef<SVGSVGElement, TablerBrandInertiaIconProps>(
	function TablerBrandInertiaIcon(props, ref) {
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
				<path d="M12.5 8l4 4l-4 4h4.5l4 -4l-4 -4z" />
				<path d="M3.5 8l4 4l-4 4h4.5l4 -4l-4 -4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandInertiaIcon.displayName = "TablerBrandInertiaIcon";
}
