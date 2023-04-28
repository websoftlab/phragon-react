import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTrashOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTrashOffIcon = React.forwardRef<SVGSVGElement, TablerTrashOffIconProps>(function TablerTrashOffIcon(
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
			<path d="M3 3l18 18" />
			<path d="M4 7h3m4 0h9" />
			<path d="M10 11l0 6" />
			<path d="M14 14l0 3" />
			<path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923" />
			<path d="M18.384 14.373l.616 -7.373" />
			<path d="M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTrashOffIcon.displayName = "TablerTrashOffIcon";
}
