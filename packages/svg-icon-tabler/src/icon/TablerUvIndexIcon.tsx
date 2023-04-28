import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUvIndexIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUvIndexIcon = React.forwardRef<SVGSVGElement, TablerUvIndexIconProps>(function TablerUvIndexIcon(
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
			<path d="M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0" />
			<path d="M12 4v-1" />
			<path d="M13 16l2 5h1l2 -5" />
			<path d="M6 16v3a2 2 0 1 0 4 0v-3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUvIndexIcon.displayName = "TablerUvIndexIcon";
}
