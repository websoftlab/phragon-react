import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGizmoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGizmoIcon = React.forwardRef<SVGSVGElement, TablerGizmoIconProps>(function TablerGizmoIcon(
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
			<path d="M20 19l-8 -5.5l-8 5.5" />
			<path d="M12 4v9.5" />
			<path d="M12 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M4 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M20 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerGizmoIcon.displayName = "TablerGizmoIcon";
}
