import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandHboIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandHboIcon = React.forwardRef<SVGSVGElement, TablerBrandHboIconProps>(function TablerBrandHboIcon(
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
			<path d="M2 16v-8" />
			<path d="M6 8v8" />
			<path d="M2 12h4" />
			<path d="M9 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8z" />
			<path d="M19 8a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z" />
			<path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrandHboIcon.displayName = "TablerBrandHboIcon";
}
