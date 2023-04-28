import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTexIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTexIcon = React.forwardRef<SVGSVGElement, TablerTexIconProps>(function TablerTexIcon(props, ref) {
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
			<path d="M9 8v-1h-6v1" />
			<path d="M6 15v-8" />
			<path d="M21 15l-5 -8" />
			<path d="M16 15l5 -8" />
			<path d="M14 11h-4v8h4" />
			<path d="M10 15h3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTexIcon.displayName = "TablerTexIcon";
}
