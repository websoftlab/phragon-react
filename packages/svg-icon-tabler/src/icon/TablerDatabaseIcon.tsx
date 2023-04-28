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
			<path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
			<path d="M4 6v6a8 3 0 0 0 16 0v-6" />
			<path d="M4 12v6a8 3 0 0 0 16 0v-6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDatabaseIcon.displayName = "TablerDatabaseIcon";
}
