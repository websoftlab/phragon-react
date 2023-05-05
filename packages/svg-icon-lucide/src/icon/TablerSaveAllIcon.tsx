import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSaveAllIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSaveAllIcon = React.forwardRef<SVGSVGElement, TablerSaveAllIconProps>(function TablerSaveAllIcon(
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
			<path d="M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z" />
			<path d="M10 2v4h6" />
			<path d="M18 18v-7h-8v7" />
			<path d="M18 22H4a2 2 0 0 1-2-2V6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSaveAllIcon.displayName = "TablerSaveAllIcon";
}
