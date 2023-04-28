import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHorseToyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHorseToyIcon = React.forwardRef<SVGSVGElement, TablerHorseToyIconProps>(function TablerHorseToyIcon(
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
			<path d="M3.5 17.5c5.667 4.667 11.333 4.667 17 0" />
			<path d="M19 18.5l-2 -8.5l1 -2l2 1l1.5 -1.5l-2.5 -4.5c-5.052 .218 -5.99 3.133 -7 6h-6a3 3 0 0 0 -3 3" />
			<path d="M5 18.5l2 -9.5" />
			<path d="M8 20l2 -5h4l2 5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHorseToyIcon.displayName = "TablerHorseToyIcon";
}
