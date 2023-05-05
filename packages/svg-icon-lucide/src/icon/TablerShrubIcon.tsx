import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShrubIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShrubIcon = React.forwardRef<SVGSVGElement, TablerShrubIconProps>(function TablerShrubIcon(
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
			<path d="M12 22v-7l-2-2" />
			<path d="M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z" />
			<path d="m14 14-2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShrubIcon.displayName = "TablerShrubIcon";
}
