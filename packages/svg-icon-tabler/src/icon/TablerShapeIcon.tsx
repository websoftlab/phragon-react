import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShapeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShapeIcon = React.forwardRef<SVGSVGElement, TablerShapeIconProps>(function TablerShapeIcon(
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
			<path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M5 7l0 10" />
			<path d="M7 5l10 0" />
			<path d="M7 19l10 0" />
			<path d="M19 7l0 10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShapeIcon.displayName = "TablerShapeIcon";
}
