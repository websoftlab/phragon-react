import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceIpadHorizontalShareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceIpadHorizontalShareIcon = React.forwardRef<
	SVGSVGElement,
	TablerDeviceIpadHorizontalShareIconProps
>(function TablerDeviceIpadHorizontalShareIcon(props, ref) {
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
			<path d="M12.5 20h-7.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
			<path d="M9 17h3" />
			<path d="M16 22l5 -5" />
			<path d="M21 21.5v-4.5h-4.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDeviceIpadHorizontalShareIcon.displayName = "TablerDeviceIpadHorizontalShareIcon";
}
