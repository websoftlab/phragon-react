import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceMobileExclamationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceMobileExclamationIcon = React.forwardRef<
	SVGSVGElement,
	TablerDeviceMobileExclamationIconProps
>(function TablerDeviceMobileExclamationIcon(props, ref) {
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
			<path d="M15 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7" />
			<path d="M11 4h2" />
			<path d="M12 17v.01" />
			<path d="M19 16v3" />
			<path d="M19 22v.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDeviceMobileExclamationIcon.displayName = "TablerDeviceMobileExclamationIcon";
}
