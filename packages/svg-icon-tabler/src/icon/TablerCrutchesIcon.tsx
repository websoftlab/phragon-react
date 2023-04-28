import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCrutchesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCrutchesIcon = React.forwardRef<SVGSVGElement, TablerCrutchesIconProps>(function TablerCrutchesIcon(
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
			<path d="M8 3m0 2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2z" />
			<path d="M11 21h2" />
			<path d="M12 21v-4.092a3 3 0 0 1 .504 -1.664l.992 -1.488a3 3 0 0 0 .504 -1.664v-5.092" />
			<path d="M12 21v-4.092a3 3 0 0 0 -.504 -1.664l-.992 -1.488a3 3 0 0 1 -.504 -1.664v-5.092" />
			<path d="M10 11h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCrutchesIcon.displayName = "TablerCrutchesIcon";
}
