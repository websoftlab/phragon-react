import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEyeXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEyeXIcon = React.forwardRef<SVGSVGElement, TablerEyeXIconProps>(function TablerEyeXIcon(props, ref) {
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
			<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
			<path d="M13.117 17.933a9.275 9.275 0 0 1 -1.117 .067c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a18.728 18.728 0 0 1 -1.009 1.516" />
			<path d="M22 22l-5 -5" />
			<path d="M17 22l5 -5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEyeXIcon.displayName = "TablerEyeXIcon";
}
