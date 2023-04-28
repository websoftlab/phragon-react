import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerXboxAIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerXboxAIcon = React.forwardRef<SVGSVGElement, TablerXboxAIconProps>(function TablerXboxAIcon(
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
			<path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
			<path d="M15 16l-3 -8l-3 8" />
			<path d="M14 14h-4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerXboxAIcon.displayName = "TablerXboxAIcon";
}
