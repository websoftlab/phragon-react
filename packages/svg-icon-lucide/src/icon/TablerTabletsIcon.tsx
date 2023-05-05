import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTabletsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTabletsIcon = React.forwardRef<SVGSVGElement, TablerTabletsIconProps>(function TablerTabletsIcon(
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
			<path d="M12 7 A5 5 0 0 1 7 12 A5 5 0 0 1 2 7 A5 5 0 0 1 12 7" />
			<path d="M22 17 A5 5 0 0 1 17 22 A5 5 0 0 1 12 17 A5 5 0 0 1 22 17" />
			<path d="M12 17h10" />
			<path d="m3.46 10.54 7.08-7.08" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTabletsIcon.displayName = "TablerTabletsIcon";
}
