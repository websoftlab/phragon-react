import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWrapTextIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWrapTextIcon = React.forwardRef<SVGSVGElement, TablerWrapTextIconProps>(function TablerWrapTextIcon(
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
			<path d="M3 6 L21 6" />
			<path d="M3 12h15a3 3 0 1 1 0 6h-4" />
			<path d="M16 16 L14 18 L16 20" />
			<path d="M3 18 L10 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWrapTextIcon.displayName = "TablerWrapTextIcon";
}
