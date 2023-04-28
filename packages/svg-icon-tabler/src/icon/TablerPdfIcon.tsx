import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPdfIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPdfIcon = React.forwardRef<SVGSVGElement, TablerPdfIconProps>(function TablerPdfIcon(props, ref) {
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
			<path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" />
			<path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" />
			<path d="M17 12h3" />
			<path d="M21 8h-4v8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPdfIcon.displayName = "TablerPdfIcon";
}
