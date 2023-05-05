import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDatabaseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDatabaseIcon = React.forwardRef<SVGSVGElement, TablerDatabaseIconProps>(function TablerDatabaseIcon(
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
			<path d="M21 5 A9 3 0 0 1 12 8 A9 3 0 0 1 3 5 A9 3 0 0 1 21 5" />
			<path d="M3 5V19A9 3 0 0 0 21 19V5" />
			<path d="M3 12A9 3 0 0 0 21 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDatabaseIcon.displayName = "TablerDatabaseIcon";
}
