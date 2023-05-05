import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRadioIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRadioIcon = React.forwardRef<SVGSVGElement, TablerRadioIconProps>(function TablerRadioIcon(
	props,
	ref
) {
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
			<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
			<path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
			<path d="M14 12 A2 2 0 0 1 12 14 A2 2 0 0 1 10 12 A2 2 0 0 1 14 12" />
			<path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
			<path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRadioIcon.displayName = "TablerRadioIcon";
}
