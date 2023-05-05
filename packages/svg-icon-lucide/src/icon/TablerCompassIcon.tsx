import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCompassIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCompassIcon = React.forwardRef<SVGSVGElement, TablerCompassIconProps>(function TablerCompassIcon(
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
			<path d="M22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 22 12" />
			<path d="M16.24 7.76 L14.12 14.12 L7.76 16.24 L9.88 9.88 L16.24 7.76Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCompassIcon.displayName = "TablerCompassIcon";
}
