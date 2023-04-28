import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSnowmanIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSnowmanIcon = React.forwardRef<SVGSVGElement, TablerSnowmanIconProps>(function TablerSnowmanIcon(
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
			<path d="M12 3a4 4 0 0 1 2.906 6.75a6 6 0 1 1 -5.81 0a4 4 0 0 1 2.904 -6.75z" />
			<path d="M17.5 11.5l2.5 -1.5" />
			<path d="M6.5 11.5l-2.5 -1.5" />
			<path d="M12 13h.01" />
			<path d="M12 16h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSnowmanIcon.displayName = "TablerSnowmanIcon";
}
