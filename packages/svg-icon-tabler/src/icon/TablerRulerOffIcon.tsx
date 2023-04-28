import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRulerOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRulerOffIcon = React.forwardRef<SVGSVGElement, TablerRulerOffIconProps>(function TablerRulerOffIcon(
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
			<path d="M8 4h11a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-4m-3.713 .299a1 1 0 0 0 -.287 .701v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14c0 -.284 .118 -.54 .308 -.722" />
			<path d="M4 8h2" />
			<path d="M4 12h3" />
			<path d="M4 16h2" />
			<path d="M12 4v3" />
			<path d="M16 4v2" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRulerOffIcon.displayName = "TablerRulerOffIcon";
}
