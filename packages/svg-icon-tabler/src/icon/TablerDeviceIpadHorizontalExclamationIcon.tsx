import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceIpadHorizontalExclamationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceIpadHorizontalExclamationIcon = React.forwardRef<
	SVGSVGElement,
	TablerDeviceIpadHorizontalExclamationIconProps
>(function TablerDeviceIpadHorizontalExclamationIcon(props, ref) {
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
			<path d="M15 20h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
			<path d="M9 17h6" />
			<path d="M19 16v3" />
			<path d="M19 22v.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDeviceIpadHorizontalExclamationIcon.displayName = "TablerDeviceIpadHorizontalExclamationIcon";
}
