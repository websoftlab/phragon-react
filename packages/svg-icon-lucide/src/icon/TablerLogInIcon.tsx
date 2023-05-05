import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLogInIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLogInIcon = React.forwardRef<SVGSVGElement, TablerLogInIconProps>(function TablerLogInIcon(
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
			<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
			<path d="M10 17 L15 12 L10 7" />
			<path d="M15 12 L3 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLogInIcon.displayName = "TablerLogInIcon";
}
