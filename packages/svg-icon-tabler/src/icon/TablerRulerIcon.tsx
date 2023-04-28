import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRulerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRulerIcon = React.forwardRef<SVGSVGElement, TablerRulerIconProps>(function TablerRulerIcon(
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
			<path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
			<path d="M4 8l2 0" />
			<path d="M4 12l3 0" />
			<path d="M4 16l2 0" />
			<path d="M8 4l0 2" />
			<path d="M12 4l0 3" />
			<path d="M16 4l0 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRulerIcon.displayName = "TablerRulerIcon";
}
