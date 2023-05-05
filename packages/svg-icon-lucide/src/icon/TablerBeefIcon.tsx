import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBeefIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBeefIcon = React.forwardRef<SVGSVGElement, TablerBeefIconProps>(function TablerBeefIcon(props, ref) {
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
			<path d="M15 8.5 A2.5 2.5 0 0 1 12.5 11 A2.5 2.5 0 0 1 10 8.5 A2.5 2.5 0 0 1 15 8.5" />
			<path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" />
			<path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBeefIcon.displayName = "TablerBeefIcon";
}
