import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSwordsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSwordsIcon = React.forwardRef<SVGSVGElement, TablerSwordsIconProps>(function TablerSwordsIcon(
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
			<path d="M14.5 17.5 L3 6 L3 3 L6 3 L17.5 14.5" />
			<path d="M13 19 L19 13" />
			<path d="M16 16 L20 20" />
			<path d="M19 21 L21 19" />
			<path d="M14.5 6.5 L18 3 L21 3 L21 6 L17.5 9.5" />
			<path d="M5 14 L9 18" />
			<path d="M7 17 L4 20" />
			<path d="M3 19 L5 21" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSwordsIcon.displayName = "TablerSwordsIcon";
}
