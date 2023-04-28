import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerApiAppIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerApiAppIcon = React.forwardRef<SVGSVGElement, TablerApiAppIconProps>(function TablerApiAppIcon(
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
			<path d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5" />
			<path d="M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5" />
			<path d="M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5" />
			<path d="M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerApiAppIcon.displayName = "TablerApiAppIcon";
}
