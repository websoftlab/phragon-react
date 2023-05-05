import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDnaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDnaIcon = React.forwardRef<SVGSVGElement, TablerDnaIconProps>(function TablerDnaIcon(props, ref) {
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
			<path d="M2 15c6.667-6 13.333 0 20-6" />
			<path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
			<path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
			<path d="m17 6-2.5-2.5" />
			<path d="m14 8-1-1" />
			<path d="m7 18 2.5 2.5" />
			<path d="m3.5 14.5.5.5" />
			<path d="m20 9 .5.5" />
			<path d="m6.5 12.5 1 1" />
			<path d="m16.5 10.5 1 1" />
			<path d="m10 16 1.5 1.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDnaIcon.displayName = "TablerDnaIcon";
}
