import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLogicNotIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLogicNotIcon = React.forwardRef<SVGSVGElement, TablerLogicNotIconProps>(function TablerLogicNotIcon(
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
			<path d="M22 12h-3" />
			<path d="M2 9h3" />
			<path d="M2 15h3" />
			<path d="M5 5l10 7l-10 7z" />
			<path d="M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLogicNotIcon.displayName = "TablerLogicNotIcon";
}
