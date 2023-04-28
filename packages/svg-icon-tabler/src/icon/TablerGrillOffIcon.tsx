import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGrillOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGrillOffIcon = React.forwardRef<SVGSVGElement, TablerGrillOffIconProps>(function TablerGrillOffIcon(
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
			<path d="M8 8h-3a6 6 0 0 0 6 6h2c.315 0 .624 -.024 .926 -.071m2.786 -1.214a5.99 5.99 0 0 0 2.284 -4.49l0 -.225h-7" />
			<path d="M18.827 18.815a2 2 0 1 1 -2.663 -2.633" />
			<path d="M9 14l-3 6" />
			<path d="M15 18h-8" />
			<path d="M15 5v-1" />
			<path d="M12 5v-1" />
			<path d="M9 5v-1" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGrillOffIcon.displayName = "TablerGrillOffIcon";
}
