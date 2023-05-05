import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBombIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBombIcon = React.forwardRef<SVGSVGElement, TablerBombIconProps>(function TablerBombIcon(props, ref) {
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
			<path d="M20 13 A9 9 0 0 1 11 22 A9 9 0 0 1 2 13 A9 9 0 0 1 20 13" />
			<path d="m19.5 9.5 1.8-1.8a2.4 2.4 0 0 0 0-3.4l-1.6-1.6a2.41 2.41 0 0 0-3.4 0l-1.8 1.8" />
			<path d="m22 2-1.5 1.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBombIcon.displayName = "TablerBombIcon";
}
