import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVipIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVipIcon = React.forwardRef<SVGSVGElement, TablerVipIconProps>(function TablerVipIcon(props, ref) {
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
			<path d="M3 5h18" />
			<path d="M3 19h18" />
			<path d="M4 9l2 6h1l2 -6" />
			<path d="M12 9v6" />
			<path d="M16 15v-6h2a2 2 0 1 1 0 4h-2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVipIcon.displayName = "TablerVipIcon";
}
