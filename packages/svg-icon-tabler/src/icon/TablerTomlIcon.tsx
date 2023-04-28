import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTomlIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTomlIcon = React.forwardRef<SVGSVGElement, TablerTomlIconProps>(function TablerTomlIcon(props, ref) {
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
			<path d="M1.499 8h3" />
			<path d="M2.999 8v8" />
			<path d="M8.5 8a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1 -3 0v-5a1.5 1.5 0 0 1 1.5 -1.5z" />
			<path d="M13 16v-8l2 5l2 -5v8" />
			<path d="M20 8v8h2.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTomlIcon.displayName = "TablerTomlIcon";
}
