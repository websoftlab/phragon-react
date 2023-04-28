import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLifebuoyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLifebuoyIcon = React.forwardRef<SVGSVGElement, TablerLifebuoyIconProps>(function TablerLifebuoyIcon(
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
			<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M15 15l3.35 3.35" />
			<path d="M9 15l-3.35 3.35" />
			<path d="M5.65 5.65l3.35 3.35" />
			<path d="M18.35 5.65l-3.35 3.35" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLifebuoyIcon.displayName = "TablerLifebuoyIcon";
}
