import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceComputerCameraOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceComputerCameraOffIcon = React.forwardRef<
	SVGSVGElement,
	TablerDeviceComputerCameraOffIconProps
>(function TablerDeviceComputerCameraOffIcon(props, ref) {
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
			<path d="M6.15 6.153a7 7 0 0 0 9.696 9.696m2 -2a7 7 0 0 0 -9.699 -9.695" />
			<path d="M9.13 9.122a3 3 0 0 0 3.743 3.749m2 -2a3 3 0 0 0 -3.737 -3.736" />
			<path d="M8 16l-2.091 3.486a1 1 0 0 0 .857 1.514h10.468a1 1 0 0 0 .857 -1.514l-2.091 -3.486" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDeviceComputerCameraOffIcon.displayName = "TablerDeviceComputerCameraOffIcon";
}
