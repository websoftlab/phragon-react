import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceIpadHorizontalPlusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceIpadHorizontalPlusIcon = React.forwardRef<
	SVGSVGElement,
	TablerDeviceIpadHorizontalPlusIconProps
>(function TablerDeviceIpadHorizontalPlusIcon(props, ref) {
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
			<path d="M12 20h-7a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6.5" />
			<path d="M9 17h3.5" />
			<path d="M16 19h6" />
			<path d="M19 16v6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDeviceIpadHorizontalPlusIcon.displayName = "TablerDeviceIpadHorizontalPlusIcon";
}
