import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerListEndIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerListEndIcon = React.forwardRef<SVGSVGElement, TablerListEndIconProps>(function TablerListEndIcon(
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
			<path d="M16 12H3" />
			<path d="M16 6H3" />
			<path d="M10 18H3" />
			<path d="M21 6v10a2 2 0 0 1-2 2h-4" />
			<path d="m16 16-2 2 2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerListEndIcon.displayName = "TablerListEndIcon";
}
