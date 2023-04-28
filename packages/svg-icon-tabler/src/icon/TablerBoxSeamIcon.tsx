import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoxSeamIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoxSeamIcon = React.forwardRef<SVGSVGElement, TablerBoxSeamIconProps>(function TablerBoxSeamIcon(
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
			<path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" />
			<path d="M12 12l8 -4.5" />
			<path d="M8.2 9.8l7.6 -4.6" />
			<path d="M12 12v9" />
			<path d="M12 12l-8 -4.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBoxSeamIcon.displayName = "TablerBoxSeamIcon";
}
