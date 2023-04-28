import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDevicesPcIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDevicesPcIcon = React.forwardRef<SVGSVGElement, TablerDevicesPcIconProps>(
	function TablerDevicesPcIcon(props, ref) {
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
				<path d="M3 5h6v14h-6z" />
				<path d="M12 9h10v7h-10z" />
				<path d="M14 19h6" />
				<path d="M17 16v3" />
				<path d="M6 13v.01" />
				<path d="M6 16v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDevicesPcIcon.displayName = "TablerDevicesPcIcon";
}
