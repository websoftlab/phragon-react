import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFeatherIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFeatherIcon = React.forwardRef<SVGSVGElement, TablerFeatherIconProps>(function TablerFeatherIcon(
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
			<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
			<path d="M16 8 L2 22" />
			<path d="M17.5 15 L9 15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFeatherIcon.displayName = "TablerFeatherIcon";
}
