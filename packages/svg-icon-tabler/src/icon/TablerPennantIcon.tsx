import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPennantIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPennantIcon = React.forwardRef<SVGSVGElement, TablerPennantIconProps>(function TablerPennantIcon(
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
			<path d="M8 21l4 0" />
			<path d="M10 21l0 -18" />
			<path d="M10 4l9 4l-9 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPennantIcon.displayName = "TablerPennantIcon";
}
