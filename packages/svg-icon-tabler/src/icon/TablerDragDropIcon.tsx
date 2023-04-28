import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDragDropIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDragDropIcon = React.forwardRef<SVGSVGElement, TablerDragDropIconProps>(function TablerDragDropIcon(
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
			<path d="M19 11v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
			<path d="M13 13l9 3l-4 2l-2 4l-3 -9" />
			<path d="M3 3l0 .01" />
			<path d="M7 3l0 .01" />
			<path d="M11 3l0 .01" />
			<path d="M15 3l0 .01" />
			<path d="M3 7l0 .01" />
			<path d="M3 11l0 .01" />
			<path d="M3 15l0 .01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDragDropIcon.displayName = "TablerDragDropIcon";
}
