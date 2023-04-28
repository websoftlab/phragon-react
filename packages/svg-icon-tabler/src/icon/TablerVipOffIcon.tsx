import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerVipOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerVipOffIcon = React.forwardRef<SVGSVGElement, TablerVipOffIconProps>(function TablerVipOffIcon(
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
			<path d="M3 5h2m4 0h12" />
			<path d="M3 19h16" />
			<path d="M4 9l2 6h1l2 -6" />
			<path d="M12 12v3" />
			<path d="M16 12v-3h2a2 2 0 1 1 0 4h-1" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerVipOffIcon.displayName = "TablerVipOffIcon";
}
