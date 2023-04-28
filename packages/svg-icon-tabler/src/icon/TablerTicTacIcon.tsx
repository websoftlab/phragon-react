import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTicTacIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTicTacIcon = React.forwardRef<SVGSVGElement, TablerTicTacIconProps>(function TablerTicTacIcon(
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
			<path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M3 12h18" />
			<path d="M12 3v18" />
			<path d="M4 16l4 4" />
			<path d="M4 20l4 -4" />
			<path d="M16 4l4 4" />
			<path d="M16 8l4 -4" />
			<path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTicTacIcon.displayName = "TablerTicTacIcon";
}
