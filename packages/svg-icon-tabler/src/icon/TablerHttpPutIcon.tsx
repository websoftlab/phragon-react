import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHttpPutIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHttpPutIcon = React.forwardRef<SVGSVGElement, TablerHttpPutIconProps>(function TablerHttpPutIcon(
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
			<path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" />
			<path d="M17 8h4" />
			<path d="M19 8v8" />
			<path d="M10 8v6a2 2 0 1 0 4 0v-6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerHttpPutIcon.displayName = "TablerHttpPutIcon";
}
