import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWifiIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWifiIcon = React.forwardRef<SVGSVGElement, TablerWifiIconProps>(function TablerWifiIcon(props, ref) {
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
			<path d="M12 18l.01 0" />
			<path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
			<path d="M6.343 12.343a8 8 0 0 1 11.314 0" />
			<path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWifiIcon.displayName = "TablerWifiIcon";
}
