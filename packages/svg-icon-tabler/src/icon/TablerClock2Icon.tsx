import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClock2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClock2Icon = React.forwardRef<SVGSVGElement, TablerClock2IconProps>(function TablerClock2Icon(
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
			<path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
			<path d="M12 7v5l3 3" />
			<path d="M4 12h1" />
			<path d="M19 12h1" />
			<path d="M12 19v1" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerClock2Icon.displayName = "TablerClock2Icon";
}
