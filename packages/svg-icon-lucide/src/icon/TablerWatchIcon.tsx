import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWatchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWatchIcon = React.forwardRef<SVGSVGElement, TablerWatchIconProps>(function TablerWatchIcon(
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
			<path d="M18 12 A6 6 0 0 1 12 18 A6 6 0 0 1 6 12 A6 6 0 0 1 18 12" />
			<path d="M12 10 L12 12 L13 13" />
			<path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
			<path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWatchIcon.displayName = "TablerWatchIcon";
}
