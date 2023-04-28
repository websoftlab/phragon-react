import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGridDotsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGridDotsIcon = React.forwardRef<SVGSVGElement, TablerGridDotsIconProps>(function TablerGridDotsIcon(
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
			<path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGridDotsIcon.displayName = "TablerGridDotsIcon";
}
