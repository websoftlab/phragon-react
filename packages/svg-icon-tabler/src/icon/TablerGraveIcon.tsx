import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGraveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGraveIcon = React.forwardRef<SVGSVGElement, TablerGraveIconProps>(function TablerGraveIcon(
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
			<path d="M5 21v-2a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v2h-14z" />
			<path d="M10 16v-5h-4v-4h4v-4h4v4h4v4h-4v5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGraveIcon.displayName = "TablerGraveIcon";
}
