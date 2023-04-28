import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAntennaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAntennaIcon = React.forwardRef<SVGSVGElement, TablerAntennaIconProps>(function TablerAntennaIcon(
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
			<path d="M20 4v8" />
			<path d="M16 4.5v7" />
			<path d="M12 5v16" />
			<path d="M8 5.5v5" />
			<path d="M4 6v4" />
			<path d="M20 8h-16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAntennaIcon.displayName = "TablerAntennaIcon";
}
