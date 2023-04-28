import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFile3dIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFile3dIcon = React.forwardRef<SVGSVGElement, TablerFile3dIconProps>(function TablerFile3dIcon(
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
			<path d="M14 3v4a1 1 0 0 0 1 1h4" />
			<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
			<path d="M12 13.5l4 -1.5" />
			<path d="M8 11.846l4 1.654v4.5l4 -1.846v-4.308l-4 -1.846z" />
			<path d="M8 12v4.2l4 1.8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFile3dIcon.displayName = "TablerFile3dIcon";
}
